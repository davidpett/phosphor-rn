import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMarkerCircleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M201.54 54.46A104 104 0 0 0 54.46 201.54 104 104 0 0 0 201.54 54.46ZM88 206.37V176h80v30.37a88.38 88.38 0 0 1-80 0ZM104 136h48v24h-48Zm86.22 54.23c-2 2-4.08 3.87-6.22 5.64V176a16 16 0 0 0-16-16v-24a16 16 0 0 0-13.74-15.82L143.6 73.3a16 16 0 0 0-31.2 0l-10.66 46.88A16 16 0 0 0 88 136v24a16 16 0 0 0-16 16v19.87a88.917 88.917 0 0 1-6.22-5.64 88 88 0 1 1 124.44 0Z" />
  </Svg>
);
const Memo = memo(SvgMarkerCircleFill);
export default Memo;
