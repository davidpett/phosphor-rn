import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilLineLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M225.91 74.79 181.22 30.1a14 14 0 0 0-19.8 0L38.1 153.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h168a6 6 0 0 0 0-12H110.49L225.91 94.59a14 14 0 0 0 0-19.8ZM76.49 188 164 100.48 183.52 120 96 207.51ZM68 179.52 48.49 160 136 72.49 155.52 92ZM46 208v-33.52L81.52 210H48a2 2 0 0 1-2-2ZM217.42 86.1 192 111.52 144.49 64l25.41-25.41a2 2 0 0 1 2.83 0l44.69 44.68a2 2 0 0 1 0 2.83Z" />
  </Svg>
);
const Memo = memo(SvgPencilLineLight);
export default Memo;
