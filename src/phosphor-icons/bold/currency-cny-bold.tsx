import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyCnyBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M52 64a12 12 0 0 1 12-12h128a12 12 0 0 1 0 24H64a12 12 0 0 1-12-12Zm164 100a12 12 0 0 0-12 12v12h-28a12 12 0 0 1-12-12v-44h44a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24h44v4a52.06 52.06 0 0 1-52 52 12 12 0 0 0 0 24 76.08 76.08 0 0 0 76-76v-4h24v44a36 36 0 0 0 36 36h40a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyCnyBold);
export default Memo;
