import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrosoftWordLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 24H72a16 16 0 0 0-16 16v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h16v24a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16ZM68.24 153.94l-12-48a8 8 0 1 1 15.52-3.88l6.76 27 6.32-12.66a8 8 0 0 1 14.32 0l6.32 12.66 6.76-27a8 8 0 0 1 15.52 3.88l-12 48a8 8 0 0 1-6.89 6 8.46 8.46 0 0 1-.87.05 8 8 0 0 1-7.16-4.42L92 137.89l-8.84 17.69a8 8 0 0 1-14.92-1.64ZM200 216H72v-24h72a16 16 0 0 0 16-16v-8h40Zm0-64h-40v-48h40Zm0-64h-40v-8a16 16 0 0 0-16-16H72V40h128Z" />
  </Svg>
);
const Memo = memo(SvgMicrosoftWordLogoFill);
export default Memo;
