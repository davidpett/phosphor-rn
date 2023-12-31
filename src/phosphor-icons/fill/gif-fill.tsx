import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGifFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM112 144a32 32 0 0 1-64 0v-32a32 32 0 0 1 55.85-21.33 8 8 0 1 1-11.92 10.66A16 16 0 0 0 64 112v32a16 16 0 0 0 32 0v-8h-8a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Zm32 24a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm56-72h-24v24h16a8 8 0 0 1 0 16h-16v32a8 8 0 0 1-16 0V88a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgGifFill);
export default Memo;
