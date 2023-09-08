import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBeerBottleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m245.66 42.34-32-32a8 8 0 0 0-11.32 11.32l1.48 1.47-55.17 41.38-38.22 7.65a8.05 8.05 0 0 0-4.09 2.18L23 157.66a24 24 0 0 0 0 33.94L64.4 233a24 24 0 0 0 33.94 0l83.32-83.31a8 8 0 0 0 2.18-4.09l7.65-38.22 41.38-55.17 1.47 1.48a8 8 0 0 0 11.32-11.32ZM81.37 224a7.94 7.94 0 0 1-5.65-2.34l-41.38-41.38a8 8 0 0 1 0-11.31l5.66-5.66L92.69 216 87 221.66a8 8 0 0 1-5.63 2.34ZM177.6 99.2a7.92 7.92 0 0 0-1.44 3.23l-7.53 37.63-8.63 8.63L107.31 96l8.63-8.63 37.63-7.53a7.92 7.92 0 0 0 3.23-1.44l58.45-43.84 6.19 6.19Z" />
  </Svg>
);
const Memo = memo(SvgBeerBottleFill);
export default Memo;
