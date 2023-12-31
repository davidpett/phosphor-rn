import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineUpLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M204.24 139.76a6 6 0 1 1-8.48 8.48L134 86.49V224a6 6 0 0 1-12 0V86.49l-61.76 61.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0ZM216 34H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineUpLight);
export default Memo;
