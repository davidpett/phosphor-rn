import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowCircleUpRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm38-122v48a6 6 0 0 1-12 0v-33.51l-53.76 53.75a6 6 0 0 1-8.48-8.48L145.51 102H112a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgArrowCircleUpRightLight);
export default Memo;
