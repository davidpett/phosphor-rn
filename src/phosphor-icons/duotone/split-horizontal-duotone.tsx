import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSplitHorizontalDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m232 128-32 32V96ZM56 160V96l-32 32Z" opacity={0.2} />
    <Path d="M104 40a8 8 0 0 0-8 8v72H64V96a8 8 0 0 0-13.66-5.66l-32 32a8 8 0 0 0 0 11.32l32 32A8 8 0 0 0 64 160v-24h32v72a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8ZM48 140.69 35.31 128 48 115.31Zm189.66-18.35-32-32A8 8 0 0 0 192 96v24h-32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-72h32v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32ZM208 140.69v-25.38L220.69 128Z" />
  </Svg>
);
const Memo = memo(SvgSplitHorizontalDuotone);
export default Memo;
