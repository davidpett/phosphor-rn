import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListDashesThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M92 64a4 4 0 0 1 4-4h120a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4Zm124 60H96a4 4 0 0 0 0 8h120a4 4 0 0 0 0-8Zm0 64H96a4 4 0 0 0 0 8h120a4 4 0 0 0 0-8ZM56 60H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8Zm0 64H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8Zm0 64H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgListDashesThin);
export default Memo;
