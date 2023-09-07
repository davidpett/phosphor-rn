import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLaptopFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM112 72h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16Zm112 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192Z" />
  </Svg>
);
const Memo = memo(SvgLaptopFill);
export default Memo;
