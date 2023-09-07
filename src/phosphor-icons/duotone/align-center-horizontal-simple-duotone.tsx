import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignCenterHorizontalSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 96v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M208 80h-72V48a8 8 0 0 0-16 0v32H48a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h72v32a8 8 0 0 0 16 0v-32h72a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16Zm0 80H48V96h160v64Z" />
  </Svg>
);
const Memo = memo(SvgAlignCenterHorizontalSimpleDuotone);
export default Memo;
