import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStarFourFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 128a15.79 15.79 0 0 1-10.5 15l-63.44 23.07L143 229.5a16 16 0 0 1-30 0L89.93 166 26.5 143a16 16 0 0 1 0-30L90 89.93l23-63.43a16 16 0 0 1 30 0L166.07 90l63.43 23a15.79 15.79 0 0 1 10.5 15Z" />
  </Svg>
);
const Memo = memo(SvgStarFourFill);
export default Memo;
