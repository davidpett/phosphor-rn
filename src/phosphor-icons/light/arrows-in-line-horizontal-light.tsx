import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsInLineHorizontalLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M134 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0ZM68.24 91.76a6 6 0 0 0-8.48 8.48L81.51 122H16a6 6 0 0 0 0 12h65.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48ZM240 122h-65.51l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48l32 32a6 6 0 0 0 8.48-8.48L174.49 134H240a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgArrowsInLineHorizontalLight);
export default Memo;
