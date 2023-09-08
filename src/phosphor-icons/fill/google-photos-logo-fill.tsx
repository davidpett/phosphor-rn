import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGooglePhotosLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 120h-39.51A72 72 0 0 0 128 16a8 8 0 0 0-8 8v39.51A72 72 0 0 0 16 128a8 8 0 0 0 8 8h39.51A72 72 0 0 0 128 240a8 8 0 0 0 8-8v-39.51A72 72 0 0 0 240 128a8 8 0 0 0-8-8ZM88 72a55.31 55.31 0 0 1 32 10v38H32.57A56.09 56.09 0 0 1 88 72Zm80 112a55.31 55.31 0 0 1-32-10v-38h87.43A56.09 56.09 0 0 1 168 184Z" />
  </Svg>
);
const Memo = memo(SvgGooglePhotosLogoFill);
export default Memo;
