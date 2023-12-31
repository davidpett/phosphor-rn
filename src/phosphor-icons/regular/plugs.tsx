import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlugs = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M149.66 138.34a8 8 0 0 0-11.32 0L120 156.69 99.31 136l18.35-18.34a8 8 0 0 0-11.32-11.32L88 124.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l6.35 6.34-23.32 23.31a32 32 0 0 0 0 45.26l5.38 5.37-28.41 28.4a8 8 0 0 0 11.32 11.32l28.4-28.41 5.37 5.38a32 32 0 0 0 45.26 0L132 191.31l6.34 6.35a8 8 0 0 0 11.32-11.32L131.31 168l18.35-18.34a8 8 0 0 0 0-11.32Zm-52.29 65a16 16 0 0 1-22.62 0l-22.06-22.09a16 16 0 0 1 0-22.62L76 135.31 120.69 180Zm140.29-185a8 8 0 0 0-11.32 0l-28.4 28.41-5.37-5.38a32.05 32.05 0 0 0-45.26 0L124 64.69l-6.34-6.35a8 8 0 0 0-11.32 11.32l80 80a8 8 0 0 0 11.32-11.32l-6.35-6.34 23.32-23.31a32 32 0 0 0 0-45.26l-5.38-5.37 28.41-28.4a8 8 0 0 0 0-11.32Zm-34.35 79L180 120.69 135.31 76l23.32-23.31a16 16 0 0 1 22.62 0l22.06 22a16 16 0 0 1 0 22.68Z" />
  </Svg>
);
const Memo = memo(SvgPlugs);
export default Memo;
