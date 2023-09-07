import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgOctagonBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m230.14 77.41-51.55-51.55A19.85 19.85 0 0 0 164.45 20h-72.9a19.85 19.85 0 0 0-14.14 5.86L25.86 77.41A19.85 19.85 0 0 0 20 91.55v72.9a19.85 19.85 0 0 0 5.86 14.14l51.55 51.55A19.85 19.85 0 0 0 91.55 236h72.9a19.85 19.85 0 0 0 14.14-5.86l51.55-51.55a19.85 19.85 0 0 0 5.86-14.14v-72.9a19.85 19.85 0 0 0-5.86-14.14ZM212 162.79 162.79 212H93.21L44 162.79V93.21L93.21 44h69.58L212 93.21Z" />
  </Svg>
);
const Memo = memo(SvgOctagonBold);
export default Memo;
