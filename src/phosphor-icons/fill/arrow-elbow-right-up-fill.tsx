import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowRightUpFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M231.39 99.06A8 8 0 0 1 224 104h-40v88a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h136v-80h-40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 1.73 8.72Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowRightUpFill);
export default Memo;
