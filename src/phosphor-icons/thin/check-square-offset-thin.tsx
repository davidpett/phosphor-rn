import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCheckSquareOffsetThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 48v160a12 12 0 0 1-12 12h-72a4 4 0 0 1 0-8h72a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v96a4 4 0 0 1-8 0V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12ZM117.17 157.17 64 210.34l-21.17-21.17a4 4 0 0 0-5.66 5.66l24 24a4 4 0 0 0 5.66 0l56-56a4 4 0 0 0-5.66-5.66Z" />
  </Svg>
);
const Memo = memo(SvgCheckSquareOffsetThin);
export default Memo;
