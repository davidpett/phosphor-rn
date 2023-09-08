import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBootFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 112h-79.73a8.17 8.17 0 0 1-8.25-7.47A8 8 0 0 1 112 96h44a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4h-43.73a8.17 8.17 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53h44a4 4 0 0 0 4-4v-4a16 16 0 0 0-16-16H32.22a8.23 8.23 0 0 0-5.08 1.64 8 8 0 0 0-2.61 9.22c11.06 28.84 8.76 83.71-.22 114.93A8 8 0 0 0 24 168v32a16 16 0 0 0 16 16h26.11a16 16 0 0 0 7.16-1.69L85.89 208h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69h28.22a16 16 0 0 0 7.16-1.69l12.62-6.31h16.22l12.62 6.31a16 16 0 0 0 7.16 1.69H232a16 16 0 0 0 16-16v-32a56 56 0 0 0-56-56Zm40 88h-26.11l-12.62-6.31a16 16 0 0 0-7.16-1.69h-16.22a16 16 0 0 0-7.16 1.69L150.11 200h-28.22l-12.62-6.31a16 16 0 0 0-7.16-1.69H85.89a16 16 0 0 0-7.16 1.69L66.11 200H40v-24h192Z" />
  </Svg>
);
const Memo = memo(SvgBootFill);
export default Memo;
