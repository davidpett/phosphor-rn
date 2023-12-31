import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBluetoothXFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 176a8 8 0 0 1-3.2 6.4l-64 48a8 8 0 0 1-4.8 1.6 7.9 7.9 0 0 1-4.11-1.14 8.3 8.3 0 0 1-3.9-7.18V144l-51.23 38.4a8 8 0 0 1-11.16-1.55 8.26 8.26 0 0 1 1.8-11.43L106.66 128 51.38 86.57a8.19 8.19 0 0 1-2.13-10.93 8 8 0 0 1 11.51-2L112 112V32.24a8.21 8.21 0 0 1 2.83-6.34 8 8 0 0 1 10-.3l33.62 25.2A4 4 0 0 1 160 54v52a4 4 0 0 1-1.6 3.2L133.34 128l55.5 41.6A8 8 0 0 1 192 176Zm45.47-77.87L219.37 80l18.11-18.11a8.21 8.21 0 0 0 .41-11.37 8 8 0 0 0-11.49-.18l-18.35 18.35-18.12-18.11a8.23 8.23 0 0 0-11.38-.41 8 8 0 0 0-.18 11.49L196.73 80l-18.15 18.13a8.2 8.2 0 0 0-.6 11.1 8 8 0 0 0 11.71.43l18.36-18.35 18.35 18.35a8 8 0 0 0 11.72-.43 8.21 8.21 0 0 0-.61-11.1Z" />
  </Svg>
);
const Memo = memo(SvgBluetoothXFill);
export default Memo;
