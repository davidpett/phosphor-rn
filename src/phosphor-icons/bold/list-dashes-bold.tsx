import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListDashesBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M84 64a12 12 0 0 1 12-12h120a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12Zm132 52H96a12 12 0 0 0 0 24h120a12 12 0 0 0 0-24Zm0 64H96a12 12 0 0 0 0 24h120a12 12 0 0 0 0-24ZM56 52H40a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24Zm0 64H40a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24Zm0 64H40a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgListDashesBold);
export default Memo;
