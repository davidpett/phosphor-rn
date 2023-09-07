import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStripeLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Zm-4 176H52V52h152Zm-56-52c0-6.37-6.29-9.32-24-14.42-16.14-4.65-38.23-11-38.23-33.58 0-20.52 18.15-36 42.22-36 17.24 0 32.06 8.14 38.69 21.24a12 12 0 1 1-21.41 10.84C142.8 95.17 136 92 128 92c-10.22 0-18.22 5.27-18.22 12 0 1.09 0 2.21 3.28 4.17 4.18 2.48 11 4.45 17.6 6.35 8.75 2.52 17.8 5.13 25.38 9.86 13.19 8.23 16 19.56 16 27.62 0 20.19-19.33 36-44 36-21.26 0-39.46-12.35-43.27-29.38a12 12 0 0 1 23.42-5.24C109.3 158.49 117.21 164 128 164c9.44 0 20-5.13 20-12Z" />
  </Svg>
);
const Memo = memo(SvgStripeLogoBold);
export default Memo;
