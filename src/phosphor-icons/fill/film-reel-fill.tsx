import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFilmReelFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 216h-40.64A103.95 103.95 0 1 0 128 232h96a8 8 0 0 0 0-16ZM80 148a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm48 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm0-96a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm28 28a20 20 0 1 1 20 20 20 20 0 0 1-20-20Z" />
  </Svg>
);
const Memo = memo(SvgFilmReelFill);
export default Memo;
