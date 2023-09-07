import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowCircleDownRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm38-106v48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h33.51l-53.75-53.76a6 6 0 0 1 8.48-8.48L154 145.51V112a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowCircleDownRightLight);
export default Memo;
