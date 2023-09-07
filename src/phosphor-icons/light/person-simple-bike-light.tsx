import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonSimpleBikeLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 78a26 26 0 1 0-26-26 26 26 0 0 0 26 26Zm0-40a14 14 0 1 1-14 14 14 14 0 0 1 14-14Zm36 100a38 38 0 1 0 38 38 38 38 0 0 0-38-38Zm0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26ZM56 138a38 38 0 1 0 38 38 38 38 0 0 0-38-38Zm0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26Zm136-84h-40a6 6 0 0 1-4.24-1.76L120 88.49 96.49 112l35.75 35.76A6 6 0 0 1 134 152v48a6 6 0 0 1-12 0v-45.51l-38.24-38.25a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 0L154.49 106H192a6 6 0 0 1 0 12Z" />
  </Svg>
);
const Memo = memo(SvgPersonSimpleBikeLight);
export default Memo;
