import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitMergeLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 114a30.05 30.05 0 0 0-29.4 24H152a42.2 42.2 0 0 1-33.6-16.8L90.56 84.08A30 30 0 1 0 74 85.4v85.2a30 30 0 1 0 12 0V98l22.8 30.4A54.26 54.26 0 0 0 152 150h26.6a30 30 0 1 0 29.4-36ZM62 56a18 18 0 1 1 18 18 18 18 0 0 1-18-18Zm36 144a18 18 0 1 1-18-18 18 18 0 0 1 18 18Zm110-38a18 18 0 1 1 18-18 18 18 0 0 1-18 18Z" />
  </Svg>
);
const Memo = memo(SvgGitMergeLight);
export default Memo;
