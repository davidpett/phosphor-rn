import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyAngryFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM80 140a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm78.66 48.43a8 8 0 0 1-11.09 2.23C141.07 186.34 136 184 128 184s-13.07 2.34-19.57 6.66a8 8 0 0 1-8.86-13.32C108 171.73 116.06 168 128 168s20 3.73 28.43 9.34a8 8 0 0 1 2.23 11.09ZM164 152a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm16.44-57.34-48 32a8 8 0 0 1-8.88 0l-48-32a8 8 0 1 1 8.88-13.32L128 110.39l43.56-29a8 8 0 0 1 8.88 13.32Z" />
  </Svg>
);
const Memo = memo(SvgSmileyAngryFill);
export default Memo;
