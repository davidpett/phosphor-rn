import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleLeftBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm24.49-115.51L121 128l31.52 31.51a12 12 0 0 1-17 17l-40-40a12 12 0 0 1 0-17l40-40a12 12 0 0 1 17 17Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleLeftBold);
export default Memo;
