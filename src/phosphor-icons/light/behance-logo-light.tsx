import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBehanceLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M112.15 122.36A36 36 0 0 0 90 58H32a6 6 0 0 0-6 6v128a6 6 0 0 0 6 6h62a40 40 0 0 0 18.15-75.64ZM38 70h52a24 24 0 0 1 0 48H38Zm56 116H38v-56h56a28 28 0 0 1 0 56Zm68-106a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12h-64a6 6 0 0 1-6-6Zm38 26a46 46 0 1 0 36.8 73.61 6 6 0 0 0-9.6-7.21 34 34 0 0 1-60.67-14.4H240a6 6 0 0 0 6-6 46.06 46.06 0 0 0-46-46Zm-33.47 40a34 34 0 0 1 66.94 0Z" />
  </Svg>
);
const Memo = memo(SvgBehanceLogoLight);
export default Memo;
