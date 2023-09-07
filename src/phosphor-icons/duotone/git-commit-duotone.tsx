import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitCommitDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 128a48 48 0 1 1-48-48 48 48 0 0 1 48 48Z" opacity={0.2} />
    <Path d="M248 120h-64.58a56 56 0 0 0-110.84 0H8a8 8 0 0 0 0 16h64.58a56 56 0 0 0 110.84 0H248a8 8 0 0 0 0-16Zm-120 48a40 40 0 1 1 40-40 40 40 0 0 1-40 40Z" />
  </Svg>
);
const Memo = memo(SvgGitCommitDuotone);
export default Memo;
