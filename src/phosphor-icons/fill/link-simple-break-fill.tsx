import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkSimpleBreakFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-63.44 141.66-21.45 21.45a44 44 0 0 1-62.22-62.22l21.45-21.46a8 8 0 0 1 11.32 11.31L72.2 144.2a28 28 0 0 0 39.6 39.6l21.45-21.46a8 8 0 0 1 11.31 11.32Zm50.55-50.55-21.45 21.45a8 8 0 0 1-11.32-11.31l21.46-21.45a28 28 0 0 0-39.6-39.6l-21.46 21.46a8 8 0 0 1-11.31-11.32l21.46-21.45a44 44 0 0 1 62.22 62.22Z" />
  </Svg>
);
const Memo = memo(SvgLinkSimpleBreakFill);
export default Memo;
