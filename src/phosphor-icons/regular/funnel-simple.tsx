import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFunnelSimple = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 128a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h128a8 8 0 0 1 8 8Zm32-56H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16Zm-80 96h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgFunnelSimple);
export default Memo;
