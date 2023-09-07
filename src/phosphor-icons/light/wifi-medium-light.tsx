import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiMediumLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M138 204a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm65.73-79.66a122 122 0 0 0-151.46 0 6 6 0 0 0 7.46 9.41 110 110 0 0 1 136.54 0A6 6 0 0 0 200 135a6 6 0 0 0 3.73-10.7Zm-32.2 35.81a74 74 0 0 0-87.06 0 6 6 0 0 0 7.06 9.7 62 62 0 0 1 72.94 0 6 6 0 0 0 8.38-1.32 6 6 0 0 0-1.32-8.38Z" />
  </Svg>
);
const Memo = memo(SvgWifiMediumLight);
export default Memo;
