import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRobotThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 52h-68V16a4 4 0 0 0-8 0v36H56a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h144a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28Zm20 140a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h144a20 20 0 0 1 20 20Zm-56-52H92a24 24 0 0 0 0 48h72a24 24 0 0 0 0-48Zm-24 8v32h-24v-32Zm-64 16a16 16 0 0 1 16-16h16v32H92a16 16 0 0 1-16-16Zm88 16h-16v-32h16a16 16 0 0 1 0 32Zm-88-72a8 8 0 1 1 8 8 8 8 0 0 1-8-8Zm88 0a8 8 0 1 1 8 8 8 8 0 0 1-8-8Z" />
  </Svg>
);
const Memo = memo(SvgRobotThin);
export default Memo;
