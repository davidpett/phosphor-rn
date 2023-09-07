import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCrownSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M242.52 77.7a10.07 10.07 0 0 0-11.12-1.42l-51.87 25.86-42.87-71.25a10.11 10.11 0 0 0-17.32 0l-42.87 71.25-51.85-25.85a10.1 10.1 0 0 0-14.1 12.21l37 113.36a6 6 0 0 0 8.77 3.3c.07 0 6.56-3.84 18.6-7.58C86 194.12 104.21 190 128 190s42 4.12 53.12 7.58c12 3.74 18.53 7.54 18.58 7.57a6 6 0 0 0 8.78-3.29l37-113.34a10 10 0 0 0-2.96-10.82Zm-43.29 113.83c-11-4.92-35.4-13.53-71.23-13.53s-60.23 8.61-71.23 13.53L23.32 89.05l49.35 24.6a10.17 10.17 0 0 0 13.18-3.83l42.15-70 42.15 70.05a10.17 10.17 0 0 0 13.17 3.83l49.36-24.61Z" />
  </Svg>
);
const Memo = memo(SvgCrownSimpleLight);
export default Memo;
