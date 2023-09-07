import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrendUpFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 56v64a8 8 0 0 1-13.66 5.66L200 99.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-66.34 66.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0L136 140.69 188.69 88l-26.35-26.34A8 8 0 0 1 168 48h64a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgTrendUpFill);
export default Memo;
