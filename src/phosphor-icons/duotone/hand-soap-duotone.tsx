import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandSoapDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 136v80a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-80a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32Z"
      opacity={0.2}
    />
    <Path d="M184 96.8V88a32 32 0 0 0-32-32h-16V32h32a8 8 0 0 1 8 8 8 8 0 0 0 16 0 24 24 0 0 0-24-24h-64a8 8 0 0 0 0 16h16v24h-16a32 32 0 0 0-32 32v8.8A40.07 40.07 0 0 0 40 136v80a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-80a40.07 40.07 0 0 0-32-39.2ZM104 72h48a16 16 0 0 1 16 16v8H88v-8a16 16 0 0 1 16-16Zm96 144H56v-80a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24v80Z" />
  </Svg>
);
const Memo = memo(SvgHandSoapDuotone);
export default Memo;
