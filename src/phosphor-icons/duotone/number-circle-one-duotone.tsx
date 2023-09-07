import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleOneDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 128a96 96 0 1 1-96-96 96 96 0 0 1 96 96Z" opacity={0.2} />
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm12-136v96a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleOneDuotone);
export default Memo;
