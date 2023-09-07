import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDeviceMobileLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 18H80a22 22 0 0 0-22 22v176a22 22 0 0 0 22 22h96a22 22 0 0 0 22-22V40a22 22 0 0 0-22-22ZM70 62h116v132H70Zm10-32h96a10 10 0 0 1 10 10v10H70V40a10 10 0 0 1 10-10Zm96 196H80a10 10 0 0 1-10-10v-10h116v10a10 10 0 0 1-10 10Z" />
  </Svg>
);
const Memo = memo(SvgDeviceMobileLight);
export default Memo;
