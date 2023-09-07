import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCirclesThreePlusBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M78 36a42 42 0 1 0 42 42 42 42 0 0 0-42-42Zm0 60a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm100 24a42 42 0 1 0-42-42 42 42 0 0 0 42 42Zm0-60a18 18 0 1 1-18 18 18 18 0 0 1 18-18ZM78 136a42 42 0 1 0 42 42 42 42 0 0 0-42-42Zm0 60a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm142-18a12 12 0 0 1-12 12h-18v18a12 12 0 0 1-24 0v-18h-18a12 12 0 0 1 0-24h18v-18a12 12 0 0 1 24 0v18h18a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgCirclesThreePlusBold);
export default Memo;
