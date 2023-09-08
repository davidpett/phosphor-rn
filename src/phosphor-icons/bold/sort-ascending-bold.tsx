import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSortAscendingBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 128a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h68a12 12 0 0 1 12 12ZM48 76h132a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24Zm52 104H48a12 12 0 0 0 0 24h52a12 12 0 0 0 0-24Zm132.49-20.49a12 12 0 0 0-17 0L196 179v-67a12 12 0 0 0-24 0v67l-19.51-19.52a12 12 0 0 0-17 17l40 40a12 12 0 0 0 17 0l40-40a12 12 0 0 0 0-16.97Z" />
  </Svg>
);
const Memo = memo(SvgSortAscendingBold);
export default Memo;
