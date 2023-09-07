import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m225.9 74.78-44.69-44.69a14 14 0 0 0-19.8 0L38.1 153.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h44.69a13.94 13.94 0 0 0 9.9-4.1L225.9 94.58a14 14 0 0 0 0-19.8ZM48.49 160 136 72.48 155.51 92 68 179.51ZM46 208v-33.52L81.51 210H48a2 2 0 0 1-2-2Zm50-.49L76.49 188 164 100.48 183.51 120ZM217.41 86.1 192 111.51 144.49 64l25.41-25.42a2 2 0 0 1 2.83 0l44.68 44.69a2 2 0 0 1 0 2.83Z" />
  </Svg>
);
const Memo = memo(SvgPencilLight);
export default Memo;
