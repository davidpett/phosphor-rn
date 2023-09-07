import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBoatLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220.43 112.53 206 107.71V56a14 14 0 0 0-14-14h-58V24a6 6 0 0 0-12 0v18H64a14 14 0 0 0-14 14v51.71l-14.43 4.82A14 14 0 0 0 26 125.82v34.28a6.07 6.07 0 0 0 .23 1.64c15.41 54 84.84 72.7 98.6 75.9a14.14 14.14 0 0 0 6.34 0c13.76-3.2 83.19-21.88 98.6-75.9a6.07 6.07 0 0 0 .23-1.64v-34.28a14 14 0 0 0-9.57-13.29ZM62 56a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v47.7l-64.1-21.39a6 6 0 0 0-3.8 0L62 103.7Zm156 103.24c-5.87 19.62-21 36.3-45 49.56a183.74 183.74 0 0 1-44.55 17.2 2 2 0 0 1-.9 0A183.74 183.74 0 0 1 83 208.8c-24-13.26-39.11-29.94-45-49.56v-33.42a2 2 0 0 1 1.37-1.91L122 96.33V168a6 6 0 0 0 12 0V96.33l82.63 27.58a2 2 0 0 1 1.37 1.91Z" />
  </Svg>
);
const Memo = memo(SvgBoatLight);
export default Memo;
