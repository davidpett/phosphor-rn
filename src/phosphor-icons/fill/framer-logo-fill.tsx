import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFramerLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 104h-51l56.27 50a8 8 0 0 1-5.27 14h-64v64a8 8 0 0 1-13.66 5.66l-72-72A8 8 0 0 1 48 160V96a8 8 0 0 1 8-8h51L50.69 38A8 8 0 0 1 56 24h144a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8Z" />
  </Svg>
);
const Memo = memo(SvgFramerLogoFill);
export default Memo;
