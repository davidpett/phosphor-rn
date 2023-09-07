import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlantThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M243.63 40.12a4 4 0 0 0-3.76-3.75c-50.25-3-90.44 12.1-107.52 40.29-11.64 19.22-11.17 41.92 1.24 64.21a67.33 67.33 0 0 0-16.65 34.41l-23.49-23.49c8.63-16 8.81-32.33.42-46.19C81.45 85.09 52.35 74.13 16 76.26A4 4 0 0 0 12.26 80c-2.13 36.33 8.83 65.43 29.34 77.85a41.82 41.82 0 0 0 21.88 6.18 51.29 51.29 0 0 0 24.31-6.6L116 185.67V216a4 4 0 0 0 8 0v-29.49a59.57 59.57 0 0 1 15.29-40c11.49 6.36 23.07 9.56 34.24 9.56a57 57 0 0 0 29.81-8.41c28.18-17.09 43.25-57.28 40.29-107.54ZM45.74 151C28.47 140.56 19 115.69 20.08 84.08 51.69 83 76.56 92.47 87 109.74c6.48 10.71 6.59 23.37.46 36.09l-28.64-28.66a4 4 0 0 0-5.65 5.65l28.67 28.67c-12.73 6.13-25.39 6.02-36.1-.49Zm153.45-10.2c-16.05 9.72-35.09 9.59-54.08-.25l57.72-57.73a4 4 0 0 0-5.65-5.66l-57.73 57.73c-9.84-19-10-38-.25-54.08 15.11-25 51.08-38.53 96.63-36.64 1.9 45.55-11.68 81.52-36.64 96.63Z" />
  </Svg>
);
const Memo = memo(SvgPlantThin);
export default Memo;