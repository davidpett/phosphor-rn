import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowRightDownDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m224 160-48 48-48-48Z" opacity={0.2} />
    <Path d="M231.39 156.94A8 8 0 0 0 224 152h-40V64a8 8 0 0 0-8-8H32a8 8 0 0 0 0 16h136v80h-40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0 1.73-8.72ZM176 196.69 147.31 168h57.38Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowRightDownDuotone);
export default Memo;
