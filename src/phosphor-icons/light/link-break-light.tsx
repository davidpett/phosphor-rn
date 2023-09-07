import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkBreakLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 64a34 34 0 0 0-48-.05l-11.66 12.19a6 6 0 1 1-8.68-8.28l11.71-12.28.1-.11a46 46 0 0 1 65.06 65.06l-.11.1-12.28 11.71a6 6 0 0 1-8.28-8.68L192.09 112a34 34 0 0 0-.09-48Zm-68.38 115.9L112 192.09A34 34 0 0 1 63.91 144l12.23-11.67a6 6 0 1 0-8.28-8.68l-12.28 11.72-.11.1a46 46 0 0 0 65.06 65.06l.1-.11 11.71-12.28a6 6 0 1 0-8.68-8.28ZM208 154h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12ZM48 102h24a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12Zm112 76a6 6 0 0 0-6 6v24a6 6 0 0 0 12 0v-24a6 6 0 0 0-6-6ZM96 78a6 6 0 0 0 6-6V48a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6Z" />
  </Svg>
);
const Memo = memo(SvgLinkBreakLight);
export default Memo;
