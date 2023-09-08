import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotificationBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 132v76a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h76a12 12 0 0 1 0 24H52v144h144v-72a12 12 0 0 1 24 0Zm16-72a40 40 0 1 1-40-40 40 40 0 0 1 40 40Zm-24 0a16 16 0 1 0-16 16 16 16 0 0 0 16-16Z" />
  </Svg>
);
const Memo = memo(SvgNotificationBold);
export default Memo;
