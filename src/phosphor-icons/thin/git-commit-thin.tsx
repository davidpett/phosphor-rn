import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitCommitThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 124h-68.17a52 52 0 0 0-103.66 0H8a4 4 0 0 0 0 8h68.17a52 52 0 0 0 103.66 0H248a4 4 0 0 0 0-8Zm-120 48a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44Z" />
  </Svg>
);
const Memo = memo(SvgGitCommitThin);
export default Memo;
