import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitPullRequestLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M102 64a30 30 0 1 0-36 29.4v69.2a30 30 0 1 0 12 0V93.4A30.05 30.05 0 0 0 102 64Zm-48 0a18 18 0 1 1 18 18 18 18 0 0 1-18-18Zm36 128a18 18 0 1 1-18-18 18 18 0 0 1 18 18Zm116-29.4v-38.72a53.65 53.65 0 0 0-15.82-38.18L158.48 54H192a6 6 0 0 0 0-12h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0V62.48l31.7 31.7a41.75 41.75 0 0 1 12.3 29.7v38.72a30 30 0 1 0 12 0Zm-6 47.4a18 18 0 1 1 18-18 18 18 0 0 1-18 18Z" />
  </Svg>
);
const Memo = memo(SvgGitPullRequestLight);
export default Memo;
