import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEjectLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 162H48a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14Zm2 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM48.24 142h159.52a14.19 14.19 0 0 0 13.1-8.55 13.61 13.61 0 0 0-2.72-14.95L144.41 41a22.76 22.76 0 0 0-32.82 0l-73.73 77.5a13.61 13.61 0 0 0-2.72 14.95 14.19 14.19 0 0 0 13.1 8.55Zm-1.69-15.23 73.73-77.51a10.77 10.77 0 0 1 15.44 0l73.73 77.51a1.67 1.67 0 0 1 .38 2 2.11 2.11 0 0 1-2.07 1.27H48.24a2.11 2.11 0 0 1-2.07-1.27 1.67 1.67 0 0 1 .38-2Z" />
  </Svg>
);
const Memo = memo(SvgEjectLight);
export default Memo;
