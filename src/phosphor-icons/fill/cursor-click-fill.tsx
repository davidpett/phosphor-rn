import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCursorClickFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m120.85 28.42 8-16a8 8 0 0 1 14.31 7.16l-8 16a8 8 0 1 1-14.31-7.16ZM16 104h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16Zm80-72a8 8 0 0 0 8-8v-8a8 8 0 0 0-16 0v8a8 8 0 0 0 8 8Zm-67.58 88.85-16 8a8 8 0 0 0 7.16 14.31l16-8a8 8 0 1 0-7.16-14.31Zm135.65 15.9 50.34-21.88a16 16 0 0 0-1.41-29.8L52.92 32.8A15.95 15.95 0 0 0 32.8 52.92L85.07 213a15.82 15.82 0 0 0 14.41 11h.78a15.84 15.84 0 0 0 14.61-9.59l21.88-50.34L192 219.31a16 16 0 0 0 22.63 0l4.68-4.68a16 16 0 0 0 0-22.63Z" />
  </Svg>
);
const Memo = memo(SvgCursorClickFill);
export default Memo;
