import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBriefcaseThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M108 112a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4Zm120-40v128a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V72a12 12 0 0 1 12-12h44V48a20 20 0 0 1 20-20h48a20 20 0 0 1 20 20v12h44a12 12 0 0 1 12 12ZM92 60h72V48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12ZM36 72v44a188 188 0 0 0 92 24 188 188 0 0 0 92-24V72a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4Zm184 128v-74.9a196.06 196.06 0 0 1-92 22.9 196 196 0 0 1-92-22.9V200a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z" />
  </Svg>
);
const Memo = memo(SvgBriefcaseThin);
export default Memo;
