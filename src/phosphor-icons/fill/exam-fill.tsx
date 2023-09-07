import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgExamFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M96 113.89 107.06 136H84.94ZM232 56v160a8 8 0 0 1-11.58 7.16L192 208.94l-28.42 14.22a8 8 0 0 1-7.16 0L128 208.94l-28.42 14.22a8 8 0 0 1-7.16 0L64 208.94l-28.42 14.22A8 8 0 0 1 24 216V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Zm-96.84 100.42-32-64a8 8 0 0 0-14.32 0l-32 64a8 8 0 0 0 14.32 7.16L76.94 152h38.12l5.78 11.58a8 8 0 1 0 14.32-7.16ZM208 128a8 8 0 0 0-8-8h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 8-8Z" />
  </Svg>
);
const Memo = memo(SvgExamFill);
export default Memo;
