import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberTwoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16Z"
      opacity={0.2}
    />
    <Path d="M176 208a8 8 0 0 1-8 8H88a8 8 0 0 1-6.4-12.8l71.94-95.92a32 32 0 1 0-51.1-38.53 32.5 32.5 0 0 0-3.78 6.46A8 8 0 1 1 84 68.8a48 48 0 1 1 82.33 48.09L104 200h64a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgNumberTwoDuotone);
export default Memo;
