import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHourglassHighLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 26H72a14 14 0 0 0-14 14v36a14.06 14.06 0 0 0 5.6 11.2L118 128l-54.4 40.8A14.06 14.06 0 0 0 58 180v36a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-35.64a14.08 14.08 0 0 0-5.56-11.17L138 128l54.49-41.19A14.08 14.08 0 0 0 198 75.64V40a14 14 0 0 0-14-14ZM72 38h112a2 2 0 0 1 2 2v18H70V40a2 2 0 0 1 2-2Zm114 142.36V216a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2v-36a2 2 0 0 1 .8-1.6l57.2-42.89 57.22 43.25a2 2 0 0 1 .78 1.6Zm-.79-103.12L128 120.49 70.8 77.6A2 2 0 0 1 70 76v-6h116v5.64a2 2 0 0 1-.79 1.6Z" />
  </Svg>
);
const Memo = memo(SvgHourglassHighLight);
export default Memo;
