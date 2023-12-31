import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRewindBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M225.7 54.46a20 20 0 0 0-20.33.66L132 101.85v-30a19.91 19.91 0 0 0-30.63-16.72l-88.18 56.16a19.79 19.79 0 0 0 0 33.42l88.18 56.17A19.91 19.91 0 0 0 132 184.16v-30l73.37 46.73A19.91 19.91 0 0 0 236 184.16V71.84a19.84 19.84 0 0 0-10.3-17.38ZM108 176.64 31.63 128 108 79.36Zm104 0L135.63 128 212 79.36Z" />
  </Svg>
);
const Memo = memo(SvgRewindBold);
export default Memo;
