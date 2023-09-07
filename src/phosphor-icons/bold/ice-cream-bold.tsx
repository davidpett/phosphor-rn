import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIceCreamBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212 86.7a84 84 0 0 0-168 0A28 28 0 0 0 56 140h1l60.54 106a12 12 0 0 0 20.84 0L199 140h1a28 28 0 0 0 12-53.3Zm-84 129.11L84.68 140h26.07L141 193Zm26.86-47L138.39 140h32.93ZM200 116H56a4 4 0 0 1 0-8 12 12 0 0 0 12-12v-8a60 60 0 0 1 120 0v8a12 12 0 0 0 12 12 4 4 0 0 1 0 8Z" />
  </Svg>
);
const Memo = memo(SvgIceCreamBold);
export default Memo;
