import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextAlignRightFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 64v8a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Zm-8 32H88a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8Zm0 40H40a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8Zm0 40H88a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgTextAlignRightFill);
export default Memo;
