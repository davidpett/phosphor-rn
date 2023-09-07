import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChargingStationThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M131.31 125.76a4 4 0 0 1 .4 3.73l-16 40A4 4 0 0 1 112 172a3.91 3.91 0 0 1-1.49-.29 4 4 0 0 1-2.22-5.2l13.8-34.51H96a4 4 0 0 1-3.71-5.49l16-40a4 4 0 1 1 7.42 3L101.91 124H128a4 4 0 0 1 3.31 1.76ZM244 86.63V168a20 20 0 0 1-40 0v-40a12 12 0 0 0-12-12h-20v96h20a4 4 0 0 1 0 8H32a4 4 0 0 1 0-8h20V56a20 20 0 0 1 20-20h80a20 20 0 0 1 20 20v52h20a20 20 0 0 1 20 20v40a12 12 0 0 0 24 0V86.63a12 12 0 0 0-3.51-8.49l-19.32-19.31a4 4 0 0 1 5.66-5.66l19.31 19.32A19.85 19.85 0 0 1 244 86.63ZM164 212V56a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v156Z" />
  </Svg>
);
const Memo = memo(SvgChargingStationThin);
export default Memo;
