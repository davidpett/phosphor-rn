import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgXCircleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M162.83 98.83 133.66 128l29.17 29.17a4 4 0 0 1-5.66 5.66L128 133.66l-29.17 29.17a4 4 0 0 1-5.66-5.66L122.34 128 93.17 98.83a4 4 0 0 1 5.66-5.66L128 122.34l29.17-29.17a4 4 0 1 1 5.66 5.66ZM228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100Zm-8 0a92 92 0 1 0-92 92 92.1 92.1 0 0 0 92-92Z" />
  </Svg>
);
const Memo = memo(SvgXCircleThin);
export default Memo;
