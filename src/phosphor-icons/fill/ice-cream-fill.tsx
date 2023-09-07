import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIceCreamFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 89.37V88a80 80 0 0 0-160 0v1.37A24 24 0 0 0 56 136h3.36l61.69 108a8 8 0 0 0 13.9 0l61.69-108H200a24 24 0 0 0 8-46.63Zm-80 134.51L77.79 136h19.28l40.57 71Zm18.86-33L115.5 136h19.29l21.71 38Zm18.85-33L153.21 136h25Z" />
  </Svg>
);
const Memo = memo(SvgIceCreamFill);
export default Memo;
