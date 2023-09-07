import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLinesLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 80v96h-32v48l-96-96 96-96v48Z" opacity={0.2} />
    <Path d="M152 72h-24V32a8 8 0 0 0-13.66-5.66l-96 96a8 8 0 0 0 0 11.32l96 96A8 8 0 0 0 128 224v-40h24a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8Zm-8 96h-24a8 8 0 0 0-8 8v28.69L35.31 128 112 51.31V80a8 8 0 0 0 8 8h24Zm80-88v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm-32 0v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLinesLeftDuotone);
export default Memo;
