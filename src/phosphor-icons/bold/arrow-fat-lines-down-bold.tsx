import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLinesDownBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M235.09 131.41A12 12 0 0 0 224 124h-36v-4a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v4H32a12 12 0 0 0-8.49 20.49l96 96a12 12 0 0 0 17 0l96-96a12 12 0 0 0 2.58-13.08ZM128 215l-67-67h19a12 12 0 0 0 12-12v-4h72v4a12 12 0 0 0 12 12h19ZM68 40a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12Zm0 40a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLinesDownBold);
export default Memo;
