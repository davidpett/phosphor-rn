import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerSlashLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M52.44 36a6 6 0 0 0-8.88 8L78 81.94l-.08.06H32a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 158 224v-54.08L203.56 220a6 6 0 0 0 8.88-8.08ZM30 160V96a2 2 0 0 1 2-2h42v68H32a2 2 0 0 1-2-2Zm116 51.73-60-46.66V90.93l.11-.08L146 156.72Zm41.5-66.53a26 26 0 0 0 0-34.37 6 6 0 1 1 9-7.93 38 38 0 0 1 0 50.24 6 6 0 0 1-9-7.94Zm-80.09-78.52a6 6 0 0 1 1.06-8.42l39.85-31A6 6 0 0 1 158 32v74.83a6 6 0 0 1-12 0V44.27l-30.17 23.46a6 6 0 0 1-8.42-1.05ZM246 128a77.86 77.86 0 0 1-19.86 52 6 6 0 1 1-8.94-8 66 66 0 0 0 0-88 6 6 0 1 1 8.94-8A77.86 77.86 0 0 1 246 128Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerSlashLight);
export default Memo;
