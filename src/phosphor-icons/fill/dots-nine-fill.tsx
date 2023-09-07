import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsNineFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM76 192a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-52a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-52a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm52 104a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-52a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-52a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm52 104a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-52a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-52a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgDotsNineFill);
export default Memo;
