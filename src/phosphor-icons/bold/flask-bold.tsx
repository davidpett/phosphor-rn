import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlaskBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M225.15 197.71 164 95.81V44h4a12 12 0 0 0 0-24H88a12 12 0 0 0 0 24h4v51.81l-61.15 101.9A20 20 0 0 0 48 228h160a20 20 0 0 0 17.15-30.29ZM140 44v55.14a12 12 0 0 0 1.71 6.17l35.13 58.54c-10.79.86-25.15-1.31-43.42-10.56-14-7.08-27.46-11.33-40.27-12.76l21.14-35.22a12 12 0 0 0 1.71-6.17V44ZM55.06 204 79 164.19c13-1.11 27.62 2.42 43.62 10.52 19.61 9.92 36.25 13.31 49.85 13.31a75.44 75.44 0 0 0 17.64-2.02l10.83 18Z" />
  </Svg>
);
const Memo = memo(SvgFlaskBold);
export default Memo;
