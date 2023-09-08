import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPackageFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m223.68 66.15-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03ZM128 32l80.35 44-29.78 16.29-80.35-44Zm0 88L47.65 76l33.91-18.57 80.35 44Zm88 55.85-80 43.79v-85.81l32-17.51V152a8 8 0 0 0 16 0v-44.44l32-17.51v85.76Z" />
  </Svg>
);
const Memo = memo(SvgPackageFill);
export default Memo;
