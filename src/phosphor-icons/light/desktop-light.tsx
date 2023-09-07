import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDesktopLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 42H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h74v20H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-20h74a22 22 0 0 0 22-22V64a22 22 0 0 0-22-22ZM48 54h160a10 10 0 0 1 10 10v82H38V64a10 10 0 0 1 10-10Zm160 132H48a10 10 0 0 1-10-10v-18h180v18a10 10 0 0 1-10 10Z" />
  </Svg>
);
const Memo = memo(SvgDesktopLight);
export default Memo;
