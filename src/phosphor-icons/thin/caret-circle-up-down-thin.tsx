import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleUpDownThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm34.83-118.83a4 4 0 0 1-5.66 5.66L128 77.66l-29.17 29.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Zm0 48a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L128 178.34l29.17-29.17a4 4 0 0 1 5.66 0Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleUpDownThin);
export default Memo;
