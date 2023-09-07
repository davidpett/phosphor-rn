import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitCommitLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 122h-66.34a54 54 0 0 0-107.32 0H8a6 6 0 0 0 0 12h66.34a54 54 0 0 0 107.32 0H248a6 6 0 0 0 0-12Zm-120 48a42 42 0 1 1 42-42 42 42 0 0 1-42 42Z" />
  </Svg>
);
const Memo = memo(SvgGitCommitLight);
export default Memo;
