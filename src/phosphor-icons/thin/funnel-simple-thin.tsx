import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFunnelSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196 128a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h128a4 4 0 0 1 4 4Zm36-52H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8Zm-80 96h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgFunnelSimpleThin);
export default Memo;
