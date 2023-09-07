import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPeaceFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m136 143.37 46 32.2a71.86 71.86 0 0 1-46 24ZM56 128a71.61 71.61 0 0 0 8.81 34.48L120 123.84V56.46A72.08 72.08 0 0 0 56 128Zm64 71.54v-56.17l-46 32.2a71.86 71.86 0 0 0 46 23.97Zm16-143.08v67.38l55.19 38.64A72 72 0 0 0 136 56.46ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88 88.1 88.1 0 0 0 88-88Z" />
  </Svg>
);
const Memo = memo(SvgPeaceFill);
export default Memo;
