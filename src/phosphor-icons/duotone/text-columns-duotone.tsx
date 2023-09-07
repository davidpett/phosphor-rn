import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextColumnsDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 64v120H40V64Z" opacity={0.2} />
    <Path d="M120 64a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h72a8 8 0 0 1 8 8Zm-8 32H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16Zm0 40H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16Zm0 40H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16Zm32-104h72a8 8 0 0 0 0-16h-72a8 8 0 0 0 0 16Zm72 24h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16Zm0 40h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16Zm0 40h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgTextColumnsDuotone);
export default Memo;
