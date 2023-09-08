import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMessengerLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180.24 107.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0L112 120.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0L144 135.51l27.76-27.75a6 6 0 0 1 8.48 0ZM230 128a102 102 0 0 1-150.69 89.65l-34.87 11.62a14 14 0 0 1-17.71-17.71l11.62-34.87A102 102 0 1 1 230 128Zm-12 0a90 90 0 1 0-167.92 45.06 6 6 0 0 1 .5 4.91l-12.46 37.38a2 2 0 0 0 2.53 2.53L78 205.42a6.2 6.2 0 0 1 1.9-.31 6.09 6.09 0 0 1 3 .81A90 90 0 0 0 218 128Z" />
  </Svg>
);
const Memo = memo(SvgMessengerLogoLight);
export default Memo;
