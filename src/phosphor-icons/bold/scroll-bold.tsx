import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScrollBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M92 92a12 12 0 0 1 12-12h60a12 12 0 0 1 0 24h-60a12 12 0 0 1-12-12Zm12 52h60a12 12 0 0 0 0-24h-60a12 12 0 0 0 0 24Zm132 48a36 36 0 0 1-36 36H88a36 36 0 0 1-36-36V64a12 12 0 0 0-24 0c0 3.73 3.35 6.51 3.38 6.54l-.18-.14a12 12 0 1 1-14.39 19.19C15.49 88.62 4 79.55 4 64a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v100h4a12 12 0 0 1 7.2 2.4c1.31.98 12.8 10.05 12.8 25.6ZM92.62 172.2A12 12 0 0 1 104 164h84V64a12 12 0 0 0-12-12H73.94A35.88 35.88 0 0 1 76 64v128a12 12 0 0 0 24 0c0-3.58-3.17-6.38-3.2-6.4a12 12 0 0 1-4.18-13.4ZM212 192a7.69 7.69 0 0 0-1.24-4h-87a30.32 30.32 0 0 1 .26 4 35.84 35.84 0 0 1-2.06 12H200a12 12 0 0 0 12-12Z" />
  </Svg>
);
const Memo = memo(SvgScrollBold);
export default Memo;
