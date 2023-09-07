import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleDoubleLeftThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M198.71 57.29A100 100 0 1 0 57.29 198.71 100 100 0 1 0 198.71 57.29Zm-5.66 135.76A92 92 0 1 1 220 128a91.37 91.37 0 0 1-26.95 65.05Zm-22.22-94.22L141.66 128l29.17 29.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 1 1 5.66 5.66Zm-56 0L85.66 128l29.17 29.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleDoubleLeftThin);
export default Memo;
