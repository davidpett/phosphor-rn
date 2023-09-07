import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShareLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.24 108.24-48 48a6 6 0 0 1-8.48-8.48L209.51 110H165a89.94 89.94 0 0 0-87.17 67.5 6 6 0 0 1-11.62-3A101.94 101.94 0 0 1 165 98h44.53l-37.77-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48ZM192 210H40a2 2 0 0 1-2-2V88a6 6 0 0 0-12 0v120a14 14 0 0 0 14 14h152a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgShareLight);
export default Memo;
