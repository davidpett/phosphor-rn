import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlashlightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 18H72a14 14 0 0 0-14 14v45.33a14 14 0 0 0 2.8 8.4l20.8 27.73a2 2 0 0 1 .4 1.21V224a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14V114.67a2 2 0 0 1 .4-1.2l20.8-27.74a14 14 0 0 0 2.8-8.4V32a14 14 0 0 0-14-14ZM72 30h112a2 2 0 0 1 2 2v26H70V32a2 2 0 0 1 2-2Zm113.6 48.53-20.8 27.74a14 14 0 0 0-2.8 8.4V224a2 2 0 0 1-2 2H96a2 2 0 0 1-2-2V114.67a14 14 0 0 0-2.8-8.4L70.4 78.54a2 2 0 0 1-.4-1.21V70h116v7.33a2 2 0 0 1-.4 1.2ZM134 120v32a6 6 0 0 1-12 0v-32a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgFlashlightLight);
export default Memo;
