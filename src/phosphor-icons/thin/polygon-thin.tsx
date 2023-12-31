import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPolygonThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M227.81 52.19a28 28 0 0 0-39.6 0 27.84 27.84 0 0 0-5.88 8.65l-34.56-9.42a28 28 0 0 0-47.57-23.23 28.05 28.05 0 0 0-3.48 35.37L57.91 98.49a28 28 0 0 0-37.72 1.71 28 28 0 0 0 39.6 39.6l.18-.19 75.32 55.24A28 28 0 1 0 173 183.2l29.56-83.75a28.52 28.52 0 0 0 5.44.55 28 28 0 0 0 19.8-47.79ZM105.86 33.85a20 20 0 1 1 0 28.29 20 20 0 0 1 0-28.29Zm-80 100.29a20 20 0 1 1 28.28 0 20 20 0 0 1-28.29 0Zm148.3 88a20 20 0 1 1 0-28.28 20 20 0 0 1-.01 28.29Zm-8.7-41.6a28 28 0 0 0-25.25 7.66l-.18.19-75.32-55.23a28.13 28.13 0 0 0-1.44-28.73l38.81-34.93a28 28 0 0 0 43.6-10.36l34.56 9.43a28 28 0 0 0 8 23.22 27.64 27.64 0 0 0 6.8 5Zm56.7-94.41a20 20 0 1 1 0-28.29 20 20 0 0 1-.01 28.3Z" />
  </Svg>
);
const Memo = memo(SvgPolygonThin);
export default Memo;
