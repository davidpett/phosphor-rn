import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWarehouseThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 188h-12V54.66l12.84-2.75a4 4 0 1 0-1.68-7.82l-224 48A4 4 0 0 0 16 100a4.07 4.07 0 0 0 .84-.09L28 97.52V188H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8ZM36 95.81l184-39.43V188h-32v-60a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v60H36ZM180 156H76v-24h104Zm-104 8h104v24H76Z" />
  </Svg>
);
const Memo = memo(SvgWarehouseThin);
export default Memo;
