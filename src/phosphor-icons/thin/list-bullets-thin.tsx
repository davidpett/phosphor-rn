import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListBulletsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M84 64a4 4 0 0 1 4-4h128a4 4 0 0 1 0 8H88a4 4 0 0 1-4-4Zm132 60H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8Zm0 64H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8ZM44 120a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm0-64a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm0 128a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgListBulletsThin);
export default Memo;
