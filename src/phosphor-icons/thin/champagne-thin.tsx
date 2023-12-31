import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChampagneThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M142.3 12H97.7a4 4 0 0 0-3.8 2.76c-1.45 4.47-35.2 109.75-6.13 149.78 6.73 9.25 16.23 14.38 28.23 15.29V236H96a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8h-20v-56.17c12-.91 21.5-6 28.22-15.29 29.08-40-4.67-145.31-6.12-149.78a4 4 0 0 0-3.8-2.76Zm-41.65 8h38.7A455.34 455.34 0 0 1 151 68H89a462 462 0 0 1 11.65-48Zm45.1 139.83C139.8 168 131.38 172 120 172s-19.8-4-25.75-12.16C81 141.63 82.6 106.72 87.6 76h64.81c6.45 40 4.16 68.94-6.66 83.83ZM228 52a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-24-32a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm0 80a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgChampagneThin);
export default Memo;
