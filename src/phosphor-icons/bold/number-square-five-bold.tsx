import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSquareFiveBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Zm-4 176H52V52h152ZM92.16 126l8-48A12 12 0 0 1 112 68h40a12 12 0 0 1 0 24h-29.83l-2.71 16.23A45.39 45.39 0 0 1 124 108a40 40 0 0 1 0 80 39.53 39.53 0 0 1-28.57-11.6 12 12 0 1 1 17.14-16.8A15.54 15.54 0 0 0 124 164a16 16 0 0 0 0-32 15.54 15.54 0 0 0-11.43 4.4A12 12 0 0 1 92.16 126Z" />
  </Svg>
);
const Memo = memo(SvgNumberSquareFiveBold);
export default Memo;
