import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMoonStarsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 96a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20V72a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4Zm-92-44h12v12a4 4 0 0 0 8 0V52h12a4 4 0 0 0 0-8h-12V32a4 4 0 0 0-8 0v12h-12a4 4 0 0 0 0 8Zm69.73 103.58a4 4 0 0 1 .71 4 92 92 0 1 1-118-118 4 4 0 0 1 5.29 4.54A93.18 93.18 0 0 0 100 64a92.1 92.1 0 0 0 92 92 93.18 93.18 0 0 0 17.91-1.74 4 4 0 0 1 3.82 1.32Zm-9.46 7.67A100 100 0 0 1 92.75 51.73a84 84 0 1 0 111.52 111.52Z" />
  </Svg>
);
const Memo = memo(SvgMoonStarsThin);
export default Memo;
