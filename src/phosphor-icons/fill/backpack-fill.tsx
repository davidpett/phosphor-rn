import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBackpackFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 40.58V32a24 24 0 0 0-24-24h-32a24 24 0 0 0-24 24v8.58A56.09 56.09 0 0 0 40 96v120a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V96a56.09 56.09 0 0 0-48-55.42ZM104 32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v8h-48Zm8 40h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16Zm64 144H80v-40h56v8a8 8 0 0 0 16 0v-8h24Zm0-56H80v-8a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgBackpackFill);
export default Memo;
