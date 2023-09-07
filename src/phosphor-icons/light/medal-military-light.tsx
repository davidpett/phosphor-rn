import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMedalMilitaryLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M207 34H49a15 15 0 0 0-15 15v49.21a15 15 0 0 0 8.79 13.65l66.4 30.14a46 46 0 1 0 37.62 0l66.4-30.18A15 15 0 0 0 222 98.21V49a15 15 0 0 0-15-15Zm-45 12v76l-34 15.45L94 122V46ZM46 98.21V49a3 3 0 0 1 3-3h33v70.5l-34.24-15.56A3 3 0 0 1 46 98.21ZM162 184a34 34 0 1 1-34-34 34 34 0 0 1 34 34Zm48-85.79a3 3 0 0 1-1.76 2.73L174 116.5V46h33a3 3 0 0 1 3 3Z" />
  </Svg>
);
const Memo = memo(SvgMedalMilitaryLight);
export default Memo;
