import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFadersHorizontalLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M34 80a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6Zm182 90h-42v-18a6 6 0 0 0-12 0v48a6 6 0 0 0 12 0v-18h42a6 6 0 0 0 0-12Zm-80 0H40a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12Zm-32-60a6 6 0 0 0 6-6V86h106a6 6 0 0 0 0-12H110V56a6 6 0 0 0-12 0v48a6 6 0 0 0 6 6Z" />
  </Svg>
);
const Memo = memo(SvgFadersHorizontalLight);
export default Memo;
