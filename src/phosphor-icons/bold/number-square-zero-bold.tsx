import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSquareZeroBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 188c28.26 0 48-24.67 48-60s-19.74-60-48-60-48 24.67-48 60 19.74 60 48 60Zm0-96c23.33 0 24 32.32 24 36s-.67 36-24 36-24-32.32-24-36 .67-36 24-36Zm80-64H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Zm-4 176H52V52h152Z" />
  </Svg>
);
const Memo = memo(SvgNumberSquareZeroBold);
export default Memo;
