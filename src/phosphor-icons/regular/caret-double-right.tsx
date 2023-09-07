import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretDoubleRight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m141.66 133.66-80 80a8 8 0 0 1-11.32-11.32L124.69 128 50.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Zm80-11.32-80-80a8 8 0 0 0-11.32 11.32L204.69 128l-74.35 74.34a8 8 0 0 0 11.32 11.32l80-80a8 8 0 0 0 0-11.32Z" />
  </Svg>
);
const Memo = memo(SvgCaretDoubleRight);
export default Memo;
