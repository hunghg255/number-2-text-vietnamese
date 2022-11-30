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

function Command(i, j, number, res) {
  const s = [];
  let k = number.length;

  if (j != null) {
    ++i;
  }

  while (k > i) {
    s.push(number[--k]);
  }

  if (j != null) {
    let v = parseInt(number[i - 1]);

    let t = Math.floor(v / 100);
    let c = Math.floor(v % 100);
    let d = Math.floor(c % 10);

    c = Math.floor(c / 10);

    if (j == 0) {
      if (t != 0 || res.length > 0) {
        res.push(so[t], hang[0]);
      }
    } else if (j == 1) {
      if (c !== 0 || res.length > 0) {
        res.push(chuc[c]);
      }
    } else {
      switch (d) {
        // case 0:
        //   if (res.length > 1) res.push(so[d]);
        //   break;
        case 1:
          res.push(c < 2 ? so[d] : dacbiet[d]);
          break;
        case 4:
          res.push(c == 1 ? so[d] : dacbiet[d]);
          break;
        case 5:
          res.push(c == 0 ? so[d] : dacbiet[d]);
          break;
        default:
          if (res?.length > 1) res.push(so[d]);
          break;
      }

      const n = number.length - i;
      if (n > 0 ) {
        res.push(hang[Math.floor(((n - 1) % 3) + 1)]);
      }
    }
  }
}

const chunk = (numberAbs) => {
  const str = numberAbs.toString();
  const cache = [];
  const number = [];
  let i = str.length - 1;
  while (i >= 0 && i < str.length) {
    if (cache.length === 3) {
      number.unshift(cache.join(''));
      cache.length = 0;
    }
    cache.unshift(str[i]);

    if (i === 0 && cache.length) number.unshift(cache.join(''));

    i = i - 1;
  }

  return number;
};

function number2TextVietnamese(numberInput, seperator) {
  let res = [];
  let numberAbs = numberInput?.startsWith('-') ? numberInput.slice(1) : numberInput;
  let number = chunk(numberAbs);
  let k = 0;

  while (k < number.length) {
    for (let j = 0; j < 3; j++) Command(k, j, number, res);
    if (k < number.length - 1 && seperator) res.push(seperator);
    k++;
  }

  res = res.join(' ').trim();
  if (seperator) res = res.replaceAll(` ${seperator} `, `${seperator} `);
  res = !res ? so[numberAbs] : res;
  if (numberInput?.startsWith('-')) res = `âm ${res}`;

  return res;
}

export default number2TextVietnamese;
