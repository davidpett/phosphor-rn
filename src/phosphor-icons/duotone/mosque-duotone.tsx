import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMosqueDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 128H48c0-64 80-72 80-104 0 32 80 40 80 104Z" opacity={0.2} />
    <Path d="M224 128a23.84 23.84 0 0 0-8 1.38V128c0-41.78-31.07-62.46-53.76-77.56C148.16 41.06 136 33 136 24a8 8 0 0 0-16 0c0 9-12.16 17.06-26.24 26.44C71.07 65.54 40 86.22 40 128v1.38A24 24 0 0 0 8 152v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-32a8 8 0 0 1 16 0v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 1 16 0v32a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56a24 24 0 0 0-24-24ZM40 200H24v-48a8 8 0 0 1 16 0Zm62.63-136.24c9.67-6.44 19-12.68 25.37-20 6.34 7.35 15.7 13.59 25.37 20 20 13.32 42.48 28.29 46.11 56.24h-143c3.67-27.95 26.12-42.92 46.15-56.24ZM200 200h-16v-24a24 24 0 0 0-48 0v24h-16v-24a24 24 0 0 0-48 0v24H56v-64h144Zm32 0h-16v-48a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgMosqueDuotone);
export default Memo;
