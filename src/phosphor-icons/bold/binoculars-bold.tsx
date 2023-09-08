import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBinocularsBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M241 150.65v-.05a51.33 51.33 0 0 0-2.53-5.9l-41.54-94.52a12 12 0 0 0-2.5-3.65 36 36 0 0 0-50.92 0A12 12 0 0 0 140 55v21h-24V55a12 12 0 0 0-3.51-8.48 36 36 0 0 0-50.92 0 12 12 0 0 0-2.5 3.65L17.53 144.7a51.33 51.33 0 0 0-2.53 5.9s0 0 0 .05A52 52 0 1 0 116 168v-68h24v68a52 52 0 1 0 101-17.35ZM80 62.28a12 12 0 0 1 12-1.22v63.15a51.9 51.9 0 0 0-35.9-7.62ZM64 196a28 28 0 1 1 28-28 28 28 0 0 1-28 28ZM164 61.06a12.06 12.06 0 0 1 12 1.22l23.87 54.31a51.9 51.9 0 0 0-35.9 7.62ZM192 196a28 28 0 1 1 28-28 28 28 0 0 1-28 28Z" />
  </Svg>
);
const Memo = memo(SvgBinocularsBold);
export default Memo;
