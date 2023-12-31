import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerColdBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m246.14 81.52-14.72 4.79 9.1 12.52a12 12 0 1 1-19.42 14.11l-9.1-12.52-9.1 12.52a12 12 0 1 1-19.42-14.11l9.1-12.52-14.72-4.79a12 12 0 1 1 7.41-22.82L200 63.48V48a12 12 0 0 1 24 0v15.48l14.73-4.78a12 12 0 1 1 7.41 22.82ZM160 150.69a64 64 0 1 1-104 0V56a52 52 0 0 1 104 0ZM148 188a40 40 0 0 0-9.23-25.55 12 12 0 0 1-2.77-7.68V56a28 28 0 0 0-56 0v98.78a12 12 0 0 1-2.91 7.83A40 40 0 1 0 148 188Zm-28-20.78V120a12 12 0 0 0-24 0v47.22a24 24 0 1 0 24 0Z" />
  </Svg>
);
const Memo = memo(SvgThermometerColdBold);
export default Memo;
