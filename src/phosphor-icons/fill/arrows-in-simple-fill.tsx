import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsInSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M120 144v48a8 8 0 0 1-13.66 5.66L88 179.31l-34.34 34.35a8 8 0 0 1-11.32-11.32L76.69 168l-18.35-18.34A8 8 0 0 1 64 136h48a8 8 0 0 1 8 8Zm93.66-101.66a8 8 0 0 0-11.32 0L168 76.69l-18.34-18.35A8 8 0 0 0 136 64v48a8 8 0 0 0 8 8h48a8 8 0 0 0 5.66-13.66L179.31 88l34.35-34.34a8 8 0 0 0 0-11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowsInSimpleFill);
export default Memo;
