import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDeviceTabletThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20ZM52 68h152v120H52Zm12-32h128a12 12 0 0 1 12 12v12H52V48a12 12 0 0 1 12-12Zm128 184H64a12 12 0 0 1-12-12v-12h152v12a12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgDeviceTabletThin);
export default Memo;
