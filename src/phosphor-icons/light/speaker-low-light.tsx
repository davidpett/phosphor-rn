import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerLowLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M154.64 26.61a6 6 0 0 0-6.32.65L77.94 82H32a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 158 224V32a6 6 0 0 0-3.36-5.39ZM30 160V96a2 2 0 0 1 2-2h42v68H32a2 2 0 0 1-2-2Zm116 51.73-60-46.66V90.93l60-46.66ZM206 128a37.94 37.94 0 0 1-9.5 25.14 6 6 0 1 1-9-7.94 26 26 0 0 0 0-34.37 6 6 0 0 1 9-7.93A38 38 0 0 1 206 128Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerLowLight);
export default Memo;
