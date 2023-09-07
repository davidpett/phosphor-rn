import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplay = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M134.08 154.79a8 8 0 0 0-12.15 0l-48 56A8 8 0 0 0 80 224h96a8 8 0 0 0 6.07-13.21ZM97.39 208 128 172.29 158.61 208ZM232 64v112a24 24 0 0 1-24 24h-16a8 8 0 0 1 0-16h16a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h16a8 8 0 0 1 0 16H48a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24Z" />
  </Svg>
);
const Memo = memo(SvgAirplay);
export default Memo;
