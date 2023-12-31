import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineUpRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12ZM80 180a12 12 0 0 0 8.49-3.51L180 85v67a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12H96a12 12 0 0 0 0 24h67l-91.49 91.51A12 12 0 0 0 80 180Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineUpRightBold);
export default Memo;
