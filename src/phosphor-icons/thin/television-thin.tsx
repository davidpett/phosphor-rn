import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTelevisionThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 68h-78.34l41.17-41.17a4 4 0 1 0-5.66-5.66L128 66.34 82.83 21.17a4 4 0 0 0-5.66 5.66L118.34 68H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12ZM36 200V80a4 4 0 0 1 4-4h108v128H40a4 4 0 0 1-4-4Zm184 0a4 4 0 0 1-4 4h-60V76h60a4 4 0 0 1 4 4Zm-24-84a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm0 48a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgTelevisionThin);
export default Memo;
