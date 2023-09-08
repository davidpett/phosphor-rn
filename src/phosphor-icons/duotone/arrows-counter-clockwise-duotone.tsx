import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsCounterClockwiseDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m40 48 48 48H40Zm128 112 48 48v-48Z" opacity={0.2} />
    <Path d="M95.39 99.06a8 8 0 0 0-1.73-8.72L73.08 69.76C86.08 58.85 104.83 48 128 48c35.95 0 58.13 21.44 58.36 21.68a8 8 0 0 0 11.3-11.34C196.58 57.27 170.82 32 128 32c-23.36 0-46.13 9.1-66.28 26.41L45.66 42.34A8 8 0 0 0 32 48v48a8 8 0 0 0 8 8h48a8 8 0 0 0 7.39-4.94ZM48 88V67.31L68.69 88Zm168 64h-48a8 8 0 0 0-5.66 13.66l20.58 20.58C169.92 197.15 151.17 208 128 208c-35.84 0-58-21.32-58.36-21.67a8 8 0 0 0-11.3 11.33C59.42 198.73 85.18 224 128 224c23.36 0 46.13-9.1 66.28-26.41l16.06 16.07A8 8 0 0 0 224 208v-48a8 8 0 0 0-8-8Zm-8 36.69L187.31 168H208Z" />
  </Svg>
);
const Memo = memo(SvgArrowsCounterClockwiseDuotone);
export default Memo;
