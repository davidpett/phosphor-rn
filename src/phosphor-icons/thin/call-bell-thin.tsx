import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCallBellThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M24 180h208a4 4 0 0 0 0-8h-12v-20a92.11 92.11 0 0 0-88-91.91V36h20a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8h20v24.09A92.11 92.11 0 0 0 36 152v20H24a4 4 0 0 0 0 8Zm20-28a84 84 0 0 1 168 0v20H44Zm192 56a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h208a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgCallBellThin);
export default Memo;
