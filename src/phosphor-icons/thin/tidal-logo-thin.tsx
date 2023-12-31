import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTidalLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m250.83 93.17-40-40a4 4 0 0 0-5.66 0L168 90.34l-37.17-37.17a4 4 0 0 0-5.66 0L88 90.34 50.83 53.17a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0L88 101.66 122.34 136l-37.17 37.17a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66L133.66 136 168 101.66l37.17 37.17a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66ZM48 130.34 13.66 96 48 61.66 82.34 96Zm80 80L93.66 176 128 141.66 162.34 176Zm0-80L93.66 96 128 61.66 162.34 96Zm80 0L173.66 96 208 61.66 242.34 96Z" />
  </Svg>
);
const Memo = memo(SvgTidalLogoThin);
export default Memo;
