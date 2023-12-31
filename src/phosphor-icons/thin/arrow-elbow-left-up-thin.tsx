import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowLeftUpThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 192a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V57.66L34.83 98.83a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1-5.66 5.66L84 57.66V188h140a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowLeftUpThin);
export default Memo;
