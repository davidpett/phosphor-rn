import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSlideshow = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 48H64a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm0 144H64V64h128v128Zm48-136v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0ZM32 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgSlideshow);
export default Memo;
