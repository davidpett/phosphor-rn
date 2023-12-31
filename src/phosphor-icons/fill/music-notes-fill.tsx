import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMusicNotesFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212.92 25.71a7.89 7.89 0 0 0-6.86-1.46l-128 32A8 8 0 0 0 72 64v110.1A36 36 0 1 0 88 204v-93.75l112-28v59.85a36 36 0 1 0 16 29.9V32a8 8 0 0 0-3.08-6.29Z" />
  </Svg>
);
const Memo = memo(SvgMusicNotesFill);
export default Memo;
