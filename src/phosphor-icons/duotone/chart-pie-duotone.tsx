import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartPieDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 32v96l-83.14 48A96 96 0 0 1 128 32Z" opacity={0.2} />
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm71.87 53.27L136 114.14V40.37a88 88 0 0 1 63.87 36.9ZM120 40.37v83l-71.89 41.5A88 88 0 0 1 120 40.37ZM128 216a88 88 0 0 1-71.87-37.27l151.76-87.61A88 88 0 0 1 128 216Z" />
  </Svg>
);
const Memo = memo(SvgChartPieDuotone);
export default Memo;
