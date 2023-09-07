import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneDisconnectBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234.39 87.29c-57.67-57.72-155.11-57.72-212.78 0-21.45 21.47-23.52 53.13-5 77a20 20 0 0 0 22.92 6.37l48.87-17.37.45-.16A20 20 0 0 0 101 138.47l5.44-27.24a72.48 72.48 0 0 1 42.76-.09l5.8 27.48a20 20 0 0 0 12.14 14.49l.45.17 48.94 17.37a20 20 0 0 0 22.91-6.37c18.47-23.86 16.4-55.52-5.05-76.99Zm-12.23 59.9L178 131.5l-5.76-27.5a20 20 0 0 0-13-14.8 96.49 96.49 0 0 0-62.94.14 20 20 0 0 0-12.9 14.9L78 131.53l-44.16 15.66c-9.16-13.85-7.41-30.77 4.73-42.92C62.81 80 95.41 67.88 128 67.88s65.19 12.12 89.43 36.39c12.14 12.15 13.89 29.08 4.73 42.92ZM228 200a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgPhoneDisconnectBold);
export default Memo;
