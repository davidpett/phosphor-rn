import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTidalLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m252.49 87.51-38-38a12 12 0 0 0-17 0L168 79l-31.51-31.49a12 12 0 0 0-17 0L88 79 58.49 49.51a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0L88 113l23 23-31.49 31.51a12 12 0 0 0 0 17l40 40a12 12 0 0 0 17 0l40-40a12 12 0 0 0 0-17L145 136l23-23 29.51 29.52a12 12 0 0 0 17 0l38-38a12 12 0 0 0-.02-17.01ZM50 117 29 96l21-21 21 21Zm78 82-23-23 23-23 23 23Zm0-80-23-23 23-23 23 23Zm78-2-21-21 21-21 21 21Z" />
  </Svg>
);
const Memo = memo(SvgTidalLogoBold);
export default Memo;
