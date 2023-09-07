import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberNineBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 96a60 60 0 1 0-60 60 59.21 59.21 0 0 0 7.81-.53l-26.27 46.64a12 12 0 0 0 20.92 11.78l49.54-88A59.57 59.57 0 0 0 188 96Zm-96 0a36 36 0 1 1 36 36 36 36 0 0 1-36-36Z" />
  </Svg>
);
const Memo = memo(SvgNumberNineBold);
export default Memo;
