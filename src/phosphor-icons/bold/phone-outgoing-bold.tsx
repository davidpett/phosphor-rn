import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneOutgoingBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M151.52 104.48a12 12 0 0 1 0-17L179 60h-11a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12v40a12 12 0 0 1-24 0V77l-27.51 27.51a12 12 0 0 1-17 0Zm84.33 71.1A60.27 60.27 0 0 1 176 228C94.39 228 28 161.61 28 80a60.27 60.27 0 0 1 52.42-59.85A20.05 20.05 0 0 1 101.2 32l21.11 47.13a1.42 1.42 0 0 0 .08.18 20 20 0 0 1-1.66 18.83 10.67 10.67 0 0 1-.85 1.15L100.82 122c7.06 12.84 20.5 26.16 33.49 33.21l22.31-19a13.08 13.08 0 0 1 1.12-.84 19.91 19.91 0 0 1 19-1.74l.18.08L224 154.8a20.06 20.06 0 0 1 11.85 20.78Zm-24.31-.06-42-18.81-22.43 19.07a11.63 11.63 0 0 1-1.11.85 20 20 0 0 1-19.69 1.37c-19.48-9.4-38.89-28.68-48.31-48a20 20 0 0 1 1.28-19.64 10.75 10.75 0 0 1 .86-1.15L99.3 86.5l-18.82-42A36.29 36.29 0 0 0 52 80a124.15 124.15 0 0 0 124 124 36.29 36.29 0 0 0 35.54-28.48Z" />
  </Svg>
);
const Memo = memo(SvgPhoneOutgoingBold);
export default Memo;
