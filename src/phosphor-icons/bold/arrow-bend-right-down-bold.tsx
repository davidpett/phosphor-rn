import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendRightDownBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m208.49 184.49-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 0 1 17-17L140 195v-67a84.09 84.09 0 0 0-84-84 12 12 0 0 1 0-24 108.12 108.12 0 0 1 108 108v67l27.51-27.52a12 12 0 0 1 17 17Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendRightDownBold);
export default Memo;
