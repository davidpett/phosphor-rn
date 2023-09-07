import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListBulletsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M82 64a6 6 0 0 1 6-6h128a6 6 0 0 1 0 12H88a6 6 0 0 1-6-6Zm134 58H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12Zm0 64H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12ZM44 54a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm0 128a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm0-64a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z" />
  </Svg>
);
const Memo = memo(SvgListBulletsLight);
export default Memo;
