import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTiktokLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 74a50.06 50.06 0 0 1-50-50 6 6 0 0 0-6-6h-40a6 6 0 0 0-6 6v132a22 22 0 1 1-31.43-19.89 6 6 0 0 0 3.43-5.42V88a6 6 0 0 0-7-5.91C52.2 88.28 26 120.05 26 156a74 74 0 0 0 148 0v-43.07A101.28 101.28 0 0 0 224 126a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6Zm-6 39.8a89.13 89.13 0 0 1-46.5-16.69A6 6 0 0 0 162 102v54a62 62 0 0 1-124 0c0-27.72 18.47-52.48 44-60.38v31.53A34 34 0 1 0 134 156V30h28.29A62.09 62.09 0 0 0 218 85.71Z" />
  </Svg>
);
const Memo = memo(SvgTiktokLogoLight);
export default Memo;
