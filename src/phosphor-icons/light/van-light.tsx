import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVanLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M252.55 116.09 207 63a14 14 0 0 0-10.74-5H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h53.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-64a6 6 0 0 0-1.45-3.91Zm-54.7-45.32L234.94 114H174V70h22.26a2 2 0 0 1 1.59.77ZM102 114V70h60v44ZM32 70h58v44H30V72a2 2 0 0 1 2-2Zm48 140a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm112 0a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm48-24h-18.6a30 30 0 0 0-58.8 0h-53.2a30 30 0 0 0-58.8 0H32a2 2 0 0 1-2-2v-58h212v58a2 2 0 0 1-2 2Z" />
  </Svg>
);
const Memo = memo(SvgVanLight);
export default Memo;
