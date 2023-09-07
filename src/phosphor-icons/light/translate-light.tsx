import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTranslateLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m237.37 213.32-56-112a6 6 0 0 0-10.74 0l-22.3 44.6A90 90 0 0 1 97 127.19 101.73 101.73 0 0 0 125.82 62H152a6 6 0 0 0 0-12H94V32a6 6 0 0 0-12 0v18H24a6 6 0 0 0 0 12h89.79A89.71 89.71 0 0 1 88 119.23 89.81 89.81 0 0 1 67.11 86a6 6 0 1 0-11.31 4A101.66 101.66 0 0 0 79 127.2 89.56 89.56 0 0 1 24 146a6 6 0 0 0 0 12 101.55 101.55 0 0 0 64-22.63 102.11 102.11 0 0 0 54.53 22.17l-27.89 55.78a6 6 0 0 0 10.74 5.36L139.71 190h72.58l14.34 28.68A6 6 0 0 0 232 222a5.87 5.87 0 0 0 2.68-.64 6 6 0 0 0 2.69-8.04ZM145.71 178 176 117.42 206.29 178Z" />
  </Svg>
);
const Memo = memo(SvgTranslateLight);
export default Memo;
