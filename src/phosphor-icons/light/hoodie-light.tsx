import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHoodieLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m237 124.67-56.3-84.44A14 14 0 0 0 169.05 34H87a14 14 0 0 0-11.7 6.23L19 124.67a6 6 0 0 0-.8 4.91l22.39 82.1A14 14 0 0 0 54.11 222H80a14 14 0 0 0 14-14v-18h68v18a14 14 0 0 0 14 14h25.89a14 14 0 0 0 13.51-10.32l22.39-82.1a6 6 0 0 0-.79-4.91ZM80 178a2 2 0 0 1-2-2V66.34l28 16V136a6 6 0 0 0 12 0V89.2l7 4a6 6 0 0 0 6 0l7-4V128a6 6 0 0 0 12 0V82.34l28-16V176a2 2 0 0 1-2 2Zm7-132h82.1a2 2 0 0 1 1.67.89l4.67 7.11L128 81.09 80.56 54l4.72-7.09A2 2 0 0 1 87 46Zm-5 162a2 2 0 0 1-2 2H54.11a2 2 0 0 1-1.93-1.47l-21.67-79.47L66 75.82V176a14 14 0 0 0 14 14h2Zm121.82.53a2 2 0 0 1-1.93 1.47H176a2 2 0 0 1-2-2v-18h2a14 14 0 0 0 14-14V75.82l35.49 53.24Z" />
  </Svg>
);
const Memo = memo(SvgHoodieLight);
export default Memo;
