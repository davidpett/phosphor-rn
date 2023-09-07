import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFunnelSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Z"
      opacity={0.2}
    />
    <Path d="M200 128a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h128a8 8 0 0 1 8 8Zm32-56H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16Zm-80 96h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgFunnelSimpleDuotone);
export default Memo;
