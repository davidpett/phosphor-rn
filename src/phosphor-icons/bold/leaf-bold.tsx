import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLeafBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M227.42 39.86a12 12 0 0 0-11.28-11.28c-39.6-2.33-74.59 2.34-104 13.87C84 53.48 62.31 70.58 49.39 91.9c-17.62 29.11-17.66 64.45-.45 98.19l-17.43 17.43a12 12 0 0 0 17 17l17.43-17.43c16.74 8.54 33.88 12.85 50.45 12.85a91.31 91.31 0 0 0 47.74-13.3c21.32-12.92 38.42-34.62 49.45-62.75 11.5-29.43 16.17-64.43 13.84-104.03Zm-75.76 146.22C131.57 198.25 108 199.17 83.94 189l84.54-84.54a12 12 0 1 0-17-17L67 172.06c-10.14-24-9.22-47.63 3-67.72 20.91-34.53 70.54-53.72 134-52.25 1.38 63.44-17.81 113.08-52.34 133.99Z" />
  </Svg>
);
const Memo = memo(SvgLeafBold);
export default Memo;
