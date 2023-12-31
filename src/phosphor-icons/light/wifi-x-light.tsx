import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiXLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M138 204a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm70.48-124 19.76-19.76a6 6 0 0 0-8.48-8.48L200 71.52l-19.76-19.76a6 6 0 0 0-8.48 8.48L191.52 80l-19.76 19.76a6 6 0 1 0 8.48 8.48L200 88.48l19.76 19.76a6 6 0 0 0 8.48-8.48Zm-36.95 80.15a74 74 0 0 0-87.06 0 6 6 0 0 0 7.06 9.7 62 62 0 0 1 72.94 0 6 6 0 0 0 8.38-1.32 6 6 0 0 0-1.32-8.38Zm-28.11-97.41a6 6 0 1 0 1.16-11.94c-5.47-.53-11.05-.8-16.58-.8A170.32 170.32 0 0 0 20.19 88.55a6 6 0 1 0 7.62 9.27A158.26 158.26 0 0 1 128 62c5.14 0 10.33.25 15.42.74Zm-.24 48.3a6 6 0 0 0 1.64-11.89A124 124 0 0 0 128 98a120.75 120.75 0 0 0-75.73 26.34 6 6 0 0 0 7.46 9.41A108.78 108.78 0 0 1 128 110a111.24 111.24 0 0 1 15.18 1Z" />
  </Svg>
);
const Memo = memo(SvgWifiXLight);
export default Memo;
