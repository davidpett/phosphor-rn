import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVideoCameraLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M250.83 74.71a6 6 0 0 0-6.16.3L206 100.79V72a14 14 0 0 0-14-14H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-28.79L244.67 181a6 6 0 0 0 9.33-5V80a6 6 0 0 0-3.17-5.29ZM194 184a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm48-19.21-36-24v-25.58l36-24Z" />
  </Svg>
);
const Memo = memo(SvgVideoCameraLight);
export default Memo;
