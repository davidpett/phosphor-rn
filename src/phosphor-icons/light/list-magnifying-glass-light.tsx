import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListMagnifyingGlassLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6Zm6 70h72a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12Zm88 52H40a6 6 0 0 0 0 12h88a6 6 0 0 0 0-12Zm108.24 10.24a6 6 0 0 1-8.48 0l-21.49-21.48a38.06 38.06 0 1 1 8.49-8.49l21.48 21.49a6 6 0 0 1 0 8.48ZM184 170a26 26 0 1 0-26-26 26 26 0 0 0 26 26Z" />
  </Svg>
);
const Memo = memo(SvgListMagnifyingGlassLight);
export default Memo;
