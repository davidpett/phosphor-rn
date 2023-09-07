import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCheckFatDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m237.66 85.26-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0l36.68 35.32a8 8 0 0 0 11.32 0l92.68-91.32a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.31Z"
      opacity={0.2}
    />
    <Path d="m243.28 68.24-24-23.56a16 16 0 0 0-22.58 0L104 136l-.11-.11-36.64-35.27a16 16 0 0 0-22.57.06l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0l128.4-128.38a16 16 0 0 0-.05-22.67ZM103.62 208 32 136l24-24 .11.11 36.64 35.27a16 16 0 0 0 22.52 0L208.06 56 232 79.6Z" />
  </Svg>
);
const Memo = memo(SvgCheckFatDuotone);
export default Memo;
