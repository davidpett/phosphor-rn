import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDownloadSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m168 112-40 40-40-40Z" opacity={0.2} />
    <Path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0ZM82.34 117.66A8 8 0 0 1 88 104h32V40a8 8 0 0 1 16 0v64h32a8 8 0 0 1 5.66 13.66l-40 40a8 8 0 0 1-11.32 0Zm25 2.34L128 140.69 148.69 120Z" />
  </Svg>
);
const Memo = memo(SvgDownloadSimpleDuotone);
export default Memo;
