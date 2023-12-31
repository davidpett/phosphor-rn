import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiHigh = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M140 204a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm97.08-117a172 172 0 0 0-218.16 0 8 8 0 0 0 10.16 12.37 156 156 0 0 1 197.84 0A8 8 0 0 0 237.08 87ZM205 122.77a124 124 0 0 0-153.94 0A8 8 0 0 0 61 135.31a108 108 0 0 1 134.06 0 8 8 0 0 0 11.24-1.3 8 8 0 0 0-1.3-11.24Zm-32.26 35.76a76.05 76.05 0 0 0-89.42 0 8 8 0 0 0 9.42 12.94 60 60 0 0 1 70.58 0 8 8 0 1 0 9.42-12.94Z" />
  </Svg>
);
const Memo = memo(SvgWifiHigh);
export default Memo;
