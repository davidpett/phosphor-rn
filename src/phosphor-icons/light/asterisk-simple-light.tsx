import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAsteriskSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m210.23 101.57-72.6 29 51.11 65.71a6 6 0 0 1-9.48 7.36L128 137.77l-51.26 65.91a6 6 0 1 1-9.48-7.36l51.11-65.71-72.6-29a6 6 0 1 1 4.46-11.14L122 119.14V40a6 6 0 0 1 12 0v79.14l71.77-28.71a6 6 0 1 1 4.46 11.14Z" />
  </Svg>
);
const Memo = memo(SvgAsteriskSimpleLight);
export default Memo;
