import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBracketsSquareBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M52 52v152h28a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h40a12 12 0 0 1 0 24Zm164-24h-40a12 12 0 0 0 0 24h28v152h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgBracketsSquareBold);
export default Memo;
