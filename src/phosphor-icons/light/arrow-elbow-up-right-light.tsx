import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowUpRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m212.24 84.24-48 48a6 6 0 0 1-8.48-8.48L193.51 86H70v138a6 6 0 0 1-12 0V80a6 6 0 0 1 6-6h129.51l-37.75-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowUpRightLight);
export default Memo;
