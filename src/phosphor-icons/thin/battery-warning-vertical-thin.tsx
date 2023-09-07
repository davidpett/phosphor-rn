import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBatteryWarningVerticalThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M124 136V96a4 4 0 0 1 8 0v40a4 4 0 0 1-8 0Zm4 28a8 8 0 1 0 8 8 8 8 0 0 0-8-8ZM96 12h64a4 4 0 0 0 0-8H96a4 4 0 0 0 0 8Zm100 44v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20Zm-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Z" />
  </Svg>
);
const Memo = memo(SvgBatteryWarningVerticalThin);
export default Memo;
