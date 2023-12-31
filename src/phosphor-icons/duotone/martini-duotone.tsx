import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMartiniDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m200 72-72 72-72-72Z" opacity={0.2} />
    <Path d="M237.66 45.66A8 8 0 0 0 232 32H24a8 8 0 0 0-5.66 13.66L120 147.31V208H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-60.69ZM75.31 80h105.38L128 132.69Zm137.38-32-16 16H59.31l-16-16Z" />
  </Svg>
);
const Memo = memo(SvgMartiniDuotone);
export default Memo;
