import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitBranchLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 64a30 30 0 1 0-36 29.4V104a18 18 0 0 1-18 18H96a29.82 29.82 0 0 0-18 6V93.4a30 30 0 1 0-12 0v69.2a30 30 0 1 0 12 0V152a18 18 0 0 1 18-18h72a30 30 0 0 0 30-30V93.4A30.05 30.05 0 0 0 222 64ZM54 64a18 18 0 1 1 18 18 18 18 0 0 1-18-18Zm36 128a18 18 0 1 1-18-18 18 18 0 0 1 18 18ZM192 82a18 18 0 1 1 18-18 18 18 0 0 1-18 18Z" />
  </Svg>
);
const Memo = memo(SvgGitBranchLight);
export default Memo;
