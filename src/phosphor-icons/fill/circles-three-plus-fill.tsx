import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCirclesThreePlusFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M120 80a40 40 0 1 1-40-40 40 40 0 0 1 40 40Zm56 40a40 40 0 1 0-40-40 40 40 0 0 0 40 40Zm-96 16a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm128 32h-24v-24a8 8 0 0 0-16 0v24h-24a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgCirclesThreePlusFill);
export default Memo;
