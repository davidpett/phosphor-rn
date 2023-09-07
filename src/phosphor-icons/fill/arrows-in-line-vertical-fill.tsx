import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsInLineVerticalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M90.34 69.66A8 8 0 0 1 96 56h24V16a8 8 0 0 1 16 0v40h24a8 8 0 0 1 5.66 13.66l-32 32a8 8 0 0 1-11.32 0Zm43.32 84.68a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 200h24v40a8 8 0 0 0 16 0v-40h24a8 8 0 0 0 5.66-13.66ZM216 120H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgArrowsInLineVerticalFill);
export default Memo;
