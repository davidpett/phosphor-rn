import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTagSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m245 124.67-45.63-68.44A14 14 0 0 0 187.72 50H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h147.72a14 14 0 0 0 11.65-6.23L245 131.33a6 6 0 0 0 0-6.66Zm-55.61 68.44a2 2 0 0 1-1.66.89H40a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h147.72a2 2 0 0 1 1.66.89L232.79 128Z" />
  </Svg>
);
const Memo = memo(SvgTagSimpleLight);
export default Memo;
