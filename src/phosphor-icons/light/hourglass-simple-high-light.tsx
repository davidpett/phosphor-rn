import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHourglassSimpleHighLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m209.8 198-73.12-70 73.12-70 .09-.09A14 14 0 0 0 200 34H56a14 14 0 0 0-9.9 23.9l.09.09 73.12 70L46.2 198l-.09.09A14 14 0 0 0 56 222h144a14 14 0 0 0 9.9-23.9ZM84.45 78h87.1L128 119.69ZM54.16 47.23A1.91 1.91 0 0 1 56 46h144a2 2 0 0 1 1.45 3.38L184.08 66H71.92L54.56 49.38a1.91 1.91 0 0 1-.4-2.15Zm147.68 161.54A1.91 1.91 0 0 1 200 210H56a2 2 0 0 1-1.45-3.38L128 136.31l73.44 70.31a1.91 1.91 0 0 1 .4 2.15Z" />
  </Svg>
);
const Memo = memo(SvgHourglassSimpleHighLight);
export default Memo;
