import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBasketballLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26ZM60 69.09A89.23 89.23 0 0 1 81.78 122H38.2A89.65 89.65 0 0 1 60 69.09ZM38.2 134h43.58A89.23 89.23 0 0 1 60 186.91 89.65 89.65 0 0 1 38.2 134Zm83.8 83.8a89.66 89.66 0 0 1-53.5-22.34A101.18 101.18 0 0 0 93.82 134H122Zm0-95.8H93.82A101.18 101.18 0 0 0 68.5 60.54 89.66 89.66 0 0 1 122 38.2Zm95.8 0h-43.58A89.23 89.23 0 0 1 196 69.09 89.65 89.65 0 0 1 217.8 122ZM134 38.2a89.66 89.66 0 0 1 53.5 22.34A101.18 101.18 0 0 0 162.18 122H134Zm0 179.6V134h28.18a101.18 101.18 0 0 0 25.32 61.46A89.66 89.66 0 0 1 134 217.8Zm62-30.89A89.23 89.23 0 0 1 174.22 134h43.58a89.65 89.65 0 0 1-21.8 52.91Z" />
  </Svg>
);
const Memo = memo(SvgBasketballLight);
export default Memo;
