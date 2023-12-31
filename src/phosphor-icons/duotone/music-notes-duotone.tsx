import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMusicNotesDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 172a28 28 0 1 1-28-28 28 28 0 0 1 28 28Zm-156 4a28 28 0 1 0 28 28 28 28 0 0 0-28-28Z"
      opacity={0.2}
    />
    <Path d="M212.92 25.69a8 8 0 0 0-6.86-1.45l-128 32A8 8 0 0 0 72 64v110.08A36 36 0 1 0 88 204v-85.75l112-28v51.83A36 36 0 1 0 216 172V32a8 8 0 0 0-3.08-6.31ZM52 224a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm36-122.25v-31.5l112-28v31.5ZM180 192a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" />
  </Svg>
);
const Memo = memo(SvgMusicNotesDuotone);
export default Memo;
