import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsOutSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 48v48a12 12 0 0 1-24 0V77l-39.51 39.52a12 12 0 0 1-17-17L179 60h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12ZM99.51 139.51 60 179v-19a12 12 0 0 0-24 0v48a12 12 0 0 0 12 12h48a12 12 0 0 0 0-24H77l39.52-39.51a12 12 0 0 0-17-17Z" />
  </Svg>
);
const Memo = memo(SvgArrowsOutSimpleBold);
export default Memo;
