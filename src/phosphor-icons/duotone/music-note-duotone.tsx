import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMusicNoteDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 184a40 40 0 1 1-40-40 40 40 0 0 1 40 40Z" opacity={0.2} />
    <Path d="m210.3 56.34-80-24A8 8 0 0 0 120 40v108.26A48 48 0 1 0 136 184V98.75l69.7 20.91A8 8 0 0 0 216 112V64a8 8 0 0 0-5.7-7.66ZM88 216a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm112-114.75-64-19.2v-31.3L200 70Z" />
  </Svg>
);
const Memo = memo(SvgMusicNoteDuotone);
export default Memo;
