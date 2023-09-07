import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMusicNoteSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m209.72 58.25-80-24A6 6 0 0 0 122 40v113.05A46 46 0 1 0 134 184V48.06l72.27 21.69a6 6 0 1 0 3.45-11.5ZM88 218a34 34 0 1 1 34-34 34 34 0 0 1-34 34Z" />
  </Svg>
);
const Memo = memo(SvgMusicNoteSimpleLight);
export default Memo;
