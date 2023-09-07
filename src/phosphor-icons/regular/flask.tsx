import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlask = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M221.69 199.77 160 96.92V40h8a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h8v56.92L34.31 199.77A16 16 0 0 0 48 224h160a16 16 0 0 0 13.72-24.23Zm-110.83-96.52a7.93 7.93 0 0 0 1.14-4.11V40h32v59.14a7.93 7.93 0 0 0 1.14 4.11L183.36 167c-12 2.37-29.07 1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48 208l28.54-47.58c14.25-1.74 30.31 1.85 47.82 10.72 19 9.61 35 12.88 48 12.88a69.89 69.89 0 0 0 19.55-2.7L208 208Z" />
  </Svg>
);
const Memo = memo(SvgFlask);
export default Memo;
