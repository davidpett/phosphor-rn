import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToolboxThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 68h-52V56a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12ZM92 56a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92ZM32 76h192a4 4 0 0 1 4 4v36h-40v-12a4 4 0 0 0-8 0v12H76v-12a4 4 0 0 0-8 0v12H28V80a4 4 0 0 1 4-4Zm192 120H32a4 4 0 0 1-4-4v-68h40v12a4 4 0 0 0 8 0v-12h104v12a4 4 0 0 0 8 0v-12h40v68a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgToolboxThin);
export default Memo;
