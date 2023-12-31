import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowSquareUpRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Zm4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM164 96v48a4 4 0 0 1-8 0v-38.34l-57.17 57.17a4 4 0 0 1-5.66-5.66L150.34 100H112a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgArrowSquareUpRightThin);
export default Memo;
