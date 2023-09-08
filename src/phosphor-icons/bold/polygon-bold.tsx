import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPolygonBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M233.47 97.45a36 36 0 0 0-50.92-50.92 36.18 36.18 0 0 0-4.12 4.95l-22.55-6.15a36 36 0 0 0-61.34-22.8 36.05 36.05 0 0 0-7.8 39.24l-29.55 26.6a36.08 36.08 0 0 0-42.66 6.17 36 36 0 0 0 45.73 55.21l65.28 47.87A36 36 0 1 0 182.62 180L208 108a35.91 35.91 0 0 0 25.47-10.55Zm-93.74 80.81-65.28-47.87a36.19 36.19 0 0 0-1.21-24.17l29.56-26.61a36 36 0 0 0 42.66-6.16 35.47 35.47 0 0 0 4.12-5l22.55 6.15a35.86 35.86 0 0 0 10.42 22.8 38.06 38.06 0 0 0 2.85 2.6L160 172a36 36 0 0 0-20.27 6.26ZM216.5 63.5a12 12 0 1 1-17 0 12 12 0 0 1 17 0Zm-105-24a12 12 0 1 1 0 17 12 12 0 0 1 .01-17Zm-80 89a12 12 0 1 1 17 0 12 12 0 0 1-17-.01Zm137 88a12 12 0 1 1 0-17 12 12 0 0 1-.01 17Z" />
  </Svg>
);
const Memo = memo(SvgPolygonBold);
export default Memo;
