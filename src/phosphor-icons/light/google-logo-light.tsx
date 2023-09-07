import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGoogleLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 128a94 94 0 1 1-21.49-59.82 6 6 0 1 1-9.25 7.64A82 82 0 1 0 209.78 134H128a6 6 0 0 1 0-12h88a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgGoogleLogoLight);
export default Memo;
