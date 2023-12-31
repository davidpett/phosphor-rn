import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartPolar = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm87.63 96h-24.15A64.1 64.1 0 0 0 136 64.52V40.37A88.13 88.13 0 0 1 215.63 120ZM120 120H80.68A48.09 48.09 0 0 1 120 80.68Zm0 16v39.32A48.09 48.09 0 0 1 80.68 136Zm16 0h39.32A48.09 48.09 0 0 1 136 175.32Zm0-16V80.68A48.09 48.09 0 0 1 175.32 120Zm-16-79.63v24.15A64.1 64.1 0 0 0 64.52 120H40.37A88.13 88.13 0 0 1 120 40.37ZM40.37 136h24.15A64.1 64.1 0 0 0 120 191.48v24.15A88.13 88.13 0 0 1 40.37 136ZM136 215.63v-24.15A64.1 64.1 0 0 0 191.48 136h24.15A88.13 88.13 0 0 1 136 215.63Z" />
  </Svg>
);
const Memo = memo(SvgChartPolar);
export default Memo;
