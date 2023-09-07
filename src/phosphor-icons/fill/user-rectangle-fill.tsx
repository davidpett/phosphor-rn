import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserRectangleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172 120a44 44 0 1 1-44-44 44 44 0 0 1 44 44Zm60-64v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Zm-16 144V56H40v144h14.68a80 80 0 0 1 29.41-34.84 4 4 0 0 1 4.83.31 59.82 59.82 0 0 0 78.16 0 4 4 0 0 1 4.83-.31A80 80 0 0 1 201.32 200H216Z" />
  </Svg>
);
const Memo = memo(SvgUserRectangleFill);
export default Memo;
