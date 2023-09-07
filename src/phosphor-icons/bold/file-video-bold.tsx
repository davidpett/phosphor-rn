import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileVideoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M150.35 149.82a12 12 0 0 0-11.63-.6L118 159.37A20 20 0 0 0 100 148H48a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h52a20 20 0 0 0 18.3-12l20.12 10.58A12 12 0 0 0 156 216v-56a12 12 0 0 0-5.65-10.18ZM96 204H52v-32h44Zm36-7.87-12-6.3v-4.72l12-5.87Zm84.49-116.62-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v76a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-8a12 12 0 0 0 0 24h12a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49ZM160 57l23 23h-23Z" />
  </Svg>
);
const Memo = memo(SvgFileVideoBold);
export default Memo;
