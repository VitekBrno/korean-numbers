const sinoKorean = {
  0: '영',
  1: '일',
  2: '이',
  3: '삼',
  4: '사',
  5: '오',
  6: '육',
  7: '칠',
  8: '팔',
  9: '구',
  10: '십',
  100: '백',
  1000: '천'
};

const nativeKorean = {
  0: '영',
  1: '하나',
  2: '둘',
  3: '셋',
  4: '넷',
  5: '다섯',
  6: '여섯',
  7: '일곱',
  8: '여덟',
  9: '아홉',
  10: '열',
  20: '스물',
  30: '서른',
  40: '마흔',
  50: '쉰',
  60: '예순',
  70: '일흔',
  80: '여든',
  90: '아흔'
};

export function convertToSinoKorean(num) {
  if (num === 0) return sinoKorean[0];
  
  const digits = String(num).split('').map(Number);
  const length = digits.length;
  let result = '';
  
  digits.forEach((digit, index) => {
    if (digit === 0) return;
    
    const position = length - index - 1;
    const unit = Math.pow(10, position);
    
    if (unit >= 10) {
      if (digit === 1) {
        result += sinoKorean[unit];
      } else {
        result += sinoKorean[digit] + sinoKorean[unit];
      }
    } else {
      result += sinoKorean[digit];
    }
  });
  
  return result;
}

export function convertToNativeKorean(num) {
  if (num === 0) return nativeKorean[0];
  if (num <= 9) return nativeKorean[num];
  
  const tens = Math.floor(num / 10) * 10;
  const ones = num % 10;
  
  let result = nativeKorean[tens] || '';
  if (ones > 0) {
    result = result ? `${result} ${nativeKorean[ones]}` : nativeKorean[ones];
  }
  
  return result;
}