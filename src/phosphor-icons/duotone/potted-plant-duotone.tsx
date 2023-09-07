import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPottedPlantDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m184 152-14.61 65.74a8 8 0 0 1-7.81 6.26H94.42a8 8 0 0 1-7.81-6.26L72 152Z"
      opacity={0.2}
    />
    <Path d="M200 144h-76.7l2.35-2.35 20.06-20.06a59.55 59.55 0 0 0 26.1 6.36 49.56 49.56 0 0 0 25.89-7.22c23.72-14.36 36.43-47.6 34-88.92a8 8 0 0 0-7.52-7.52c-41.32-2.42-74.56 10.28-88.93 34-9.35 15.45-9.59 34.11-.86 52L120 124.68l-12.21-12.21c6-13.25 5.57-27-1.39-38.48C95.53 56 70.6 46.4 39.73 48.22a8 8 0 0 0-7.51 7.51C30.4 86.6 40 111.52 58 122.4a38.22 38.22 0 0 0 20 5.6 45 45 0 0 0 18.52-4.19L108.69 136l-8 8H56a8 8 0 0 0 0 16h9.59l13.21 59.47A15.89 15.89 0 0 0 94.42 232h67.17a15.91 15.91 0 0 0 15.62-12.53L190.42 160H200a8 8 0 0 0 0-16Zm-51-77.42c10.46-17.26 35.23-27 67-26.57.41 31.81-9.31 56.58-26.57 67-11.51 7-25.4 6.54-39.28-1.18C142.42 92 142 78.09 149 66.58Zm-56.89 41.53c-9.2 4.92-18.31 5.15-25.83.6C54.78 101.74 48.15 85.31 48 64c21.31.15 37.75 6.78 44.71 18.28 4.56 7.52 4.29 16.63-.6 25.83ZM161.59 216H94.42L82 160h92Z" />
  </Svg>
);
const Memo = memo(SvgPottedPlantDuotone);
export default Memo;
