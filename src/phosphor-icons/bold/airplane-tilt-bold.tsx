import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneTiltBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m190 115.31 27.21-25.61.26-.26a36 36 0 0 0-50.91-50.91c-.09.08-.17.17-.26.26L140.69 66 60.1 36.71a12 12 0 0 0-12.58 2.79l-24 24A12 12 0 0 0 25.34 82l59.83 39.88L75 132H56a12 12 0 0 0-8.48 3.51l-24 24a12 12 0 0 0 4 19.62l35.23 14.1 14.06 35.14.09.22a12 12 0 0 0 19.76 3.7l23.81-23.81A12 12 0 0 0 124 200v-19l10.13-10.13L174 230.65a12 12 0 0 0 18.47 1.83l24-24a12 12 0 0 0 2.79-12.59Zm-4.11 89.85L146 145.33a12 12 0 0 0-8.8-5.28 11.66 11.66 0 0 0-1.2-.05 12 12 0 0 0-8.49 3.52l-24 24A12 12 0 0 0 100 176v19l-7.62 7.62-9.24-23.1a12 12 0 0 0-6.69-6.69l-23.1-9.24L61 156h19a12 12 0 0 0 8.48-3.51l24-24a12 12 0 0 0-1.82-18.49L50.84 70.12l8.24-8.25 80.83 29.39a12 12 0 0 0 12.84-3.05l30.89-32.82a12 12 0 0 1 17 17l-32.82 30.89a12 12 0 0 0-3.06 12.84l29.4 80.82Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneTiltBold);
export default Memo;
