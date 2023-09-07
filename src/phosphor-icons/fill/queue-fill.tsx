import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgQueueFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8Zm104 56H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16Zm0 64H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16Zm108.24-30.78-64-40A8 8 0 0 0 168 120v80a8 8 0 0 0 12.24 6.78l64-40a8 8 0 0 0 0-13.56Z" />
  </Svg>
);
const Memo = memo(SvgQueueFill);
export default Memo;