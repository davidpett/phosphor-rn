import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTranslateFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 129.89 175.06 160h-30.12l6.36-12.7ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-16.84 140.42-40-80a8 8 0 0 0-14.32 0l-13.18 26.38a62.31 62.31 0 0 1-23.61-10A79.61 79.61 0 0 0 135.6 80H152a8 8 0 0 0 0-16h-40v-8a8 8 0 0 0-16 0v8H56a8 8 0 0 0 0 16h63.48a63.73 63.73 0 0 1-15.3 34.05 65.93 65.93 0 0 1-9-13.61 8 8 0 0 0-14.32 7.12 81.75 81.75 0 0 0 11.4 17.15A63.62 63.62 0 0 1 56 136a8 8 0 0 0 0 16 79.56 79.56 0 0 0 48.11-16.13 78.33 78.33 0 0 0 28.18 13.66l-19.45 38.89a8 8 0 0 0 14.32 7.16l9.78-19.58h46.12l9.78 19.58a8 8 0 1 0 14.32-7.16Z" />
  </Svg>
);
const Memo = memo(SvgTranslateFill);
export default Memo;
