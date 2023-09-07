import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNoteBlankFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h108.69a15.86 15.86 0 0 0 11.31-4.69L219.31 168a15.86 15.86 0 0 0 4.69-11.31V48a16 16 0 0 0-16-16Zm-48 172.69V160h44.69Z" />
  </Svg>
);
const Memo = memo(SvgNoteBlankFill);
export default Memo;
