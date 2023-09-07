import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextTLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M206 56v32a6 6 0 0 1-12 0V62h-60v132h26a6 6 0 0 1 0 12H96a6 6 0 0 1 0-12h26V62H62v26a6 6 0 0 1-12 0V56a6 6 0 0 1 6-6h144a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgTextTLight);
export default Memo;
