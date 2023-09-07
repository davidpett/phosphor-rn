import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMusicNotesPlusFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 56a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0V64h-16a8 8 0 0 1 0-16h16V32a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8Zm-24 56a8 8 0 0 0-8 8v22.08A36 36 0 1 0 216 172v-52a8 8 0 0 0-8-8Zm-54.42-10.67a8 8 0 0 0 2.76-9.88 8.11 8.11 0 0 0-1.1-1.79 55.78 55.78 0 0 1-11-39A8 8 0 0 0 137 42a7.9 7.9 0 0 0-2.61.21L78.06 56.24A8 8 0 0 0 72 64v110.08A36 36 0 1 0 88 204v-85.75l62.82-15.71a8.06 8.06 0 0 0 2.76-1.21Z" />
  </Svg>
);
const Memo = memo(SvgMusicNotesPlusFill);
export default Memo;
