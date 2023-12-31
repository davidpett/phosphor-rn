import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSortDescendingBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M36 128a12 12 0 0 1 12-12h68a12 12 0 0 1 0 24H48a12 12 0 0 1-12-12Zm12-52h52a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24Zm132 104H48a12 12 0 0 0 0 24h132a12 12 0 0 0 0-24Zm52.49-100.49-40-40a12 12 0 0 0-17 0l-40 40a12 12 0 0 0 17 17L172 77v67a12 12 0 0 0 24 0V77l19.51 19.52a12 12 0 0 0 17-17Z" />
  </Svg>
);
const Memo = memo(SvgSortDescendingBold);
export default Memo;
