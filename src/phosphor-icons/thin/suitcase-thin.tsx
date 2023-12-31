import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSuitcaseThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 60h-44V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12ZM84 204H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h44Zm80 0H92V68h72Zm0-144H92V48a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12Zm56 140a4 4 0 0 1-4 4h-44V68h44a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgSuitcaseThin);
export default Memo;
