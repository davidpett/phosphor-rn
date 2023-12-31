import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitPullRequestFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M104 64a32 32 0 1 0-40 31v66a32 32 0 1 0 16 0V95a32.06 32.06 0 0 0 24-31ZM88 192a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm144 0a32 32 0 1 1-40-31v-37.12a39.71 39.71 0 0 0-11.72-28.28L152 67.31V96a8 8 0 0 1-16 0V48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-28.69l28.29 28.28a55.67 55.67 0 0 1 16.4 39.6V161a32.06 32.06 0 0 1 24 31Z" />
  </Svg>
);
const Memo = memo(SvgGitPullRequestFill);
export default Memo;
