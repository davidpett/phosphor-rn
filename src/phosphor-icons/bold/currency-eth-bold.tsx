import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyEthBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m225.44 120.59-88-112a12 12 0 0 0-18.88 0l-88 112a12 12 0 0 0 0 14.82l.6.76a3.72 3.72 0 0 0 .44.56l87 110.68a12 12 0 0 0 18.88 0l88-112a12 12 0 0 0-.04-14.82ZM140 50.7l57.12 72.7-57.12 26Zm-24 98.66-57.12-26L116 50.7Zm0 26.37v29.57l-36.15-46Zm24 0 36.15-16.43-36.15 46Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyEthBold);
export default Memo;
