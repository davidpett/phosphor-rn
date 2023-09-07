import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSuitcaseRollingFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 48h-24V24a24 24 0 0 0-24-24h-32a24 24 0 0 0-24 24v24H64a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h64v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM96 192a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm40 0a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm16-144h-48V24a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8Zm24 144a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgSuitcaseRollingFill);
export default Memo;
