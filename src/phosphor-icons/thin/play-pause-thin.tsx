import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlayPauseThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180 64v128a4 4 0 0 1-8 0V64a4 4 0 0 1 8 0Zm44-4a4 4 0 0 0-4 4v128a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4Zm-84 68a11.76 11.76 0 0 1-5.48 10l-88.19 56.12a12 12 0 0 1-12.18.39A11.66 11.66 0 0 1 28 184.15V71.85a11.66 11.66 0 0 1 6.15-10.36 12 12 0 0 1 12.18.39L134.52 118a11.76 11.76 0 0 1 5.48 10Zm-8 0a3.77 3.77 0 0 0-1.78-3.22L42 68.63a3.94 3.94 0 0 0-2.09-.63 4 4 0 0 0-1.91.5 3.76 3.76 0 0 0-2 3.35v112.3a3.76 3.76 0 0 0 2 3.35 3.91 3.91 0 0 0 4-.13l88.18-56.15A3.77 3.77 0 0 0 132 128Z" />
  </Svg>
);
const Memo = memo(SvgPlayPauseThin);
export default Memo;
