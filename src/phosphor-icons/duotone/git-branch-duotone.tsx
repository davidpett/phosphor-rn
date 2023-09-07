import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitBranchDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 64a24 24 0 1 1-24-24 24 24 0 0 1 24 24Z" opacity={0.2} />
    <Path d="M224 64a32 32 0 1 0-40 31v9a16 16 0 0 1-16 16H96a31.71 31.71 0 0 0-16 4.31V95a32 32 0 1 0-16 0v66a32 32 0 1 0 16 0v-9a16 16 0 0 1 16-16h72a32 32 0 0 0 32-32v-9a32.06 32.06 0 0 0 24-31ZM56 64a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm32 128a16 16 0 1 1-16-16 16 16 0 0 1 16 16ZM192 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16Z" />
  </Svg>
);
const Memo = memo(SvgGitBranchDuotone);
export default Memo;
