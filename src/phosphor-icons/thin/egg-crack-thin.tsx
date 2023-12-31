import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEggCrackThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20c-35.13 0-84 66.52-84 132a84 84 0 0 0 168 0c0-65.48-48.87-132-84-132Zm0 208a76.08 76.08 0 0 1-76-76c0-28.46 10-59.73 27.33-85.78C94.81 43 113.91 28 128 28c11.39 0 26.05 9.8 39.42 25.82L125 101.34a4 4 0 0 0 2 6.54l28.3 7.08-7.25 36.26a4 4 0 0 0 3.14 4.7 3.44 3.44 0 0 0 .78.08 4 4 0 0 0 3.92-3.22l8-40a4 4 0 0 0-2.95-4.66l-25.58-6.4 37.08-41.52q2.16 2.91 4.23 6C194 92.27 204 123.54 204 152a76.08 76.08 0 0 1-76 76Z" />
  </Svg>
);
const Memo = memo(SvgEggCrackThin);
export default Memo;
