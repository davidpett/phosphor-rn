import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLifebuoyThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm67.79 162.13-34-34a43.92 43.92 0 0 0 0-56.28l34-34a91.83 91.83 0 0 1 0 124.26ZM92 128a36 36 0 1 1 36 36 36 36 0 0 1-36-36Zm98.13-67.79-34 34a43.92 43.92 0 0 0-56.28 0l-34-34a91.83 91.83 0 0 1 124.26 0ZM60.21 65.87l34 34a43.92 43.92 0 0 0 0 56.28l-34 34a91.83 91.83 0 0 1 0-124.26Zm5.66 129.92 34-34a43.92 43.92 0 0 0 56.28 0l34 34a91.83 91.83 0 0 1-124.26 0Z" />
  </Svg>
);
const Memo = memo(SvgLifebuoyThin);
export default Memo;
