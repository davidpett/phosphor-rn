import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowCircleLeftBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm52-84a12 12 0 0 1-12 12h-51l11.52 11.51a12 12 0 0 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 17L117 116h51a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgArrowCircleLeftBold);
export default Memo;
