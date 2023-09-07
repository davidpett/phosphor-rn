import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShirtFoldedLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 50h-21.52l-14.24-14.24A6 6 0 0 0 160 34H96a6 6 0 0 0-4.21 1.76L77.52 50H56a14 14 0 0 0-14 14v152a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14Zm-30 8.49V112a2 2 0 0 1-3.25 1.56l-30.82-26.64 25-37.5Zm-42 18.69L107.21 46h41.58ZM95.07 49.42l25 37.5-30.82 26.62A2 2 0 0 1 86 112V58.49ZM54 216V64a2 2 0 0 1 2-2h18v50a13.87 13.87 0 0 0 8.06 12.68A14.11 14.11 0 0 0 88 126a13.87 13.87 0 0 0 9-3.26l.08-.07 25-21.56V218H56a2 2 0 0 1-2-2Zm148 0a2 2 0 0 1-2 2h-66V101.11l25 21.56.08.07A13.87 13.87 0 0 0 168 126a14.08 14.08 0 0 0 6-1.35 13.87 13.87 0 0 0 8-12.65V62h18a2 2 0 0 1 2 2Z" />
  </Svg>
);
const Memo = memo(SvgShirtFoldedLight);
export default Memo;
