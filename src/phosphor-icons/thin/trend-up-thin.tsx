import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrendUpThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 56v64a4 4 0 0 1-8 0V65.66l-89.17 89.17a4 4 0 0 1-5.66 0L96 117.66l-69.17 69.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0L136 146.34 222.34 60H168a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgTrendUpThin);
export default Memo;
