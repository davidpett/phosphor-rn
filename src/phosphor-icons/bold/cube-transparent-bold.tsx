import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCubeTransparentBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m224.5 95.53-64-64A12 12 0 0 0 152 28H40a12 12 0 0 0-12 12v112a11.94 11.94 0 0 0 3 7.93c.15.18.31.36.5.56l64 64A12 12 0 0 0 104 228h112a12 12 0 0 0 12-12V104a12 12 0 0 0-3.5-8.47ZM164 69l23 23h-23ZM92 187l-23-23h23Zm0-47H52V69l40 40ZM69 52h71v40h-31Zm71 64v24h-24v-24Zm-24 88v-40h31l40 40Zm88-17-40-40v-31h40Z" />
  </Svg>
);
const Memo = memo(SvgCubeTransparentBold);
export default Memo;
