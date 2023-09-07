import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaperclipFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm37.66 50.34a8 8 0 0 0-11.32 0L87.09 143A24 24 0 1 0 121 177l49.32-50.32a8 8 0 1 1 11.42 11.2l-49.37 50.38a40 40 0 1 1-56.62-56.51L143 63.09A24 24 0 1 1 177 97l-67.29 68.6a8 8 0 1 1-11.42-11.2l67.31-68.69a8 8 0 0 0 .06-11.37Z" />
  </Svg>
);
const Memo = memo(SvgPaperclipFill);
export default Memo;
