import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScooterThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212 140a31.29 31.29 0 0 0-6.24.62l-11.82-35.46-22.15-66.42A4 4 0 0 0 168 36h-32a4 4 0 0 0 0 8h29.12l20.54 61.63L134 172H76a32 32 0 1 0-1 8h61a4 4 0 0 0 3.16-1.54l49.54-63.7 9.47 28.39A32 32 0 1 0 212 140ZM44 196a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm168 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" />
  </Svg>
);
const Memo = memo(SvgScooterThin);
export default Memo;
