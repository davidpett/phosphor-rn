import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsInLineVerticalBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12ZM119.51 96.49a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17L140 59V16a12 12 0 0 0-24 0v43l-11.51-11.49a12 12 0 0 0-17 17Zm17 63a12 12 0 0 0-17 0l-32 32a12 12 0 0 0 17 17L116 197v43a12 12 0 0 0 24 0v-43l11.51 11.52a12 12 0 0 0 17-17Z" />
  </Svg>
);
const Memo = memo(SvgArrowsInLineVerticalBold);
export default Memo;
