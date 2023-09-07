import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUDownRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m232.49 176.49-48 48a12 12 0 0 1-17-17L195 180H88a68 68 0 0 1 0-136h88a12 12 0 0 1 0 24H88a44 44 0 0 0 0 88h107l-27.52-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1 .01 17Z" />
  </Svg>
);
const Memo = memo(SvgArrowUDownRightBold);
export default Memo;
