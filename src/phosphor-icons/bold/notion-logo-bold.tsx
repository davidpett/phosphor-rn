import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotionLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 36h-40a12 12 0 0 0 0 24h8v101.28L118.51 42.22A12 12 0 0 0 108 36H40a12 12 0 0 0 0 24h8v136h-8a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24h-8V94.72l65.49 119.06A12 12 0 0 0 148 220h48a12 12 0 0 0 12-12V60h8a12 12 0 0 0 0-24ZM80.3 60h20.6l74.8 136h-20.6Z" />
  </Svg>
);
const Memo = memo(SvgNotionLogoBold);
export default Memo;
