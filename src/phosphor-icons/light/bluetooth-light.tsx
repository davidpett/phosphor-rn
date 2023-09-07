import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBluetoothLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M187.6 171.2 130 128l57.6-43.2a6 6 0 0 0 0-9.6l-64-48A6 6 0 0 0 114 32v84L59.6 75.2a6 6 0 0 0-7.2 9.6L110 128l-57.6 43.2a6 6 0 1 0 7.2 9.6L114 140v84a6 6 0 0 0 9.6 4.8l64-48a6 6 0 0 0 0-9.6ZM126 44l48 36-48 36Zm0 168v-72l48 36Z" />
  </Svg>
);
const Memo = memo(SvgBluetoothLight);
export default Memo;
