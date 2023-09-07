import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSneakerMoveBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212 148a24 24 0 0 1-24-24V95.71a20.14 20.14 0 0 0-18.42-19.93C147.45 74 133.07 60 132.06 39.3a20 20 0 0 0-5.83-13.17L118 17.9a19.91 19.91 0 0 0-27.94-.34l-.22.22-64 64.11a20 20 0 0 0 0 28.28l.13.13 107.28 103.92a19.86 19.86 0 0 0 14.06 5.78H236a20 20 0 0 0 20-20v-8a44 44 0 0 0-44-44Zm20 48h-83.06L45.7 96l58.17-58.3 4.31 4.3c2.18 30.66 24.27 53.22 55.82 57.3v8.7h-16a12 12 0 1 0 0 24h16.68a47.8 47.8 0 0 0 3.7 12H156a12 12 0 1 0 0 24h36.84a47.69 47.69 0 0 0 19.16 4 20 20 0 0 1 20 20ZM52 184H28a12 12 0 0 1 0-24h24a12 12 0 0 1 0 24Zm52 24a12 12 0 0 1-12 12H44a12 12 0 1 1 0-24h48a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgSneakerMoveBold);
export default Memo;
