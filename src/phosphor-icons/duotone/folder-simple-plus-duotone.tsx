import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimplePlusDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6l27.74 20.8a8 8 0 0 0 4.8 1.6H216a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16Zm0 128H40V64h53.33l27.74 20.8a16.12 16.12 0 0 0 9.6 3.2H216Zm-56-56a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimplePlusDuotone);
export default Memo;
