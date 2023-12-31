import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCouchFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 120v48a16 16 0 0 1-16 16h-8v16a8 8 0 0 1-16 0v-16H48v16a8 8 0 0 1-16 0v-16h-8a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16h8a16 16 0 0 1 16 16v16a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8v-16a16 16 0 0 1 16-16h8a16 16 0 0 1 16 16Zm-56 0a32 32 0 0 1 32-32h12a4 4 0 0 0 4-4V72a16 16 0 0 0-16-16h-84a4 4 0 0 0-4 4v68h56ZM20 88h12a32 32 0 0 1 32 32v8h56V60a4 4 0 0 0-4-4H32a16 16 0 0 0-16 16v12a4 4 0 0 0 4 4Z" />
  </Svg>
);
const Memo = memo(SvgCouchFill);
export default Memo;
