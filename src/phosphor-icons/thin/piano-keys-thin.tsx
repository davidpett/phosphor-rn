import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPianoKeysThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12ZM76 44h32v96H76Zm36 104a4 4 0 0 0 4-4V44h24v100a4 4 0 0 0 4 4h12v64h-56v-64Zm36-8V44h32v96ZM44 208V48a4 4 0 0 1 4-4h20v100a4 4 0 0 0 4 4h20v64H48a4 4 0 0 1-4-4Zm168 0a4 4 0 0 1-4 4h-44v-64h20a4 4 0 0 0 4-4V44h20a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgPianoKeysThin);
export default Memo;
