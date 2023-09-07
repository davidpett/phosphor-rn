import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBluetoothSlashThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m211 213.31-160-176a4 4 0 0 0-6 5.38l74 81.42h-.14a5.17 5.17 0 0 0-.51.18l-.15.06h-.05a4 4 0 0 0-.56.35h-.05l-64 48a4 4 0 0 0 4.8 6.4L116 136v88a4 4 0 0 0 2.21 3.58 4.05 4.05 0 0 0 1.79.42 4 4 0 0 0 2.4-.8l53.74-40.3L205 218.69a4 4 0 1 0 5.92-5.38ZM124 216v-80l18.44 13.83L170.73 181Zm-8-144.37V32a4 4 0 0 1 6.4-3.2l64 48a4 4 0 0 1 0 6.4l-33.53 25.15a4 4 0 0 1-2.4.8 4 4 0 0 1-2.4-7.2l29.26-22L124 40v31.63a4 4 0 0 1-8 0Z" />
  </Svg>
);
const Memo = memo(SvgBluetoothSlashThin);
export default Memo;
