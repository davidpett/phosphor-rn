import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTarget = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M221.87 83.16A104.1 104.1 0 1 1 195.67 49l22.67-22.68a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32l27.72-27.72a40 40 0 1 0 17.87 31.09 8 8 0 1 1 16-.9 56 56 0 1 1-22.38-41.65l22.75-22.75a87.88 87.88 0 1 0 23.13 29.67 8 8 0 0 1 14.44-6.9Z" />
  </Svg>
);
const Memo = memo(SvgTarget);
export default Memo;
