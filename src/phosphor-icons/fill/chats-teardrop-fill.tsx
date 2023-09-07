import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatsTeardropFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M169.57 72.59A80 80 0 0 0 16 104v66a14 14 0 0 0 14 14h56.67A80.15 80.15 0 0 0 160 232h66a14 14 0 0 0 14-14v-66a80 80 0 0 0-70.43-79.41ZM224 216h-64a64.14 64.14 0 0 1-55.68-32.43 79.93 79.93 0 0 0 70.38-93.86A64 64 0 0 1 224 152Z" />
  </Svg>
);
const Memo = memo(SvgChatsTeardropFill);
export default Memo;
