import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSubtractSquareLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 90h-50V40a6 6 0 0 0-6-6H40a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h50v50a6 6 0 0 0 6 6h120a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6Zm-53.52 120-44-44h39l44 44Zm3.52-52.48v-39l44 44v39Zm44-12L166.48 102H210ZM46 46h108v108H46Zm56 120.48L145.52 210H102Z" />
  </Svg>
);
const Memo = memo(SvgSubtractSquareLight);
export default Memo;
