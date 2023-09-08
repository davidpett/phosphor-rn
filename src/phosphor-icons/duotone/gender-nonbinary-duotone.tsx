import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderNonbinaryDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 168a64 64 0 1 1-64-64 64 64 0 0 1 64 64Z" opacity={0.2} />
    <Path d="M136 96.46V62.13l27.88 16.73a8 8 0 1 0 8.24-13.72L143.55 48l28.57-17.14a8 8 0 0 0-8.24-13.72L128 38.67 92.12 17.14a8 8 0 0 0-8.24 13.72L112.45 48 83.88 65.14a8 8 0 0 0 8.24 13.72L120 62.13v34.33a72 72 0 1 0 16 0ZM128 224a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56Z" />
  </Svg>
);
const Memo = memo(SvgGenderNonbinaryDuotone);
export default Memo;
