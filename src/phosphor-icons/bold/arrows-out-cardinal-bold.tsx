import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsOutCardinalBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M87.51 64.49a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L140 53v43a12 12 0 0 1-24 0V53l-11.51 11.49a12 12 0 0 1-16.98 0Zm64 127L140 203v-43a12 12 0 0 0-24 0v43l-11.51-11.52a12 12 0 0 0-17 17l32 32a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Zm89-72-32-32a12 12 0 0 0-17 17L203 116h-43a12 12 0 0 0 0 24h43l-11.52 11.51a12 12 0 0 0 17 17l32-32a12 12 0 0 0 .01-17ZM53 140h43a12 12 0 0 0 0-24H53l11.52-11.51a12 12 0 1 0-17-17l-32 32a12 12 0 0 0 0 17l32 32a12 12 0 1 0 17-17Z" />
  </Svg>
);
const Memo = memo(SvgArrowsOutCardinalBold);
export default Memo;
