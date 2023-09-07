import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBookmarksSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 56H60a20 20 0 0 0-20 20v152a12 12 0 0 0 19 9.76l49-35 49 35a12 12 0 0 0 19-9.76V76a20 20 0 0 0-20-20Zm-4 148.68-37-26.45a12 12 0 0 0-14 0l-37 26.45V80h88ZM216 36v152a12 12 0 0 1-24 0V40H92a12 12 0 0 1 0-24h104a20 20 0 0 1 20 20Z" />
  </Svg>
);
const Memo = memo(SvgBookmarksSimpleBold);
export default Memo;
