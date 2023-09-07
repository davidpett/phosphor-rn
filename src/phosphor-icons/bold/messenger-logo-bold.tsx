import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMessengerLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m184.49 120.49-32 32a12 12 0 0 1-17 0L112 129l-23.51 23.49a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0L144 127l23.51-23.52a12 12 0 0 1 17 17ZM236 128a108 108 0 0 1-157.23 96.15L46.34 235A20 20 0 0 1 21 209.66l10.81-32.43A108 108 0 1 1 236 128Zm-24 0a84 84 0 1 0-156.73 42.05 12 12 0 0 1 1 9.82l-9.93 29.79 29.79-9.93a12.1 12.1 0 0 1 3.8-.62 12 12 0 0 1 6 1.62A84 84 0 0 0 212 128Z" />
  </Svg>
);
const Memo = memo(SvgMessengerLogoBold);
export default Memo;
