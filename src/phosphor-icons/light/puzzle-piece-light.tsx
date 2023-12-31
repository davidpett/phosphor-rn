import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPuzzlePieceLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M219.21 160.24a6 6 0 0 0-5.78-.35 22 22 0 1 1-11.05-41.83 22.15 22.15 0 0 1 11.05 2.06 6 6 0 0 0 8.57-5.42V72a14 14 0 0 0-14-14h-38.52a35 35 0 0 0 .52-6 34.1 34.1 0 0 0-10.73-24.78 33.64 33.64 0 0 0-25.45-9.15A34 34 0 0 0 102.54 58H64a14 14 0 0 0-14 14v34.53a34 34 0 0 0-30.79 10.2 34 34 0 0 0 22.31 57.18 34.34 34.34 0 0 0 8.48-.44V208a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-42.69a6 6 0 0 0-2.79-5.07ZM210 208a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2v-42.69a6 6 0 0 0-6-6 5.92 5.92 0 0 0-2.57.58 22 22 0 0 1-31.38-18.46 22 22 0 0 1 31.38-21.31A6 6 0 0 0 62 114.7V72a2 2 0 0 1 2-2h46.69a6 6 0 0 0 5.42-8.57 22.25 22.25 0 0 1-2-11 22 22 0 1 1 41.83 11A6 6 0 0 0 161.3 70H208a2 2 0 0 1 2 2v34.54a34 34 0 0 0-39.93 31.28 33.71 33.71 0 0 0 9.14 25.45A34.15 34.15 0 0 0 210 173.48Z" />
  </Svg>
);
const Memo = memo(SvgPuzzlePieceLight);
export default Memo;
