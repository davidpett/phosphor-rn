import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFacebookLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm4 191.91V148h28a4 4 0 0 0 0-8h-28v-28a20 20 0 0 1 20-20h16a4 4 0 0 0 0-8h-16a28 28 0 0 0-28 28v28H96a4 4 0 0 0 0 8h28v71.91a92 92 0 1 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgFacebookLogoThin);
export default Memo;
