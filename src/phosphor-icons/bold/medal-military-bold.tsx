import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMedalMilitaryBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M207 28H49a21 21 0 0 0-21 21v49.21a21 21 0 0 0 12.31 19.11l56 25.47a52 52 0 1 0 63.32 0l56-25.47A21 21 0 0 0 228 98.21V49a21 21 0 0 0-21-21Zm-79 102.82-28-12.73V52h56v66.09ZM52 52h24v55.18L52 96.27Zm76 160a28 28 0 1 1 28-28 28 28 0 0 1-28 28Zm76-115.73-24 10.91V52h24Z" />
  </Svg>
);
const Memo = memo(SvgMedalMilitaryBold);
export default Memo;
