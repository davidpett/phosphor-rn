import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSteeringWheelThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 148a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm100-20A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100Zm-192 0q0 4.53.44 8.94a131.94 131.94 0 0 1 183.12 0q.44-4.41.44-8.94a92 92 0 0 0-184 0Zm77.75 90.9L94.2 166.6a4 4 0 0 0-3.75-2.6H43.34a92.31 92.31 0 0 0 70.41 54.9ZM128 220c1.78 0 3.55-.06 5.3-.16l21-56.05a12 12 0 0 1 11.25-7.79h50.09a91.61 91.61 0 0 0 2.43-9.21 124 124 0 0 0-180.14 0 91.61 91.61 0 0 0 2.43 9.21h50.09a12 12 0 0 1 11.24 7.8l21 56c1.73.14 3.51.2 5.31.2Zm84.66-56h-47.11a4 4 0 0 0-3.75 2.6l-19.6 52.3a92.26 92.26 0 0 0 70.46-54.9Z" />
  </Svg>
);
const Memo = memo(SvgSteeringWheelThin);
export default Memo;
