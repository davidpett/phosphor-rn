import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMonitorPlayBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 120a12 12 0 0 1-5.12 9.83l-40 28A12 12 0 0 1 104 148V92a12 12 0 0 1 18.88-9.83l40 28A12 12 0 0 1 168 120Zm68-56v112a28 28 0 0 1-28 28H48a28 28 0 0 1-28-28V64a28 28 0 0 1 28-28h160a28 28 0 0 1 28 28Zm-24 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Zm-52 152H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgMonitorPlayBold);
export default Memo;
