import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitForkThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 64a28 28 0 1 0-32 27.71V104a20 20 0 0 1-20 20H88a20 20 0 0 1-20-20V91.71a28 28 0 1 0-8 0V104a28 28 0 0 0 28 28h36v32.29a28 28 0 1 0 8 0V132h36a28 28 0 0 0 28-28V91.71A28 28 0 0 0 220 64ZM44 64a20 20 0 1 1 20 20 20 20 0 0 1-20-20Zm104 128a20 20 0 1 1-20-20 20 20 0 0 1 20 20Zm44-108a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" />
  </Svg>
);
const Memo = memo(SvgGitForkThin);
export default Memo;
