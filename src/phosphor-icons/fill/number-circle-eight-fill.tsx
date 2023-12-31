import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleEightFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M148 152a20 20 0 1 1-20-20 20 20 0 0 1 20 20Zm-20-36a16 16 0 1 0-16-16 16 16 0 0 0 16 16Zm104 12A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-68 24a35.93 35.93 0 0 0-14.19-28.61 32 32 0 1 0-43.62 0A36 36 0 1 0 164 152Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleEightFill);
export default Memo;
