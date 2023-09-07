import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiNoneLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M138 204a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z" />
  </Svg>
);
const Memo = memo(SvgWifiNoneLight);
export default Memo;
