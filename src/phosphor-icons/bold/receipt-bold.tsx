import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgReceiptBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M68 100a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12Zm12 52h96a12 12 0 0 0 0-24H80a12 12 0 0 0 0 24Zm156-96v152a12 12 0 0 1-17.37 10.73L192 205.42l-26.63 13.31a12 12 0 0 1-10.74 0L128 205.42l-26.63 13.31a12 12 0 0 1-10.74 0L64 205.42l-26.63 13.31A12 12 0 0 1 20 208V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20Zm-24 4H44v128.58l14.63-7.31a12 12 0 0 1 10.74 0L96 194.58l26.63-13.31a12 12 0 0 1 10.74 0L160 194.58l26.63-13.31a12 12 0 0 1 10.74 0l14.63 7.31Z" />
  </Svg>
);
const Memo = memo(SvgReceiptBold);
export default Memo;
