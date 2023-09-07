import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 44H48a12 12 0 0 0-12 12v58.77c0 86.87 73.54 115.7 88.28 120.6a11.65 11.65 0 0 0 7.44 0c14.74-4.9 88.28-33.73 88.28-120.6V56a12 12 0 0 0-12-12Zm4 70.79c0 81.38-69 108.41-82.8 113a3.53 3.53 0 0 1-2.4 0C113 223.2 44 196.17 44 114.79V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgShieldThin);
export default Memo;
