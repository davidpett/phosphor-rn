import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionAllDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 80v96H80V80Z" opacity={0.2} />
    <Path d="M104 40a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8Zm40 168h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-176h-24a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16Zm8 72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8Zm0 72a8 8 0 0 0-8 8v24h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16v-24a8 8 0 0 0-8-8ZM40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Zm32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16ZM40 80a8 8 0 0 0 8-8V48h24a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v24a8 8 0 0 0 8 8Zm136 104H80a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8Zm-8-96H88v80h80Z" />
  </Svg>
);
const Memo = memo(SvgSelectionAllDuotone);
export default Memo;
