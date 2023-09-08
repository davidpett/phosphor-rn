import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyNervousThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M178.83 165.17a4 4 0 0 1-5.66 5.66L160 157.66l-13.17 13.17a4 4 0 0 1-5.66 0L128 157.66l-13.17 13.17a4 4 0 0 1-5.66 0L96 157.66l-13.17 13.17a4 4 0 0 1-5.66-5.66l16-16a4 4 0 0 1 5.66 0L112 162.34l13.17-13.17a4 4 0 0 1 5.66 0L144 162.34l13.17-13.17a4 4 0 0 1 5.66 0ZM228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100Zm-8 0a92 92 0 1 0-92 92 92.1 92.1 0 0 0 92-92ZM92 116a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm72 0a8 8 0 1 0-8-8 8 8 0 0 0 8 8Z" />
  </Svg>
);
const Memo = memo(SvgSmileyNervousThin);
export default Memo;
