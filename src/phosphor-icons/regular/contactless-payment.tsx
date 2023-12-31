import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgContactlessPayment = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88ZM97.07 100.26a59.33 59.33 0 0 1 0 55.48 8 8 0 1 1-14.14-7.48 42.79 42.79 0 0 0 0-40.52 8 8 0 0 1 14.14-7.48Zm56-32a126.67 126.67 0 0 1 0 119.54 8 8 0 0 1-14.07-7.57 110.62 110.62 0 0 0 0-104.46 8 8 0 0 1 14.12-7.54Zm-28 16a93 93 0 0 1 0 87.52 8 8 0 1 1-14.12-7.52 77 77 0 0 0 0-72.48 8 8 0 1 1 14.12-7.52Z" />
  </Svg>
);
const Memo = memo(SvgContactlessPayment);
export default Memo;
