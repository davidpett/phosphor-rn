import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitPullRequestBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212 158.06v-34.18a59.61 59.61 0 0 0-17.57-42.42L173 60h19a12 12 0 0 0 0-24h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0V77l21.46 21.46A35.76 35.76 0 0 1 188 123.88v34.18a36 36 0 1 0 24 0ZM200 204a12 12 0 1 1 12-12 12 12 0 0 1-12 12ZM108 64a36 36 0 1 0-48 33.94v60.12a36 36 0 1 0 24 0V97.94A36.07 36.07 0 0 0 108 64ZM72 204a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-128a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgGitPullRequestBold);
export default Memo;
