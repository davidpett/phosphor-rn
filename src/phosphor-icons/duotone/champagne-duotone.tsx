import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChampagneDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M120 176c-44.7 0-43.7-57.87-35.8-104h71.6c7.9 46.13 8.9 104-35.8 104Z"
      opacity={0.2}
    />
    <Path d="M149.91 13.53A8 8 0 0 0 142.3 8H97.71a8 8 0 0 0-7.61 5.53 451 451 0 0 0-14.21 59.7c-7.26 44.25-4.35 75.76 8.65 93.66A40 40 0 0 0 112 183.42V232H96a8 8 0 1 0 0 16h48a8 8 0 0 0 0-16h-16v-48.58a39.94 39.94 0 0 0 27.46-16.53c13-17.9 15.92-49.41 8.66-93.66a451 451 0 0 0-14.21-59.7ZM103.59 24h32.83c3.06 10.19 6.77 24.42 9.8 40H93.8c3.03-15.58 6.73-29.81 9.79-40Zm38.93 133.48C137.38 164.56 130 168 120 168s-17.37-3.44-22.51-10.51C85.9 141.54 86.55 110 91 80h58c4.47 30 5.12 61.52-6.48 77.48ZM232 52a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-48-32a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm24 80a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgChampagneDuotone);
export default Memo;
