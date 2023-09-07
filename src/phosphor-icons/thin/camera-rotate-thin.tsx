import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCameraRotateThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 60h-29.87l-14.81-22.22A4 4 0 0 0 160 36H96a4 4 0 0 0-3.32 1.78L77.85 60H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20Zm12 132a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h32a4 4 0 0 0 3.33-1.78L98.13 44h59.72l14.82 22.22A4 4 0 0 0 176 68h32a12 12 0 0 1 12 12Zm-48-96v24a4 4 0 0 1-4 4h-24a4 4 0 0 1 0-8h14.66l-5.27-5.52a36.12 36.12 0 0 0-47-3.29 4 4 0 1 1-4.8-6.39 44.17 44.17 0 0 1 57.51 4.09L164 110V96a4 4 0 0 1 8 0Zm-16.8 61.6a4 4 0 0 1-.8 5.6 44.15 44.15 0 0 1-57.51-4.09L92 154v14a4 4 0 0 1-8 0v-24a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8H97.34l5.27 5.52a36.12 36.12 0 0 0 47 3.29 4 4 0 0 1 5.59.79Z" />
  </Svg>
);
const Memo = memo(SvgCameraRotateThin);
export default Memo;
