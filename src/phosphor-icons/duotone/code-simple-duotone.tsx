import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodeSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m240 128-72 64H88l-72-64 72-64h80Z" opacity={0.2} />
    <Path d="M93.31 70 28 128l65.27 58a8 8 0 1 1-10.62 12l-72-64a8 8 0 0 1 0-12l72-64a8 8 0 1 1 10.66 12Zm152 52-72-64a8 8 0 0 0-10.62 12L228 128l-65.27 58a8 8 0 1 0 10.62 12l72-64a8 8 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgCodeSimpleDuotone);
export default Memo;
