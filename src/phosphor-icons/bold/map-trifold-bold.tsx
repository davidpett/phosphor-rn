import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMapTrifoldBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M231.38 46.54a12 12 0 0 0-10.29-2.18L161.4 59.28l-60-30a12 12 0 0 0-8.28-.91l-64 16A12 12 0 0 0 20 56v144a12 12 0 0 0 14.91 11.64l59.69-14.92 60 30a12 12 0 0 0 8.28.91l64-16A12 12 0 0 0 236 200V56a12 12 0 0 0-4.62-9.46ZM108 59.42l40 20v117.16l-40-20Zm-64 6 40-10v119.21l-40 10Zm168 125.21-40 10V81.37l40-10Z" />
  </Svg>
);
const Memo = memo(SvgMapTrifoldBold);
export default Memo;
