import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSyringeDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m196 116-89.66 89.66a8 8 0 0 1-5.65 2.34H48v-52.69a8 8 0 0 1 2.34-5.65L140 60Z"
      opacity={0.2}
    />
    <Path d="m237.66 66.34-48-48a8 8 0 0 0-11.32 11.32L196.69 48 168 76.69l-34.34-34.35a8 8 0 0 0-11.32 11.32l6.35 6.34-84 84A15.86 15.86 0 0 0 40 155.31v49.38l-21.66 21.65a8 8 0 0 0 11.32 11.32L51.31 216h49.38a15.86 15.86 0 0 0 11.31-4.69l84-84 6.34 6.35a8 8 0 0 0 11.32-11.32L179.31 88 208 59.31l18.34 18.35a8 8 0 0 0 11.32-11.32ZM100.69 200H56v-44.69l18-18 20.34 20.35a8 8 0 0 0 11.32-11.32L85.31 126 98 113.31l20.34 20.35a8 8 0 0 0 11.32-11.32L109.31 102 140 71.31 184.69 116Z" />
  </Svg>
);
const Memo = memo(SvgSyringeDuotone);
export default Memo;
