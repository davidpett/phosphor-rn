import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFeather = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M221.28 34.75a64 64 0 0 0-90.49 0L60.69 104A15.9 15.9 0 0 0 56 115.31v73.38l-29.66 29.65a8 8 0 0 0 11.32 11.32L67.32 200h73.38a15.92 15.92 0 0 0 11.3-4.68l69.23-70a64 64 0 0 0 .05-90.57Zm-79.21 11.31A48 48 0 0 1 211.79 112h-56.46l34.35-34.34a8 8 0 0 0-11.32-11.32L120 124.69V67.87ZM72 115.35l32-31.67v57l-32 32ZM140.7 184H83.32l56-56h56.74Z" />
  </Svg>
);
const Memo = memo(SvgFeather);
export default Memo;
