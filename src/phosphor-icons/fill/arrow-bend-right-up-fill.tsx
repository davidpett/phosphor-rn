import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendRightUpFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M207.39 83.06A8 8 0 0 1 200 88h-40v40A104.11 104.11 0 0 1 56 232a8 8 0 0 1 0-16 88.1 88.1 0 0 0 88-88V88h-40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 1.73 8.72Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendRightUpFill);
export default Memo;
