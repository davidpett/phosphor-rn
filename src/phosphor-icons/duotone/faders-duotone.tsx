import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFadersDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 40v176H56V40Z" opacity={0.2} />
    <Path d="M136 120v96a8 8 0 0 1-16 0v-96a8 8 0 0 1 16 0Zm64 72a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8Zm24-32h-16V40a8 8 0 0 0-16 0v120h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Zm-168 0a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8Zm24-32H64V40a8 8 0 0 0-16 0v88H32a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Zm72-48h-16V40a8 8 0 0 0-16 0v40h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgFadersDuotone);
export default Memo;
