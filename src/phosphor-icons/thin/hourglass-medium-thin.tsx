import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHourglassMediumThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196 75.64V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v36a12 12 0 0 0 4.8 9.6l56.53 42.4-56.53 42.4A12 12 0 0 0 60 180v36a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-35.64a12.05 12.05 0 0 0-4.76-9.57L134.63 128l56.61-42.79a12.05 12.05 0 0 0 4.76-9.57ZM128 123 86.67 92H169Zm60 57.37V216a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4v-36a4 4 0 0 1 1.6-3.2L124 136v32a4 4 0 0 0 8 0v-32l54.41 41.13a4 4 0 0 1 1.59 3.23Zm0-104.72a4 4 0 0 1-1.59 3.19L179.58 84H76l-6.4-4.8A4 4 0 0 1 68 76V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgHourglassMediumThin);
export default Memo;
