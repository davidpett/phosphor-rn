import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMusicNoteLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m209.72 58.25-80-24A6 6 0 0 0 122 40v113.05A46 46 0 1 0 134 184V96.06l72.28 21.69A6 6 0 0 0 214 112V64a6 6 0 0 0-4.28-5.75ZM88 218a34 34 0 1 1 34-34 34 34 0 0 1-34 34Zm114-114.06-68-20.4V48.06l68 20.4Z" />
  </Svg>
);
const Memo = memo(SvgMusicNoteLight);
export default Memo;
