import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextBFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 156a20 20 0 0 1-20 20H96v-40h52a20 20 0 0 1 20 20Zm56-108v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-40 108a36 36 0 0 0-18-31.15A36 36 0 0 0 140 64H88a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h60a36 36 0 0 0 36-36Zm-24-56a20 20 0 0 0-20-20H96v40h44a20 20 0 0 0 20-20Z" />
  </Svg>
);
const Memo = memo(SvgTextBFill);
export default Memo;
