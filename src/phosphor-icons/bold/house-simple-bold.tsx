import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHouseSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m221.56 100.85-79.95-75.47-.16-.15a19.93 19.93 0 0 0-26.91 0l-.17.15-79.93 75.47a20.07 20.07 0 0 0-6.44 14.7V208a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-92.45a20.07 20.07 0 0 0-6.44-14.7ZM204 204H52v-86.72l76-71.75 76 71.75Z" />
  </Svg>
);
const Memo = memo(SvgHouseSimpleBold);
export default Memo;
