import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrafficSignalLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 58a30 30 0 1 0 30 30 30 30 0 0 0-30-30Zm0 48a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm0 32a30 30 0 1 0 30 30 30 30 0 0 0-30-30Zm0 48a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm88-40h-18V78h18a6 6 0 0 0 0-12h-18V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v26H40a6 6 0 0 0 0 12h18v68H40a6 6 0 0 0 0 12h18v58a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-58h18a6 6 0 0 0 0-12Zm-30 70a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2Z" />
  </Svg>
);
const Memo = memo(SvgTrafficSignalLight);
export default Memo;
