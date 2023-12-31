import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRss = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M98.91 157.09A71.53 71.53 0 0 1 120 208a8 8 0 0 1-16 0 56 56 0 0 0-56-56 8 8 0 0 1 0-16 71.53 71.53 0 0 1 50.91 21.09ZM48 88a8 8 0 0 0 0 16 104 104 0 0 1 104 104 8 8 0 0 0 16 0A120 120 0 0 0 48 88Zm118.79 1.21A166.9 166.9 0 0 0 48 40a8 8 0 0 0 0 16 151 151 0 0 1 107.48 44.52A151 151 0 0 1 200 208a8 8 0 0 0 16 0 166.9 166.9 0 0 0-49.21-118.79ZM52 192a12 12 0 1 0 12 12 12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgRss);
export default Memo;
