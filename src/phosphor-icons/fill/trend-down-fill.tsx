import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrendDownFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 136v64a8 8 0 0 1-8 8h-64a8 8 0 0 1-5.66-13.66L188.69 168 136 115.31l-34.34 34.35a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L96 132.69l34.34-34.35a8 8 0 0 1 11.32 0L200 156.69l26.34-26.35A8 8 0 0 1 240 136Z" />
  </Svg>
);
const Memo = memo(SvgTrendDownFill);
export default Memo;
