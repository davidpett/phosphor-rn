import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStopCircleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm32 128a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgStopCircleFill);
export default Memo;
