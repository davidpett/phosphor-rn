import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGooglePlayLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222.84 115.93 55 19.89a14 14 0 0 0-14.12 0A13.68 13.68 0 0 0 34 31.87v192.26a13.68 13.68 0 0 0 6.92 11.94 14 14 0 0 0 14.12 0l167.8-96a13.75 13.75 0 0 0 0-24.14ZM46 217.5v-179l89.51 89.5Zm98-81 22.19 22.19L62.4 218.07ZM62.4 37.93l103.79 59.4L144 119.52ZM217 129.58l-.1.06-39.9 22.85L152.49 128 177 103.51l39.94 22.85.1.06a1.76 1.76 0 0 1 0 3.16Z" />
  </Svg>
);
const Memo = memo(SvgGooglePlayLogoLight);
export default Memo;
