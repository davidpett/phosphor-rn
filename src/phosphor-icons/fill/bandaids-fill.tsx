import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBandaidsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Circle cx={128} cy={128} r={12} />
    <Path d="m184.57 128 27.71-27.72a40 40 0 1 0-56.56-56.56L128 71.43l-27.72-27.71a40 40 0 1 0-56.56 56.56L71.43 128l-27.71 27.72a40 40 0 1 0 56.56 56.56L128 184.57l27.72 27.71a40 40 0 1 0 56.56-56.56ZM128 94.06 161.94 128 128 161.94 94.06 128Zm39-39A24 24 0 1 1 201 89l-27.72 27.72-33.97-33.97ZM89 201a24 24 0 1 1-34-34l27.72-27.72 33.94 33.94Z" />
  </Svg>
);
const Memo = memo(SvgBandaidsFill);
export default Memo;
