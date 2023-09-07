import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBrowsersLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 42H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14ZM40 86h144a2 2 0 0 1 2 2v18H38V88a2 2 0 0 1 2-2Zm146 114a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-82h148Zm32-32a2 2 0 0 1-2 2h-18V88a14 14 0 0 0-14-14H70V56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z" />
  </Svg>
);
const Memo = memo(SvgBrowsersLight);
export default Memo;
