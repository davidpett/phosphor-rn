import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartScatterThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v156h188a4 4 0 0 1 4 4Zm-96-52a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm-24-56a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm-32 72a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm96-48a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm24-40a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm-8 88a8 8 0 1 0-8-8 8 8 0 0 0 8 8Z" />
  </Svg>
);
const Memo = memo(SvgChartScatterThin);
export default Memo;
