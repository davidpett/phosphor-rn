import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandCoins = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230.33 141.06a24.43 24.43 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a7.93 7.93 0 0 0 1.94-.24l64-16a6.94 6.94 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM16 160h24v40H16Zm203.43 8.21-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.32 8.32 0 0 0 1.79-.2l67-15.41.31-.08a8.6 8.6 0 0 1 6.3 15.9ZM164 96a36 36 0 0 0 5.9-.48 36 36 0 1 0 28.22-47A36 36 0 1 0 164 96Zm60-12a20 20 0 1 1-20-20 20 20 0 0 1 20 20Zm-60-44a20 20 0 0 1 19.25 14.61 36 36 0 0 0-15 24.93A20.42 20.42 0 0 1 164 80a20 20 0 0 1 0-40Z" />
  </Svg>
);
const Memo = memo(SvgHandCoins);
export default Memo;
