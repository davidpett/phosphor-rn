import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignRightSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M192 96v64a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h152a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M232 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0Zm-32 40v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16Zm-16 0H32v64h152Z" />
  </Svg>
);
const Memo = memo(SvgAlignRightSimpleDuotone);
export default Memo;
