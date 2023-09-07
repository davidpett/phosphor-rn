import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188.24 123.76a6 6 0 0 1 0 8.48l-72 72a6 6 0 0 1-8.48-8.48L169.51 134H32a6 6 0 0 1 0-12h137.51l-61.75-61.76a6 6 0 0 1 8.48-8.48ZM216 34a6 6 0 0 0-6 6v176a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineRightLight);
export default Memo;
