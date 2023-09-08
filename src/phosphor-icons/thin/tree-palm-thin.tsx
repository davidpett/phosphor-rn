import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTreePalmThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234.9 56a62.86 62.86 0 0 0-92 0A68.16 68.16 0 0 0 128 80.44a68.16 68.16 0 0 0-15-24.45 62.86 62.86 0 0 0-91.9.01 4 4 0 0 0 1.3 6.42L90.86 92.2a68.66 68.66 0 0 0-12.45 2.11 67.49 67.49 0 0 0-41.28 31.46 66.72 66.72 0 0 0-6.8 51.23 4 4 0 0 0 2.57 2.75 4.1 4.1 0 0 0 1.29.21 4 4 0 0 0 2.43-.82L124 112.6V224a4 4 0 0 0 8 0V112.6l87.38 66.58a4 4 0 0 0 2.43.82 4.1 4.1 0 0 0 1.29-.21 4 4 0 0 0 2.57-2.75 66.72 66.72 0 0 0-6.8-51.27 67.49 67.49 0 0 0-41.28-31.46 68.66 68.66 0 0 0-12.45-2.11l68.46-29.79a4 4 0 0 0 1.3-6.41ZM67.08 44a55.13 55.13 0 0 1 40.18 17.5 60.86 60.86 0 0 1 16.44 36.27L31.12 57.48A54.75 54.75 0 0 1 67.08 44ZM36.77 169A58.72 58.72 0 0 1 44 129.79 59.57 59.57 0 0 1 80.47 102a61 61 0 0 1 15.63-2 59.71 59.71 0 0 1 24.41 5.22ZM212 129.79a58.72 58.72 0 0 1 7.23 39.21l-83.74-63.8A60.24 60.24 0 0 1 212 129.79Zm-79.66-32a60.86 60.86 0 0 1 16.4-36.29 54.8 54.8 0 0 1 76.14-4Z" />
  </Svg>
);
const Memo = memo(SvgTreePalmThin);
export default Memo;
