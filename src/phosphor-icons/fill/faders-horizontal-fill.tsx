import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFadersHorizontalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M32 80a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8Zm184 88h-24v-16a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-16h24a8 8 0 0 0 0-16Zm-80 0H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16Zm-32-56h16a8 8 0 0 0 8-8V88h88a8 8 0 0 0 0-16h-88V56a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8Z" />
  </Svg>
);
const Memo = memo(SvgFadersHorizontalFill);
export default Memo;
