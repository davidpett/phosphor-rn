import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleSeven = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm30.55-132.59a8 8 0 0 1 1 7.32l-32 88A8 8 0 0 1 120 184a7.9 7.9 0 0 1-2.73-.48 8 8 0 0 1-4.79-10.25L140.58 96H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 3.41Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleSeven);
export default Memo;
