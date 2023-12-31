import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPuzzlePieceThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M218.14 161.93a4 4 0 0 0-3.86-.24 24 24 0 0 1-34.23-23.25 24 24 0 0 1 34.23-20.13 4 4 0 0 0 5.72-3.61V72a12 12 0 0 0-12-12h-41a32 32 0 1 0-62.91-10.33A32.57 32.57 0 0 0 105 60H64a12 12 0 0 0-12 12v37a32 32 0 1 0-10.33 62.91A32.28 32.28 0 0 0 52 171v37a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-42.69a4 4 0 0 0-1.86-3.38ZM212 208a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4v-42.69a4 4 0 0 0-1.86-3.38 4 4 0 0 0-3.85-.24 24 24 0 0 1-34.24-20.13 24 24 0 0 1 34.24-23.25A4 4 0 0 0 60 114.7V72a4 4 0 0 1 4-4h46.69a4 4 0 0 0 3.62-5.71 24 24 0 0 1 20.13-34.24 24 24 0 0 1 23.25 34.24 4 4 0 0 0 3.62 5.71H208a4 4 0 0 1 4 4v37a32.57 32.57 0 0 0-10.33-.94A32 32 0 1 0 212 171Z" />
  </Svg>
);
const Memo = memo(SvgPuzzlePieceThin);
export default Memo;
