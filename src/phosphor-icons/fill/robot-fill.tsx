import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRobotFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 48h-64V16a8 8 0 0 0-16 0v32H56a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32Zm-28 48a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm-76 88H80a16 16 0 0 1 0-32h16Zm-12-64a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm60 64h-32v-32h32Zm32 0h-16v-32h16a16 16 0 0 1 0 32Z" />
  </Svg>
);
const Memo = memo(SvgRobotFill);
export default Memo;
