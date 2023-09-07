import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartbeatFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0c-3.35-1.8-63.55-34.69-92.68-80.89a4 4 0 0 1 3.39-6.11H72a8 8 0 0 0 6.66-3.56l9.34-14 25.34 38a8 8 0 0 0 9.16 3.16 8.23 8.23 0 0 0 4.28-3.34l13.5-20.26H160a8 8 0 0 0 8-8.53 8.18 8.18 0 0 0-8.25-7.47H136a8 8 0 0 0-6.66 3.56l-9.34 14-25.34-38a8 8 0 0 0-9.17-3.16 8.25 8.25 0 0 0-4.27 3.34L67.72 120H23.53a4 4 0 0 1-3.83-2.81A76.93 76.93 0 0 1 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62Z" />
  </Svg>
);
const Memo = memo(SvgHeartbeatFill);
export default Memo;
