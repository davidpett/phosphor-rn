import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCookingPotBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M76 40V16a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0Zm52 12a12 12 0 0 0 12-12V16a12 12 0 0 0-24 0v24a12 12 0 0 0 12 12Zm40 0a12 12 0 0 0 12-12V16a12 12 0 0 0-24 0v24a12 12 0 0 0 12 12Zm83.2 53.6L224 126v58a36 36 0 0 1-36 36H68a36 36 0 0 1-36-36v-58L4.8 105.6a12 12 0 0 1 14.4-19.2L32 96v-8a20 20 0 0 1 20-20h152a20 20 0 0 1 20 20v8l12.8-9.6a12 12 0 0 1 14.4 19.2ZM200 92H56v92a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12Z" />
  </Svg>
);
const Memo = memo(SvgCookingPotBold);
export default Memo;
