import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCardsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 76H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12Zm4 124a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Zm40-144v120a4 4 0 0 1-8 0V56a4 4 0 0 0-4-4H64a4 4 0 0 1 0-8h152a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgCardsThin);
export default Memo;
