import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIdentificationCardThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196 112a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4Zm-4 28h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8Zm36-84v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12Zm-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Zm-88.13 111a4 4 0 1 1-7.74 2C121.06 157 109 148 96 148s-25 9-28.13 21a4 4 0 0 1-3.87 3 3.87 3.87 0 0 1-1-.13 4 4 0 0 1-2.87-4.87 36.28 36.28 0 0 1 20.43-23.66 28 28 0 1 1 30.88 0A36.2 36.2 0 0 1 131.87 167ZM96 140a20 20 0 1 0-20-20 20 20 0 0 0 20 20Z" />
  </Svg>
);
const Memo = memo(SvgIdentificationCardThin);
export default Memo;
