import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMusicNoteBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m211.45 52.51-80-24A12 12 0 0 0 116 40v100.22A52 52 0 1 0 140 184v-79.87l64.55 19.36A12 12 0 0 0 220 112V64a12 12 0 0 0-8.55-11.49ZM88 212a28 28 0 1 1 28-28 28 28 0 0 1-28 28ZM196 95.87l-56-16.8V56.13l56 16.8Z" />
  </Svg>
);
const Memo = memo(SvgMusicNoteBold);
export default Memo;
