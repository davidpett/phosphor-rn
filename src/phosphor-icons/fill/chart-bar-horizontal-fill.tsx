import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartBarHorizontalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 112v32a8 8 0 0 1-8 8H48v16h88a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H48v8a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0v8h120a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H48v16h168a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgChartBarHorizontalFill);
export default Memo;
