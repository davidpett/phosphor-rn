import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWarehouseLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 186h-10V56.28l11.26-2.41a6 6 0 1 0-2.52-11.74l-224 48a6 6 0 0 0 2.52 11.74L26 100v86H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12ZM38 97.42l180-38.57V186h-28v-58a6 6 0 0 0-6-6H72a6 6 0 0 0-6 6v58H38ZM178 154H78v-20h100ZM78 166h100v20H78Z" />
  </Svg>
);
const Memo = memo(SvgWarehouseLight);
export default Memo;
