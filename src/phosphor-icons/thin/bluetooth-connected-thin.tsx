import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBluetoothConnectedThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M186.4 172.8 126.67 128l59.73-44.8a4 4 0 0 0 0-6.4l-64-48A4 4 0 0 0 116 32v88L58.4 76.8a4 4 0 0 0-4.8 6.4l59.73 44.8-59.73 44.8a4 4 0 0 0 4.8 6.4L116 136v88a4 4 0 0 0 6.4 3.2l64-48a4 4 0 0 0 0-6.4ZM124 40l53.33 40L124 120Zm0 176v-80l53.33 40Zm-72-80a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm152-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgBluetoothConnectedThin);
export default Memo;
