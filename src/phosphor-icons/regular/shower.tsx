import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShower = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M64 236a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm20-44a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm-64 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm32-32a12 12 0 1 0 12 12 12 12 0 0 0-12-12ZM256 40a8 8 0 0 1-8 8h-28.69l-27.85 27.86-21.66 126.79a16 16 0 0 1-27.09 8.66l-98-98a16 16 0 0 1 8.69-27.1l126.74-21.67L208 36.69A15.86 15.86 0 0 1 219.31 32H248a8 8 0 0 1 8 8Zm-81.79 41.79L56 102l98 98Z" />
  </Svg>
);
const Memo = memo(SvgShower);
export default Memo;
