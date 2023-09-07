import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDeviceTabletFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24ZM64 40h128a8 8 0 0 1 8 8v8H56v-8a8 8 0 0 1 8-8Zm128 176H64a8 8 0 0 1-8-8v-8h144v8a8 8 0 0 1-8 8Z" />
  </Svg>
);
const Memo = memo(SvgDeviceTabletFill);
export default Memo;
