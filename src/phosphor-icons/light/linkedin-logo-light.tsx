import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkedinLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 26H40a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm2 190a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM94 112v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0Zm88 28v36a6 6 0 0 1-12 0v-36a22 22 0 0 0-44 0v36a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0v2.11A34 34 0 0 1 182 140ZM98 84a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z" />
  </Svg>
);
const Memo = memo(SvgLinkedinLogoLight);
export default Memo;
