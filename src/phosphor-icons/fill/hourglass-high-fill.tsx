import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHourglassHighFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64ZM184 40v24H72V40Zm0 176H72v-36l56-42 56 42.35Z" />
  </Svg>
);
const Memo = memo(SvgHourglassHighFill);
export default Memo;
