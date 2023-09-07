import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBluetoothXLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M187.6 171.2 130 128l25.6-19.2a6 6 0 1 0-7.2-9.6L126 116V44l22.4 16.8a6 6 0 1 0 7.2-9.6l-32-24A6 6 0 0 0 114 32v84L59.6 75.2a6 6 0 0 0-7.2 9.6L110 128l-57.6 43.2a6 6 0 0 0 7.2 9.6L114 140v84a6 6 0 0 0 9.6 4.8l64-48a6 6 0 0 0 0-9.6ZM126 212v-72l48 36ZM236.24 99.76a6 6 0 1 1-8.48 8.48L208 88.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L199.51 80l-19.75-19.76a6 6 0 0 1 8.48-8.48L208 71.51l19.76-19.75a6 6 0 0 1 8.48 8.48L216.49 80Z" />
  </Svg>
);
const Memo = memo(SvgBluetoothXLight);
export default Memo;
