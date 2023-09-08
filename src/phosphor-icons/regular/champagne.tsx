import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChampagne = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 20a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm-19.88 53.23c7.26 44.25 4.35 75.76-8.66 93.66A39.94 39.94 0 0 1 128 183.42V232h16a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h16v-48.58a40 40 0 0 1-27.46-16.53c-13-17.9-15.91-49.41-8.65-93.66a451 451 0 0 1 14.21-59.7A8 8 0 0 1 97.71 8h44.59a8 8 0 0 1 7.61 5.53 451 451 0 0 1 14.21 59.7ZM93.8 64h52.4c-3-15.58-6.72-29.81-9.78-40h-32.83c-3.06 10.19-6.76 24.42-9.79 40ZM149 80H91c-4.49 30-5.14 61.54 6.45 77.49C102.63 164.56 110 168 120 168s17.38-3.44 22.52-10.51C154.1 141.54 153.46 110 149 80Zm71-40a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm-24 48a12 12 0 1 0 12 12 12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgChampagne);
export default Memo;
