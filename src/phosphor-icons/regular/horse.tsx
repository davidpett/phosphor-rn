import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHorse = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 100a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm96 29.48A104.29 104.29 0 0 1 130.1 232h-2.17a103.32 103.32 0 0 1-69.26-26 8 8 0 1 1 10.67-12 84.71 84.71 0 0 0 20.1 13.37L116 170.84c-22.78-9.83-47.47-5.65-61.4-3.29a31.84 31.84 0 0 1-31.3-12.83l-.3-.43-13.78-22a8 8 0 0 1 2.59-11.05L112 59.53V32a8 8 0 0 1 8-8h8a104 104 0 0 1 104 105.48Zm-16-.22A88 88 0 0 0 128 40v24a8 8 0 0 1-3.81 6.81l-97.13 59.78 9.36 15A15.92 15.92 0 0 0 52 151.77c16-2.7 48.77-8.24 78.07 8.18A40.06 40.06 0 0 0 168 120a8 8 0 0 1 16 0 56.07 56.07 0 0 1-51.8 55.83l-27.11 37.28a90.89 90.89 0 0 0 24.69 2.89A88.29 88.29 0 0 0 216 129.26Z" />
  </Svg>
);
const Memo = memo(SvgHorse);
export default Memo;
