import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBackpackBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172 48.55V36a28 28 0 0 0-28-28h-32a28 28 0 0 0-28 28v12.55A60.08 60.08 0 0 0 32 108v112a20 20 0 0 0 20 20h152a20 20 0 0 0 20-20V108a60.08 60.08 0 0 0-52-59.45ZM112 32h32a4 4 0 0 1 4 4v12h-40V36a4 4 0 0 1 4-4Zm48 128H96v-8a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4Zm-64 24h32v4a12 12 0 0 0 24 0v-4h8v32H96Zm104 32h-16v-64a28 28 0 0 0-28-28h-56a28 28 0 0 0-28 28v64H56V108a36 36 0 0 1 36-36h72a36 36 0 0 1 36 36Zm-40-116a12 12 0 0 1-12 12h-40a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgBackpackBold);
export default Memo;
