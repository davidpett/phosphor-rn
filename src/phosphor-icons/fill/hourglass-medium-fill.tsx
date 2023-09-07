import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHourglassMediumFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64Zm-16 104.72V216H72v-36l48-36v24a8 8 0 0 0 16 0v-23.92Zm0-104.72L178.23 80H77.33L72 76V40h112Z" />
  </Svg>
);
const Memo = memo(SvgHourglassMediumFill);
export default Memo;
