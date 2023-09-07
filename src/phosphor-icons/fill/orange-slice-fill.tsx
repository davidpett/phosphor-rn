import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgOrangeSliceFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M51.18 145.51A95.5 95.5 0 0 1 32 88c0-1.41 0-2.81.09-4.21a4 4 0 0 1 4-3.79H107a4 4 0 0 1 2.83 6.83ZM120 183.66V99.31l-58.17 58.18A95.68 95.68 0 0 0 120 183.66Zm84.82-38.15A95.5 95.5 0 0 0 224 88c0-1.41 0-2.81-.09-4.21a4 4 0 0 0-4-3.79H149a4 4 0 0 0-2.83 6.83ZM248 80h-4.08a4 4 0 0 0-4 4.14c0 1.28.07 2.57.07 3.86A112 112 0 0 1 16 88c0-1.29 0-2.58.07-3.86a4 4 0 0 0-4-4.14H8a8 8 0 0 0-8 8 128 128 0 1 0 256 0 8 8 0 0 0-8-8ZM136 99.31v84.35a95.68 95.68 0 0 0 58.17-26.17Z" />
  </Svg>
);
const Memo = memo(SvgOrangeSliceFill);
export default Memo;
