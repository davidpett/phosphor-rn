import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowDownLeftBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200.49 72.48 93 180h75a12 12 0 0 1 0 24H64a12 12 0 0 1-12-12V88a12 12 0 0 1 24 0v75L183.51 55.51a12 12 0 0 1 17 17Z" />
  </Svg>
);
const Memo = memo(SvgArrowDownLeftBold);
export default Memo;
