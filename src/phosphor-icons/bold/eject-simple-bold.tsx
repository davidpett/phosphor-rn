import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEjectSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 208a12 12 0 0 1-12 12H32a12 12 0 1 1 0-24h192a12 12 0 0 1 12 12ZM22 160.57a20 20 0 0 1 2.52-21.32l81.64-100.82a28.08 28.08 0 0 1 43.68 0l81.65 100.82A20.1 20.1 0 0 1 215.91 172H40.09A19.9 19.9 0 0 1 22 160.57ZM48.3 148h159.4l-76.5-94.47a4.11 4.11 0 0 0-6.4 0Z" />
  </Svg>
);
const Memo = memo(SvgEjectSimpleBold);
export default Memo;
