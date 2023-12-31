import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M132 156.29V88a4 4 0 0 0-8 0v68.29a28 28 0 1 0 8 0ZM128 204a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm36-68V48a36 36 0 0 0-72 0v88a60 60 0 1 0 72 0Zm-36 100a52 52 0 0 1-29.71-94.68A4 4 0 0 0 100 138V48a28 28 0 0 1 56 0v90a4 4 0 0 0 1.71 3.28A52 52 0 0 1 128 236Z" />
  </Svg>
);
const Memo = memo(SvgThermometerSimpleThin);
export default Memo;
