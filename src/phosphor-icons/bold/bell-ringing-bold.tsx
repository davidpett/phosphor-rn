import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBellRingingBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M35.7 76a11.86 11.86 0 0 1-5.51-1.35 12 12 0 0 1-5.13-16.17A115.25 115.25 0 0 1 65.6 13.86a12 12 0 1 1 12.8 20.29 90.1 90.1 0 0 0-32 35.38A12 12 0 0 1 35.7 76Zm195.24-17.52a115.25 115.25 0 0 0-40.54-44.62 12 12 0 1 0-12.8 20.29 90.1 90.1 0 0 1 32 35.38A12 12 0 0 0 220.3 76a11.86 11.86 0 0 0 5.51-1.35 12 12 0 0 0 5.13-16.17Zm-11.06 109.4A20 20 0 0 1 204 200h-32.74a44 44 0 0 1-86.52 0H52a20 20 0 0 1-15.91-32.12c7.17-9.33 15.73-26.62 15.88-55.94A76 76 0 0 1 204 112c.15 29.26 8.71 46.55 15.88 55.88ZM146.32 200h-36.64a20 20 0 0 0 36.64 0Zm50-24c-8.16-13-16.19-33.57-16.34-63.94A52 52 0 1 0 76 112c-.15 30.42-8.18 51-16.34 64Z" />
  </Svg>
);
const Memo = memo(SvgBellRingingBold);
export default Memo;
