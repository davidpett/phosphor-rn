import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlantDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M138.54 141.46C106.62 88.25 149.18 35.05 239.63 40.37c5.37 90.45-47.88 133.02-101.09 101.09ZM16.26 80.26c-3.8 64.61 34.21 95 72.21 72.21 22.8-38-7.6-76.01-72.21-72.21Z"
      opacity={0.2}
    />
    <Path d="M247.63 39.89a8 8 0 0 0-7.52-7.52c-51.76-3-93.32 12.74-111.18 42.22-11.8 19.48-11.78 43.16-.16 65.74a71.37 71.37 0 0 0-14.17 26.95L98.33 151c7.82-16.33 7.52-33.36-1-47.49C84.09 81.73 53.62 70 15.79 72.27a8 8 0 0 0-7.52 7.52c-2.23 37.83 9.46 68.3 31.25 81.5A45.82 45.82 0 0 0 63.44 168 54.58 54.58 0 0 0 87 162.33l25 25V216a8 8 0 0 0 16 0v-29.49a55.61 55.61 0 0 1 12.27-35 73.91 73.91 0 0 0 33.31 8.4 60.9 60.9 0 0 0 31.83-8.86c29.48-17.84 45.26-59.4 42.22-111.16ZM86.06 138.74l-24.41-24.4a8 8 0 0 0-11.31 11.31l24.41 24.41c-9.61 3.18-18.93 2.39-26.94-2.46C32.47 138.31 23.79 116.32 24 88c28.31-.25 50.31 8.47 59.6 23.81 4.85 8.01 5.64 17.33 2.46 26.93Zm111.06-1.36c-13.4 8.11-29.15 8.73-45.15 2l53.69-53.7a8 8 0 0 0-11.31-11.32L140.65 128c-6.76-16-6.15-31.76 2-45.15 13.94-23 47-35.8 89.33-34.83.96 42.32-11.84 75.42-34.86 89.36Z" />
  </Svg>
);
const Memo = memo(SvgPlantDuotone);
export default Memo;
