import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionInverseBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 216a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12ZM40 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12Zm32 48H52v-20a12 12 0 0 0-24 0v24a20 20 0 0 0 20 20h24a12 12 0 0 0 0-24ZM228 48v160a20 20 0 0 1-20 20h-24a12 12 0 0 1 0-24h3L52 69v3a12 12 0 0 1-24 0V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20Zm-24 4H69l135 135Z" />
  </Svg>
);
const Memo = memo(SvgSelectionInverseBold);
export default Memo;
