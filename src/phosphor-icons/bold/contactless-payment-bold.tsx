import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgContactlessPaymentBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152.58 66.35a130.61 130.61 0 0 1 0 123.3 12 12 0 1 1-21.17-11.3 106.7 106.7 0 0 0 0-100.7 12 12 0 1 1 21.16-11.3Zm-52.22 11.06a12 12 0 0 0-5 16.23 73 73 0 0 1 0 68.72 12 12 0 1 0 21.18 11.28 97 97 0 0 0 0-91.28 12 12 0 0 0-16.18-4.95ZM236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108Zm-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84Z" />
  </Svg>
);
const Memo = memo(SvgContactlessPaymentBold);
export default Memo;
