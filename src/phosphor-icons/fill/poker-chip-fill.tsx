import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPokerChipFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM60.4 71.72l17.07 17.07a63.66 63.66 0 0 0-13 31.21h-24.1A87.6 87.6 0 0 1 60.4 71.72ZM40.37 136h24.15a63.66 63.66 0 0 0 13 31.21L60.4 184.28A87.6 87.6 0 0 1 40.37 136ZM120 215.63a87.6 87.6 0 0 1-48.28-20l17.07-17.07A63.66 63.66 0 0 0 120 191.48Zm0-151.11a63.66 63.66 0 0 0-31.21 13L71.72 60.4a87.6 87.6 0 0 1 48.28-20ZM215.63 120h-24.15a63.66 63.66 0 0 0-12.95-31.21l17.07-17.07A87.6 87.6 0 0 1 215.63 120ZM136 40.37a87.6 87.6 0 0 1 48.28 20l-17.07 17.1a63.66 63.66 0 0 0-31.21-13Zm0 175.26v-24.15a63.66 63.66 0 0 0 31.21-12.95l17.07 17.07A87.6 87.6 0 0 1 136 215.63Zm59.6-31.35-17.07-17.07A63.66 63.66 0 0 0 191.48 136h24.15a87.6 87.6 0 0 1-20.03 48.28Z" />
  </Svg>
);
const Memo = memo(SvgPokerChipFill);
export default Memo;
