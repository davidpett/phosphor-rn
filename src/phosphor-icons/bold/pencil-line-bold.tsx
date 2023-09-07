import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilLineBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m230.15 70.54-44.69-44.68a20 20 0 0 0-28.28 0L33.86 149.17A19.86 19.86 0 0 0 28 163.31V208a20 20 0 0 0 20 20h168a12 12 0 0 0 0-24h-91L230.15 98.83a20 20 0 0 0 0-28.29ZM136 81l11 11-71 71-11-11ZM52 204v-31l15.52 15.51L83 204Zm52-13-11-11 71-71 11 11Zm88-88-39-39 18.34-18.34 39 39Z" />
  </Svg>
);
const Memo = memo(SvgPencilLineBold);
export default Memo;
