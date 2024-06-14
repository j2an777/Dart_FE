import { IconValues } from '@/components/icon';
import { Colors } from '@/styles/colorPalette';

interface StarInfo {
  value: IconValues;
  fillColor: Colors;
}

const getStarArray = (rate: number) => {
  const starArray = Array.from({ length: 5 });
  // [0, 1, 2, 3, 4]

  return starArray.map((_, index) => {
    if (index + 1 <= rate) {
      return {
        value: 'review',
        fillColor: 'black',
      };
    } else if (Math.ceil(rate) !== rate && index === Math.floor(rate)) {
      return {
        value: 'halfreview',
        fillColor: 'black',
      };
    } else {
      return {
        value: 'review',
        fillColor: 'white',
      };
    }
  }) as StarInfo[];
};

export default getStarArray;
