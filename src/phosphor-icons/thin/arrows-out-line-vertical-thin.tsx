import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsOutLineVerticalThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4ZM98.83 50.83 124 25.66V96a4 4 0 0 0 8 0V25.66l25.17 25.17a4 4 0 1 0 5.66-5.66l-32-32a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66Zm58.34 154.34L132 230.34V160a4 4 0 0 0-8 0v70.34l-25.17-25.17a4 4 0 0 0-5.66 5.66l32 32a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66Z" />
  </Svg>
);
const Memo = memo(SvgArrowsOutLineVerticalThin);
export default Memo;
