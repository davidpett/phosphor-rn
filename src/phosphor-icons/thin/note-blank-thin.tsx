import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNoteBlankThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h108.69a11.93 11.93 0 0 0 8.48-3.51l51.32-51.32a11.93 11.93 0 0 0 3.51-8.48V48a12 12 0 0 0-12-12ZM44 208V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4v108h-52a4 4 0 0 0-4 4v52H48a4 4 0 0 1-4-4Zm120-1.66V164h42.35Z" />
  </Svg>
);
const Memo = memo(SvgNoteBlankThin);
export default Memo;
