import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberFiveThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172 160a52 52 0 0 1-86.67 38.76 4 4 0 1 1 5.34-6 44 44 0 1 0 .84-66.33 4 4 0 0 1-6.51-3.79l15.09-75.42A4 4 0 0 1 104 44h64a4 4 0 0 1 0 8h-60.72l-12.51 62.53A52 52 0 0 1 172 160Z" />
  </Svg>
);
const Memo = memo(SvgNumberFiveThin);
export default Memo;
