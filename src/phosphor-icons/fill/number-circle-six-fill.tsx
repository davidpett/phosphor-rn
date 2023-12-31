import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleSixFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M148 148a20 20 0 1 1-20-20 20 20 0 0 1 20 20Zm84-20A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-68 20a36 36 0 0 0-36-36h-1.82l16.69-27.9a8 8 0 0 0-13.74-8.2s-32.4 54.28-32.47 54.42A36 36 0 1 0 164 148Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleSixFill);
export default Memo;
