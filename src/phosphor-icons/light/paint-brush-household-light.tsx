import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaintBrushHouseholdLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.23 26.77a30.05 30.05 0 0 0-42.43 0l-.23.24-54.9 61.18a2 2 0 0 1-1.44.66 1.93 1.93 0 0 1-1.46-.59l-9.21-9.2a22 22 0 0 0-31.11 0l-76.69 76.69a6 6 0 0 0 0 8.49l80 80a6 6 0 0 0 8.49 0l76.69-76.69a22 22 0 0 0 0-31.11l-9.2-9.21a2 2 0 0 1-.59-1.46 2 2 0 0 1 .66-1.44L229 69.43l.24-.23a30.05 30.05 0 0 0-.01-42.43ZM96 231.51 76.49 212l23.76-23.76a6 6 0 0 0-8.49-8.49L68 203.51 52.49 188l23.76-23.76a6 6 0 0 0-8.49-8.49L44 179.51 24.49 160 72 112.48 143.52 184Zm124.85-170.9-61 54.79a14 14 0 0 0-.55 20.32l9.2 9.2a10 10 0 0 1 0 14.15L152 175.51 80.49 104l16.44-16.45a10 10 0 0 1 14.15 0l9.2 9.2a14 14 0 0 0 20.32-.55l54.79-61a18 18 0 0 1 25.46 25.46Z" />
  </Svg>
);
const Memo = memo(SvgPaintBrushHouseholdLight);
export default Memo;
