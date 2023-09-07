import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitMergeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 108a36.07 36.07 0 0 0-33.94 24H152a36.16 36.16 0 0 1-28.8-14.4L99.62 86.16A36 36 0 1 0 68 89.94v76.12a36 36 0 1 0 24 0V116l12 16a60.27 60.27 0 0 0 48 24h22.06A36 36 0 1 0 208 108ZM80 44a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm0 168a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm128-56a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgGitMergeBold);
export default Memo;
