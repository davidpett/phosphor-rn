import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGoogleLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 128a92 92 0 1 1-21-58.55 4 4 0 0 1-6.17 5.1A84 84 0 1 0 211.91 132H128a4 4 0 0 1 0-8h88a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgGoogleLogoThin);
export default Memo;
