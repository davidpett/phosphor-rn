import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCirclesThreeThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 76a40 40 0 1 0-40 40 40 40 0 0 0 40-40Zm-40 32a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm60 24a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm0 72a32 32 0 1 1 32-32 32 32 0 0 1-32 32ZM68 132a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm0 72a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" />
  </Svg>
);
const Memo = memo(SvgCirclesThreeThin);
export default Memo;
