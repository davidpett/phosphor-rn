import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleZero = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm0-144c-14.23 0-26 6.44-34 18.61-6.47 9.86-10 23.14-10 37.39s3.56 27.53 10 37.39c8 12.18 19.74 18.61 34 18.61s26-6.43 34-18.61c6.47-9.86 10-23.14 10-37.39s-3.56-27.53-10-37.39C154 78.44 142.23 72 128 72Zm0 96c-22.1 0-28-25.14-28-40s5.9-40 28-40 28 25.14 28 40-5.9 40-28 40Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleZero);
export default Memo;
