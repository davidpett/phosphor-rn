import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowDownRightDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m208 176-48 48v-96Z" opacity={0.2} />
    <Path d="m213.66 170.34-48-48A8 8 0 0 0 152 128v40H72V32a8 8 0 0 0-16 0v144a8 8 0 0 0 8 8h88v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32ZM168 204.69v-57.38L196.69 176Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowDownRightDuotone);
export default Memo;
