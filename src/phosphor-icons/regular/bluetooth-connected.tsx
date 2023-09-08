import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBluetoothConnected = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188.8 169.6 133.33 128l55.47-41.6a8 8 0 0 0 0-12.8l-64-48A8 8 0 0 0 112 32v80L60.8 73.6a8 8 0 0 0-9.6 12.8l55.47 41.6-55.47 41.6a8 8 0 1 0 9.6 12.8L112 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8ZM128 48l42.67 32L128 112Zm0 160v-64l42.67 32Zm-76-68a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm156-12a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgBluetoothConnected);
export default Memo;
