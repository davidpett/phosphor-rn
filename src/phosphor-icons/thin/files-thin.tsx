import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFilesThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m210.83 69.17-40-40A4 4 0 0 0 168 28H88a12 12 0 0 0-12 12v20H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V72a4 4 0 0 0-1.17-2.83ZM172 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h78.34L172 105.66Zm32-32a4 4 0 0 1-4 4h-20v-84a4 4 0 0 0-1.17-2.83l-40-40A4 4 0 0 0 136 60H84V40a4 4 0 0 1 4-4h78.34L204 73.66Zm-64-32a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4Zm0 32a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgFilesThin);
export default Memo;
