import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrendDownThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 136v64a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h54.34L136 109.66l-37.17 37.17a4 4 0 0 1-5.66 0l-72-72a4 4 0 0 1 5.66-5.66L96 138.34l37.17-37.17a4 4 0 0 1 5.66 0L228 190.34V136a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgTrendDownThin);
export default Memo;
