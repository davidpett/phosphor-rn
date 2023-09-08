import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMagicWand = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M48 64a8 8 0 0 1 8-8h16V40a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16H88v16a8 8 0 0 1-16 0V72H56a8 8 0 0 1-8-8Zm136 128h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16Zm56-48h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16Zm-20.69-64L80 219.31a16 16 0 0 1-22.62 0l-20.7-20.68a16 16 0 0 1 0-22.63L176 36.69a16 16 0 0 1 22.63 0l20.68 20.68a16 16 0 0 1 0 22.63Zm-54.63 32L144 91.31l-96 96L68.68 208ZM208 68.69 187.31 48l-32 32L176 100.69Z" />
  </Svg>
);
const Memo = memo(SvgMagicWand);
export default Memo;
