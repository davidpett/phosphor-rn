import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGridNineLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 50H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14Zm-114 96v-36h52v36Zm52 12v36h-52v-36ZM38 110h52v36H38Zm64-12V62h52v36Zm64 12h52v36h-52Zm52-46v34h-52V62h50a2 2 0 0 1 2 2ZM40 62h50v36H38V64a2 2 0 0 1 2-2Zm-2 130v-34h52v36H40a2 2 0 0 1-2-2Zm178 2h-50v-36h52v34a2 2 0 0 1-2 2Z" />
  </Svg>
);
const Memo = memo(SvgGridNineLight);
export default Memo;
