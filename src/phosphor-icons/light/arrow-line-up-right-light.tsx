import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineUpRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6ZM80 174a6 6 0 0 0 4.24-1.76L186 70.49V152a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6H96a6 6 0 0 0 0 12h81.51L75.76 163.76A6 6 0 0 0 80 174Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineUpRightLight);
export default Memo;
