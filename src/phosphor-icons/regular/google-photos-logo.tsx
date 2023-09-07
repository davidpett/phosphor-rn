import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGooglePhotosLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 120h-39.51A72 72 0 0 0 128 16a8 8 0 0 0-8 8v39.51A72 72 0 0 0 16 128a8 8 0 0 0 8 8h39.51A72 72 0 0 0 128 240a8 8 0 0 0 8-8v-39.51A72 72 0 0 0 240 128a8 8 0 0 0-8-8Zm-48-32a55.31 55.31 0 0 1-10 32h-38V32.57A56.09 56.09 0 0 1 184 88ZM88 72a55.31 55.31 0 0 1 32 10v38H32.57A56.09 56.09 0 0 1 88 72Zm-16 96a55.31 55.31 0 0 1 10-32h38v87.43A56.09 56.09 0 0 1 72 168Zm96 16a55.31 55.31 0 0 1-32-10v-38h87.43A56.09 56.09 0 0 1 168 184Z" />
  </Svg>
);
const Memo = memo(SvgGooglePhotosLogo);
export default Memo;
