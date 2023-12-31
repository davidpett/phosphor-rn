import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMusicNoteSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m209.15 60.17-80-24A4 4 0 0 0 124 40v118.75a44 44 0 1 0 8 25.25V45.38l74.85 22.45a4 4 0 0 0 2.3-7.66ZM88 220a36 36 0 1 1 36-36 36 36 0 0 1-36 36Z" />
  </Svg>
);
const Memo = memo(SvgMusicNoteSimpleThin);
export default Memo;
