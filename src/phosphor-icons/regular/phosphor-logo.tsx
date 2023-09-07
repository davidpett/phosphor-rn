import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhosphorLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 24H64a8 8 0 0 0-8 8v128a80.09 80.09 0 0 0 80 80 8 8 0 0 0 8-8v-64a72 72 0 0 0 0-144ZM72 62.54 122.32 152H72Zm56 66.92L77.68 40H128ZM72.51 168H128v55.5A64.14 64.14 0 0 1 72.51 168ZM144 152V40a56 56 0 0 1 0 112Z" />
  </Svg>
);
const Memo = memo(SvgPhosphorLogo);
export default Memo;
