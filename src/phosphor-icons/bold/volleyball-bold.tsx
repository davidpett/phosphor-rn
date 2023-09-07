import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVolleyballBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20ZM96.83 50a83.49 83.49 0 0 1 17.92-5 84 84 0 0 1 46.51 71h-26.33Zm38.1 90h76.2a83.37 83.37 0 0 1-4.69 18 84.07 84.07 0 0 1-84.68 4.79Zm76.2-24h-25.84a107.43 107.43 0 0 0-14.4-49.71 108.71 108.71 0 0 0-11.39-16.14A84.21 84.21 0 0 1 211.13 116ZM76.07 62.05 89 84.39a107.44 107.44 0 0 0-35.85 37.32 108.9 108.9 0 0 0-8.28 18 83.65 83.65 0 0 1 31.2-77.66ZM62.79 180.87A84 84 0 0 1 101 105.2l13.14 22.8-38.07 66a84.68 84.68 0 0 1-13.28-13.13Zm34 25.11 12.92-22.37A107.41 107.41 0 0 0 160 196a109 109 0 0 0 19.59-1.78A83.72 83.72 0 0 1 96.83 206Z" />
  </Svg>
);
const Memo = memo(SvgVolleyballBold);
export default Memo;
