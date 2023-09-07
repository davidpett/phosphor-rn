import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGradientLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M26 104a6 6 0 0 1 6-6h80a6 6 0 0 1 0 12H32a6 6 0 0 1-6-6Zm198-6h-80a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12ZM72 138H32a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12Zm152 0h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12Zm-126 6a6 6 0 0 0 6 6h48a6 6 0 0 0 0-12h-48a6 6 0 0 0-6 6Zm-42 34H32a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12Zm56 0H88a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12Zm56 0h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12Zm56 0h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12ZM32 70h192a6 6 0 0 0 0-12H32a6 6 0 0 0 0 12Z" />
  </Svg>
);
const Memo = memo(SvgGradientLight);
export default Memo;
