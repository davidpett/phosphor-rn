import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSlideshowLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 50H64a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14Zm2 142a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2Zm44-136v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0ZM30 56v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgSlideshowLight);
export default Memo;
