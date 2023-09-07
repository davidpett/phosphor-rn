import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGooglePlayLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M221.89 117.69 54.05 21.62a12 12 0 0 0-12.13 0A11.69 11.69 0 0 0 36 31.87v192.26a11.69 11.69 0 0 0 5.92 10.21 12 12 0 0 0 12.13 0l167.77-96a11.76 11.76 0 0 0 .07-20.66Zm-52.44-20.8L144 122.34 50.4 28.75ZM44 222.33V33.67L138.34 128Zm6.4 4.92 93.6-93.59 25.45 25.45Zm167.51-95.88L176.65 155l-27-27 27-27L218 124.66a3.77 3.77 0 0 1-.07 6.71Z" />
  </Svg>
);
const Memo = memo(SvgGooglePlayLogoThin);
export default Memo;
