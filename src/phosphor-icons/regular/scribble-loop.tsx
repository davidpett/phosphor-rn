import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScribbleLoop = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M245.93 154.63c-1.32-1.46-24.09-26.22-61-40.56-1.72-18.42-8.46-35.17-19.41-47.92C150.87 49 129.58 40 104 40c-51.52 0-85.11 46.18-86.51 48.15a8 8 0 0 0 13 9.31C30.8 97.05 60.81 56 104 56c20.77 0 37.86 7.11 49.41 20.57 7.42 8.64 12.44 19.69 14.67 32A140.87 140.87 0 0 0 132.6 104c-26.06 0-47.93 6.81-63.26 19.69C55.78 135.09 48 151 48 167.25a47.59 47.59 0 0 0 13.87 34.05c9.66 9.62 23.06 14.7 38.73 14.7 51.81 0 81.18-42.13 84.49-84.42a161.43 161.43 0 0 1 49 33.79 8 8 0 1 0 11.86-10.74Zm-94.46 21.64C142.64 187.09 126.66 200 100.6 200 75.32 200 64 183.55 64 167.25 64 144.49 85.47 120 132.6 120a124.34 124.34 0 0 1 36.78 5.68c-.45 18.76-6.92 37.1-17.91 50.59Z" />
  </Svg>
);
const Memo = memo(SvgScribbleLoop);
export default Memo;
