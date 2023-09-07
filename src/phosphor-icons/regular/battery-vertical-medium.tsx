import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBatteryVerticalMedium = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 32H80a24 24 0 0 0-24 24v168a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24Zm8 192a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Zm-16-24a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8ZM88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8Zm80 152a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgBatteryVerticalMedium);
export default Memo;
