import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyStickerFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 30.57 203.43 7.9 7.9 0 0 0 3.3-2l63.57-63.57a8 8 0 0 0 2-3.31A104.09 104.09 0 0 0 128 24ZM92 96a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm82.92 60c-10.29 17.79-27.39 28-46.92 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.08-20a8 8 0 1 1 13.84 8ZM164 120a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgSmileyStickerFill);
export default Memo;
