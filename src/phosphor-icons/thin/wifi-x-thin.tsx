import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiXThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 204a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm69.66-124 21.17-21.17a4 4 0 1 0-5.66-5.66L200 74.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L194.34 80l-21.17 21.17a4 4 0 0 0 5.66 5.66L200 85.66l21.17 21.17a4 4 0 1 0 5.66-5.66Zm-35.31 81.77a72 72 0 0 0-84.71 0 4 4 0 0 0 4.71 6.46 64.05 64.05 0 0 1 75.29 0 4 4 0 1 0 4.71-6.46Zm-26.74-101a4 4 0 1 0 .78-8A178.6 178.6 0 0 0 128 52 168.33 168.33 0 0 0 21.46 90.09a4 4 0 1 0 5.08 6.19A160.22 160.22 0 0 1 128 60c5.21 0 10.46.25 15.61.75Zm-.16 48.31a4 4 0 0 0 1.1-7.93A121.84 121.84 0 0 0 128 100a118.72 118.72 0 0 0-74.48 25.91 4 4 0 0 0 5 6.27A110.84 110.84 0 0 1 128 108a113.6 113.6 0 0 1 15.45 1.06Z" />
  </Svg>
);
const Memo = memo(SvgWifiXThin);
export default Memo;
