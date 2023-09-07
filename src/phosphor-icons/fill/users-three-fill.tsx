import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUsersThreeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M64.12 147.8a4 4 0 0 1-4 4.2H16a8 8 0 0 1-7.8-6.17 8.35 8.35 0 0 1 1.62-6.93A67.79 67.79 0 0 1 37 117.51a40 40 0 1 1 66.46-35.8 3.94 3.94 0 0 1-2.27 4.18A64.08 64.08 0 0 0 64 144c0 1.28 0 2.54.12 3.8Zm182-8.91A67.76 67.76 0 0 0 219 117.51a40 40 0 1 0-66.46-35.8 3.94 3.94 0 0 0 2.27 4.18A64.08 64.08 0 0 1 192 144c0 1.28 0 2.54-.12 3.8a4 4 0 0 0 4 4.2H240a8 8 0 0 0 7.8-6.17 8.33 8.33 0 0 0-1.63-6.94Zm-89 43.18a48 48 0 1 0-58.37 0A72.13 72.13 0 0 0 65.07 212 8 8 0 0 0 72 224h112a8 8 0 0 0 6.93-12 72.15 72.15 0 0 0-33.74-29.93Z" />
  </Svg>
);
const Memo = memo(SvgUsersThreeFill);
export default Memo;
