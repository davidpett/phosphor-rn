import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUsbLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m251.33 123-48-32a6 6 0 0 0-9.33 5v26H70V72a2 2 0 0 1 2-2h34.6a30 30 0 1 0 0-12H72a14 14 0 0 0-14 14v50H8a6 6 0 0 0 0 12h50v50a14 14 0 0 0 14 14h34v10a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v10H72a2 2 0 0 1-2-2v-50h124v26a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10ZM136 46a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm-18 130a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2Zm88-27.21v-41.58L237.18 128Z" />
  </Svg>
);
const Memo = memo(SvgUsbLight);
export default Memo;
