import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChampagneFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M149.91 13.53A8 8 0 0 0 142.3 8H97.71a8 8 0 0 0-7.61 5.53 451 451 0 0 0-14.21 59.7c-7.26 44.25-4.35 75.76 8.65 93.66A40 40 0 0 0 112 183.42V232H96a8 8 0 1 0 0 16h48a8 8 0 0 0 0-16h-16v-48.58a39.94 39.94 0 0 0 27.46-16.53c13-17.9 15.92-49.41 8.66-93.66a451 451 0 0 0-14.21-59.7ZM93.8 64c3-15.58 6.73-29.81 9.79-40h32.83c3.06 10.19 6.77 24.42 9.8 40ZM232 52a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-48-32a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm24 80a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgChampagneFill);
export default Memo;
