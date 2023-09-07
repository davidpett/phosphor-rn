import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignCenterHorizontalSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 96v64a16 16 0 0 1-16 16h-72v32a8 8 0 0 1-16 0v-32H48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h72V48a8 8 0 0 1 16 0v32h72a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgAlignCenterHorizontalSimpleFill);
export default Memo;
