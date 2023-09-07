import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListPlusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6Zm6 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12Zm104 52H40a6 6 0 0 0 0 12h104a6 6 0 0 0 0-12Zm88 0h-18v-18a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v18a6 6 0 0 0 12 0v-18h18a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgListPlusLight);
export default Memo;
