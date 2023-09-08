import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMedalMilitaryThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M207 36H49a13 13 0 0 0-13 13v49.21A13 13 0 0 0 43.62 110l70.72 32.14a44 44 0 1 0 27.32 0L212.38 110A13 13 0 0 0 220 98.21V49a13 13 0 0 0-13-13Zm-43 8v79.24l-36 16.37-36-16.37V44ZM44 98.21V49a5 5 0 0 1 5-5h35v75.61l-37.07-16.85A5 5 0 0 1 44 98.21ZM164 184a36 36 0 1 1-36-36 36 36 0 0 1 36 36Zm48-85.79a5 5 0 0 1-2.93 4.55L172 119.61V44h35a5 5 0 0 1 5 5Z" />
  </Svg>
);
const Memo = memo(SvgMedalMilitaryThin);
export default Memo;
