import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBluetoothXThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M186.4 172.8 126.67 128l27.73-20.8a4 4 0 1 0-4.8-6.4L124 120V40l25.6 19.2a4 4 0 0 0 4.8-6.4l-32-24A4 4 0 0 0 116 32v88L58.4 76.8a4 4 0 0 0-4.8 6.4l59.73 44.8-59.73 44.8a4 4 0 0 0 4.8 6.4L116 136v88a4 4 0 0 0 2.21 3.58 4.05 4.05 0 0 0 1.79.42 4 4 0 0 0 2.4-.8l64-48a4 4 0 0 0 0-6.4ZM124 216v-80l53.33 40Zm110.83-114.83a4 4 0 0 1-5.66 5.66L208 85.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L202.34 80l-21.17-21.17a4 4 0 0 1 5.66-5.66L208 74.34l21.17-21.17a4 4 0 1 1 5.66 5.66L213.66 80Z" />
  </Svg>
);
const Memo = memo(SvgBluetoothXThin);
export default Memo;
