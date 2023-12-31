import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrophoneBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 172a52.06 52.06 0 0 0 52-52V64a52 52 0 0 0-104 0v56a52.06 52.06 0 0 0 52 52ZM100 64a28 28 0 0 1 56 0v56a28 28 0 0 1-56 0Zm40 147.22V232a12 12 0 0 1-24 0v-20.78A92.14 92.14 0 0 1 36 120a12 12 0 0 1 24 0 68 68 0 0 0 136 0 12 12 0 0 1 24 0 92.14 92.14 0 0 1-80 91.22Z" />
  </Svg>
);
const Memo = memo(SvgMicrophoneBold);
export default Memo;
