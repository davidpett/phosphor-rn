import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSignOutBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M116 216a12 12 0 0 1-12 12H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h56a12 12 0 0 1 0 24H52v152h52a12 12 0 0 1 12 12Zm108.49-96.49-40-40a12 12 0 0 0-17 17L187 116h-83a12 12 0 0 0 0 24h83l-19.52 19.51a12 12 0 0 0 17 17l40-40a12 12 0 0 0 .01-17Z" />
  </Svg>
);
const Memo = memo(SvgSignOutBold);
export default Memo;
