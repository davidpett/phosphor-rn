import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGoodreadsLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 28a4 4 0 0 0-4 4v26.13A60 60 0 0 0 68 88v24a60 60 0 0 0 112 29.87V168a52.06 52.06 0 0 1-52 52c-17.72 0-35.28-8.75-44.72-22.29a4 4 0 0 0-6.56 4.58C87.61 217.91 107.74 228 128 228a60.07 60.07 0 0 0 60-60V32a4 4 0 0 0-4-4Zm-56 136a52.06 52.06 0 0 1-52-52V88a52 52 0 0 1 104 0v24a52.06 52.06 0 0 1-52 52Z" />
  </Svg>
);
const Memo = memo(SvgGoodreadsLogoThin);
export default Memo;
