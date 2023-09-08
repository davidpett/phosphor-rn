import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBluetoothSlashBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m216.88 207.93-160-176a12 12 0 1 0-17.76 16.14L107 122.75 48.8 166.4a12 12 0 1 0 14.4 19.2L108 152v72a12 12 0 0 0 19.2 9.6l47.91-35.94 24 26.41a12 12 0 0 0 17.76-16.14ZM132 200v-48l5 3.77 21.87 24.06ZM108 59.74V32a12 12 0 0 1 19.2-9.6l64 48a12 12 0 0 1 0 19.2l-27.1 20.33a12 12 0 0 1-14.4-19.2L164 80l-32-24v3.74a12 12 0 0 1-24 0Z" />
  </Svg>
);
const Memo = memo(SvgBluetoothSlashBold);
export default Memo;
