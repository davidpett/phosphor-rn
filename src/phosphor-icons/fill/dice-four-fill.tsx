import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiceFourFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32Zm-92 136a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-56a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm56 56a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-56a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgDiceFourFill);
export default Memo;
