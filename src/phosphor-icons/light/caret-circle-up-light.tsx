import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleUpLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm44.24-78.24a6 6 0 1 1-8.48 8.48L128 112.49l-35.76 35.75a6 6 0 0 1-8.48-8.48l40-40a6 6 0 0 1 8.48 0Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleUpLight);
export default Memo;
