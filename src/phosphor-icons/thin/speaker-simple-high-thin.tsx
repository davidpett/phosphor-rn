import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerSimpleHighThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M153.76 28.41a4 4 0 0 0-4.22.43L78.63 84H32a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84 3.92 3.92 0 0 0 1.76-.41A4 4 0 0 0 156 224V32a4 4 0 0 0-2.24-3.59ZM148 215.82l-65.54-51A4.06 4.06 0 0 0 80 164H32a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h48a4.06 4.06 0 0 0 2.46-.84l65.54-51ZM196 104v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0Zm32-16v80a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerSimpleHighThin);
export default Memo;
