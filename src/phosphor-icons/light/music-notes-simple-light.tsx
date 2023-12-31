import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMusicNotesSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M211.69 27.27a6 6 0 0 0-5.15-1.09l-128 32A6 6 0 0 0 74 64v114.11A34 34 0 1 0 86 204V68.68l116-29v106.43A34 34 0 1 0 214 172V32a6 6 0 0 0-2.31-4.73ZM52 226a22 22 0 1 1 22-22 22 22 0 0 1-22 22Zm128-32a22 22 0 1 1 22-22 22 22 0 0 1-22 22Z" />
  </Svg>
);
const Memo = memo(SvgMusicNotesSimpleLight);
export default Memo;
