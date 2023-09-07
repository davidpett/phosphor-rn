import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCircleHalfThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm4 8.09a91.58 91.58 0 0 1 24 4.27v175.28a91.58 91.58 0 0 1-24 4.27Zm32 7.25a92.21 92.21 0 0 1 24 15v139.35a92.21 92.21 0 0 1-24 15ZM36 128a92.11 92.11 0 0 1 88-91.91v183.82A92.11 92.11 0 0 1 36 128Zm160 61.9V66.1a91.83 91.83 0 0 1 0 123.8Z" />
  </Svg>
);
const Memo = memo(SvgCircleHalfThin);
export default Memo;
