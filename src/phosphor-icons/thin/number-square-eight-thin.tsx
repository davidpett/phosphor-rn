import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSquareEightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Zm4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-69.1-84.31a28 28 0 1 0-29.8 0 32 32 0 1 0 29.8 0ZM108 100a20 20 0 1 1 20 20 20 20 0 0 1-20-20Zm20 76a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" />
  </Svg>
);
const Memo = memo(SvgNumberSquareEightThin);
export default Memo;
