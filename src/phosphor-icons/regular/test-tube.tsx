import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTestTube = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m237.66 86.34-60-60a8 8 0 0 0-11.32 0L37.11 155.57a44.77 44.77 0 0 0 63.32 63.32L212.32 107l22.21-7.4a8 8 0 0 0 3.13-13.25ZM89.11 207.57a28.77 28.77 0 0 1-40.68-40.68l28.8-28.8c8.47-2.9 21.75-4 39.07 5 10.6 5.54 20.18 8 28.56 8.73ZM205.47 92.41a8 8 0 0 0-3.13 1.93l-39.57 39.57c-8.47 2.9-21.75 4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172 43.31l45.19 45.19Z" />
  </Svg>
);
const Memo = memo(SvgTestTube);
export default Memo;
