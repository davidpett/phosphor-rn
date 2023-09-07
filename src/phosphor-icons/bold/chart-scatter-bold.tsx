import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartScatterBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v148h180a12 12 0 0 1 12 12Zm-120-60a16 16 0 1 0 16-16 16 16 0 0 0-16 16Zm-8-40a16 16 0 1 0-16-16 16 16 0 0 0 16 16Zm-32 72a16 16 0 1 0-16-16 16 16 0 0 0 16 16Zm96-48a16 16 0 1 0-16-16 16 16 0 0 0 16 16Zm24-40a16 16 0 1 0-16-16 16 16 0 0 0 16 16Zm-24 72a16 16 0 1 0 16-16 16 16 0 0 0-16 16Z" />
  </Svg>
);
const Memo = memo(SvgChartScatterBold);
export default Memo;
