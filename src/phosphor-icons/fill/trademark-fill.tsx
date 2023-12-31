import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrademarkFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm-24 88h-8v40a8 8 0 0 1-16 0v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16Zm88 40a8 8 0 0 1-16 0v-26.71l-14 16a8 8 0 0 1-12 0l-14-16V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 14-5.27l22 25.12 22-25.12a8 8 0 0 1 14 5.27Z" />
  </Svg>
);
const Memo = memo(SvgTrademarkFill);
export default Memo;
