import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgImageSquareBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Zm-4 24v63.72l-17.86-17.86a20 20 0 0 0-28.28 0L52 203.72V52ZM85.66 204 172 117.66l32 32V204ZM76 96a20 20 0 1 1 20 20 20 20 0 0 1-20-20Z" />
  </Svg>
);
const Memo = memo(SvgImageSquareBold);
export default Memo;
