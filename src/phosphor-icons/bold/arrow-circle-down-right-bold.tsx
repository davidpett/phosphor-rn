import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowCircleDownRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm44-100v48a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h19l-43.49-43.51a12 12 0 0 1 17-17L148 131v-19a12 12 0 0 1 24 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowCircleDownRightBold);
export default Memo;
