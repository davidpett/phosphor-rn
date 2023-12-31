import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitBranchBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 64a36 36 0 1 0-48 33.94V104a12 12 0 0 1-12 12H96a35.88 35.88 0 0 0-12 2.06V97.94a36 36 0 1 0-24 0v60.12a36 36 0 1 0 24 0V152a12 12 0 0 1 12-12h72a36 36 0 0 0 36-36v-6.06A36.07 36.07 0 0 0 228 64ZM72 52a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm0 152a12 12 0 1 1 12-12 12 12 0 0 1-12 12ZM192 76a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgGitBranchBold);
export default Memo;
