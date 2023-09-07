import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBatteryWarningVerticalBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M116 136v-36a12 12 0 0 1 24 0v36a12 12 0 0 1-24 0Zm12 24a16 16 0 1 0 16 16 16 16 0 0 0-16-16ZM104 24h48a12 12 0 0 0 0-24h-48a12 12 0 0 0 0 24Zm100 36v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28Zm-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Z" />
  </Svg>
);
const Memo = memo(SvgBatteryWarningVerticalBold);
export default Memo;
