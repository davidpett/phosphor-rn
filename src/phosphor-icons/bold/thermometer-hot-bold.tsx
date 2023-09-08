import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerHotBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M174.12 82.81a12 12 0 0 1 3.07-16.69c11.86-8.18 29.76-8.18 41.62 0 3.63 2.5 10.75 2.5 14.38 0a12 12 0 0 1 13.62 19.76 38.34 38.34 0 0 1-41.62 0c-3.63-2.5-10.75-2.5-14.38 0a12 12 0 0 1-16.69-3.07Zm59.07 23.31c-3.63 2.5-10.75 2.5-14.38 0-11.86-8.18-29.76-8.18-41.62 0a12 12 0 1 0 13.62 19.76c3.63-2.5 10.75-2.5 14.38 0a38.34 38.34 0 0 0 41.62 0 12 12 0 0 0-13.62-19.76ZM160 150.69a64 64 0 1 1-104 0V56a52 52 0 0 1 104 0ZM148 188a40 40 0 0 0-9.23-25.55 12 12 0 0 1-2.77-7.68V56a28 28 0 0 0-56 0v98.78a12 12 0 0 1-2.91 7.83A40 40 0 1 0 148 188Zm-28-20.78V56a12 12 0 0 0-24 0v111.22a24 24 0 1 0 24 0Z" />
  </Svg>
);
const Memo = memo(SvgThermometerHotBold);
export default Memo;
