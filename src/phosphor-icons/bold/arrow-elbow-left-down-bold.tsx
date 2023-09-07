import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowLeftDownBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 64a12 12 0 0 1-12 12H92v103l27.51-27.52a12 12 0 0 1 17 17l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 1 1 17-17L68 179V64a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowLeftDownBold);
export default Memo;
