import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSneaker = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.65 129.11-60.73-20.24a24 24 0 0 1-14.32-13L130.39 41.6v-.1a16 16 0 0 0-20.14-8.5L34.53 60.49A16.05 16.05 0 0 0 24 75.53V192a16 16 0 0 0 16 16h200a16 16 0 0 0 16-16v-24.94a40 40 0 0 0-27.35-37.95ZM115.72 48l7.11 16.63-21.56 7.85A8 8 0 0 0 104 88a7.91 7.91 0 0 0 2.73-.49l22.4-8.14 4.74 11.07-16.6 6A8 8 0 0 0 120 112a7.91 7.91 0 0 0 2.73-.49l17.6-6.4a40.24 40.24 0 0 0 7.68 10l-14.74 5.36A8 8 0 0 0 136 136a8.14 8.14 0 0 0 2.73-.48l28-10.18 56.87 18.95A24 24 0 0 1 238.93 160H40V75.53ZM40 192v-16h200v16Z" />
  </Svg>
);
const Memo = memo(SvgSneaker);
export default Memo;
