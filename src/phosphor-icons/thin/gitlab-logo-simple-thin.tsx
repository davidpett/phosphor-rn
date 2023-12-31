import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitlabLogoSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M226.27 118.11 206.38 42a7.94 7.94 0 0 0-15.16-.75L172.57 92H83.43L64.78 41.24a7.94 7.94 0 0 0-15.16.76l-19.89 76.11a53.16 53.16 0 0 0 20.44 56.68l73.27 51.76a7.9 7.9 0 0 0 9.12 0l73.27-51.76a53.16 53.16 0 0 0 20.44-56.68Zm-25.05 50.14L128 220l-73.22-51.75a45.11 45.11 0 0 1-17.31-48.11l19.84-76 19.58 53.24a4 4 0 0 0 3.75 2.62h94.72a4 4 0 0 0 3.75-2.62l19.57-53.22 19.85 76a45.11 45.11 0 0 1-17.31 48.09Z" />
  </Svg>
);
const Memo = memo(SvgGitlabLogoSimpleThin);
export default Memo;
