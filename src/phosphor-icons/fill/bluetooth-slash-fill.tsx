import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBluetoothSlashFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M213.38 221.92a8 8 0 0 1-11.3-.54l-26.45-29.1-50.83 38.12a8 8 0 0 1-8.91.46 8.32 8.32 0 0 1-3.89-7.18V144l-51.2 38.4a8 8 0 0 1-11.16-1.55 8.27 8.27 0 0 1 1.8-11.43l61.48-46.11-70.84-77.93a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3Zm-68.83-111.39a8 8 0 0 0 10.72 1l33.35-25a8.31 8.31 0 0 0 3-4.08 8 8 0 0 0-2.82-8.85l-64-48a8 8 0 0 0-10 .3 8.24 8.24 0 0 0-2.8 6.34v39.39a8 8 0 0 0 2.08 5.37Z" />
  </Svg>
);
const Memo = memo(SvgBluetoothSlashFill);
export default Memo;
