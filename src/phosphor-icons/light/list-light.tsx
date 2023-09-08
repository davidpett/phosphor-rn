import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6ZM40 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12Zm176 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgListLight);
export default Memo;
