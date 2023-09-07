import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWaveTriangleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-9.85 93.12-40 48A8 8 0 0 1 160 184h-.43a8 8 0 0 1-6.23-3.55l-58-87.09-33.19 39.76a8 8 0 0 1-12.3-10.24l40-48a8 8 0 0 1 12.81.68l58.05 87.09 33.14-39.77a8 8 0 1 1 12.3 10.24Z" />
  </Svg>
);
const Memo = memo(SvgWaveTriangleFill);
export default Memo;
