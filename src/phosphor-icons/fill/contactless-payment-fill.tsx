import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgContactlessPaymentFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM97.07 155.74a8 8 0 1 1-14.14-7.48 42.79 42.79 0 0 0 0-40.52 8 8 0 0 1 14.14-7.48 59.33 59.33 0 0 1 0 55.48Zm28 16a8 8 0 1 1-14.12-7.52 77.07 77.07 0 0 0 0-72.48 8 8 0 1 1 14.12-7.52 93 93 0 0 1-.01 87.54Zm28 16a8 8 0 0 1-14.07-7.51 110.62 110.62 0 0 0 0-104.46 8 8 0 0 1 14.12-7.54 126.67 126.67 0 0 1-.05 119.54Z" />
  </Svg>
);
const Memo = memo(SvgContactlessPaymentFill);
export default Memo;
