import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiceSix = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32Zm16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16ZM104 84a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm72 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-72 44a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm72 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-72 44a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm72 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgDiceSix);
export default Memo;
