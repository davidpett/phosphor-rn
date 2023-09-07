import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgQueueLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6Zm102 58H40a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12Zm0 64H40a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12Zm110-26a6 6 0 0 1-2.82 5.09l-64 40A6 6 0 0 1 170 200v-80a6 6 0 0 1 9.18-5.09l64 40A6 6 0 0 1 246 160Zm-17.32 0L182 130.83v58.34Z" />
  </Svg>
);
const Memo = memo(SvgQueueLight);
export default Memo;
