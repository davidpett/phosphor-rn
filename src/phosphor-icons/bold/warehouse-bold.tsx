import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWarehouseBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 180h-4V61.13l6.51-1.39a12 12 0 1 0-5-23.47l-224 48A12 12 0 0 0 16 108a12.21 12.21 0 0 0 2.53-.26l1.48-.32V180H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24ZM44 102.27l168-36V180h-20v-60a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v60H44ZM168 144H88v-12h80Zm-80 24h80v12H88Z" />
  </Svg>
);
const Memo = memo(SvgWarehouseBold);
export default Memo;
