import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyEur = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M190 192.33a8 8 0 0 1-.63 11.3A80 80 0 0 1 56.4 152H40a8 8 0 0 1 0-16h16v-16H40a8 8 0 0 1 0-16h16.4a80 80 0 0 1 132.94-51.63 8 8 0 0 1-10.68 11.93A64 64 0 0 0 72.52 104H136a8 8 0 0 1 0 16H72v16h48a8 8 0 0 1 0 16H72.52a64 64 0 0 0 106.14 39.71 8 8 0 0 1 11.34.62Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyEur);
export default Memo;
