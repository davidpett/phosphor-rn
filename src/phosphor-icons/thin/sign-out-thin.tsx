import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSignOutThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M108 216a4 4 0 0 1-4 4H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h56a4 4 0 0 1 0 8H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4h56a4 4 0 0 1 4 4Zm110.83-90.83-40-40a4 4 0 0 0-5.66 5.66L206.34 124H104a4 4 0 0 0 0 8h102.34l-33.17 33.17a4 4 0 0 0 5.66 5.66l40-40a4 4 0 0 0 0-5.66Z" />
  </Svg>
);
const Memo = memo(SvgSignOutThin);
export default Memo;
