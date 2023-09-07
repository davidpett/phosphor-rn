import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBatteryMediumBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28Zm4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm-96-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0Zm-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0Zm192 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0Z" />
  </Svg>
);
const Memo = memo(SvgBatteryMediumBold);
export default Memo;
