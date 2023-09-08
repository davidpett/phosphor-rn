import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileAudioFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 180a40.55 40.55 0 0 1-20 34.91 8 8 0 0 1-8-13.82 24.49 24.49 0 0 0 0-42.18 8 8 0 0 1 8-13.82A40.55 40.55 0 0 1 152 180Zm-52.94-51.39a8 8 0 0 0-8.72 1.73L68.69 152H48a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h20.69l21.65 21.66A8 8 0 0 0 104 224v-88a8 8 0 0 0-4.94-7.39ZM216 88v128a16 16 0 0 1-16 16h-32a8 8 0 0 1 0-16h32V96h-48a8 8 0 0 1-8-8V40H56v80a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88Zm-56-8h28.69L160 51.31Z" />
  </Svg>
);
const Memo = memo(SvgFileAudioFill);
export default Memo;
