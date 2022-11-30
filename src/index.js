const chuc = [
  'linh',
  'mười',
  'hai mươi',
  'ba mươi',
  'bốn mươi',
  'năm mươi',
  'sáu mươi',
  'bảy mươi',
  'tám mươi',
  'chín mươi',
];

const so = [
  'không',
  'một',
  'hai',
  'ba',
  'bốn',
  'năm',
  'sáu',
  'bảy',
  'tám',
  'chín',
];

const hang = ['trăm', 'nghìn', 'triệu', 'tỷ'];

const dacbiet = [null, 'mốt', null, null, 'tư', 'lăm'];

const  number2TextVietnamese = (numberInput, seperator) => {
  const s = [];
  let r = [];
  let n;
  let number = Math.abs(numberInput);

  if (!Number.isInteger(number)) return number;

  if (Math.abs(number) > 9007199254740991) {
    return 'Your number is too big';
  }

  while (1) {
    s.push(Math.floor(number % 1000));
    if ((number /= 1000) === 0) break;
  }

  while ((n = s.length)) {
    if (r.length > 0) {
      r.push(
        hang[Math.floor((n - 1) % 3) + 1] + (seperator ? `${seperator} ` : '')
      );
    }

    const a = s.pop();
    if (a === 0) continue;

    let c = Math.floor(a % 100);
    const t = Math.floor(a / 100);
    const d = Math.floor(c % 10);

    c = Math.floor(c / 10);

    if (r.length || t) {
      r.push(so[t]);
      r.push(hang[0]);
    }

    if (r.length || c) {
      r.push(chuc[c]);
    }

    switch (d) {
      case 0:
        break;
      case 1:
        r.push(c < 2 ? so[d] : dacbiet[d]);
        break;
      case 4:
        r.push(c == 1 ? so[d] : dacbiet[d]);
        break;
      case 5:
        r.push(c == 0 ? so[d] : dacbiet[d]);
        break;
      default:
        r.push(so[d]);
        break;
    }
  }

  r = r.join(' ').trim();
  r = !r ? so[number] : r;
  r = r.endsWith(seperator) ? r.slice(0, -1) : r;
  r = r.endsWith('linh') ? r.slice(0, -5) : r;
  r = numberInput < 0 ? `âm ${r}` : r;

  return r;
}

export default number2TextVietnamese;
