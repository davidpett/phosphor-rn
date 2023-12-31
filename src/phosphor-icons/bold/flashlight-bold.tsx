import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlashlightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 12H72a20 20 0 0 0-20 20v45.33a20.12 20.12 0 0 0 4 12L76 116v108a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20V116l20-26.67a20.12 20.12 0 0 0 4-12V32a20 20 0 0 0-20-20Zm-4 24v16H76V36Zm-20 66.67a20.12 20.12 0 0 0-4 12V220h-56V114.67a20.12 20.12 0 0 0-4-12L76 76h104ZM140 120v32a12 12 0 0 1-24 0v-32a12 12 0 0 1 24 0Z" />
  </Svg>
);
const Memo = memo(SvgFlashlightBold);
export default Memo;
