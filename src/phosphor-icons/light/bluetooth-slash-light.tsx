import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBluetoothSlashLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m212.44 212-160-176a6 6 0 0 0-8.88 8l72.32 79.55L52.4 171.2a6 6 0 0 0 7.2 9.6L114 140v84a6 6 0 0 0 9.6 4.8l52.28-39.21L203.56 220a6 6 0 0 0 8.88-8.08ZM126 212v-72l15.09 11.31 26.68 29.36ZM114 71.63V32a6 6 0 0 1 9.6-4.8l64 48a6 6 0 0 1 0 9.6L154.07 110a6 6 0 0 1-7.2-9.6L174 80l-48-36v27.63a6 6 0 0 1-12 0Z" />
  </Svg>
);
const Memo = memo(SvgBluetoothSlashLight);
export default Memo;
