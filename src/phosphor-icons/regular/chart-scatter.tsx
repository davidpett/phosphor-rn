import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartScatter = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v152h184a8 8 0 0 1 8 8Zm-100-48a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm-24-56a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm-32 72a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm96-48a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm24-40a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm-20 76a12 12 0 1 0 12-12 12 12 0 0 0-12 12Z" />
  </Svg>
);
const Memo = memo(SvgChartScatter);
export default Memo;
