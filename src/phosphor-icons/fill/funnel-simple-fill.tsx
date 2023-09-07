import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFunnelSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-72 136h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16Zm32-40H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16Zm32-40H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgFunnelSimpleFill);
export default Memo;
