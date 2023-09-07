import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleTwoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm28.75-86.33L128 164h24a12 12 0 0 1 0 24h-48a12 12 0 0 1-9.6-19.2l43.17-57.56A12 12 0 1 0 116.68 100a12 12 0 0 1-22.63-8 36.3 36.3 0 0 1 5.2-9.67 36 36 0 0 1 57.5 43.34Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleTwoBold);
export default Memo;
