import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLadderFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M215.52 213.26 164.51 73l9.09-25H184a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h4.58l-60.1 165.26a8 8 0 0 0 4.79 10.26A8.14 8.14 0 0 0 40 224a8 8 0 0 0 7.52-5.27L57.24 192h47l-7.74 21.26a8 8 0 0 0 4.79 10.26 8.14 8.14 0 0 0 2.71.48 8 8 0 0 0 7.52-5.27L130 168h52l18.45 50.73A8 8 0 0 0 208 224a8.14 8.14 0 0 0 2.73-.48 8 8 0 0 0 4.79-10.26ZM108.36 64h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16Zm2.91 96h-32a8 8 0 1 1 0-16h32a8 8 0 0 1 0 16Zm14.55-40h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16Zm10 32L156 96.41 176.21 152Z" />
  </Svg>
);
const Memo = memo(SvgLadderFill);
export default Memo;
