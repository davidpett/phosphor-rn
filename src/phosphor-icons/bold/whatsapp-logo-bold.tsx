import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWhatsappLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M187.3 159.06A36.09 36.09 0 0 1 152 188a84.09 84.09 0 0 1-84-84 36.09 36.09 0 0 1 28.94-35.3A12 12 0 0 1 110 75.1l11.48 23a12 12 0 0 1-.75 12l-8.52 12.78a44.56 44.56 0 0 0 20.91 20.91l12.78-8.52a12 12 0 0 1 12-.75l23 11.48a12 12 0 0 1 6.4 13.06ZM236 128a108 108 0 0 1-157.23 96.15L46.34 235A20 20 0 0 1 21 209.66l10.81-32.43A108 108 0 1 1 236 128Zm-24 0a84 84 0 1 0-156.73 42.06 12 12 0 0 1 1 9.81l-9.93 29.79 29.79-9.93a12.1 12.1 0 0 1 3.8-.62 12 12 0 0 1 6 1.62A84 84 0 0 0 212 128Z" />
  </Svg>
);
const Memo = memo(SvgWhatsappLogoBold);
export default Memo;
