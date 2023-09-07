import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyStickerThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 29.39 195.61 3.94 3.94 0 0 0 1.66-1L222.62 159a4 4 0 0 0 1-1.65A100.07 100.07 0 0 0 128 28Zm88.25 126.1-62.15 62.15a91.88 91.88 0 1 1 62.15-62.15ZM84 108a8 8 0 1 1 8 8 8 8 0 0 1-8-8Zm88 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-.54 46c-9.55 16.52-25.39 26-43.46 26s-33.91-9.48-43.46-26a4 4 0 0 1 6.92-4c8.21 14.19 21.19 22 36.54 22s28.33-7.81 36.54-22a4 4 0 1 1 6.92 4Z" />
  </Svg>
);
const Memo = memo(SvgSmileyStickerThin);
export default Memo;
