import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgProjectorScreenThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 76a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v16a12 12 0 0 0 12 12h4v104H32a4 4 0 0 0 0 8h92v24.4a20 20 0 1 0 8 0V188h92a4 4 0 0 0 0-8h-12V76Zm-76 156a12 12 0 1 1-12-12 12 12 0 0 1 12 12ZM36 64V48a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4Zm168 116H52V76h152Z" />
  </Svg>
);
const Memo = memo(SvgProjectorScreenThin);
export default Memo;
