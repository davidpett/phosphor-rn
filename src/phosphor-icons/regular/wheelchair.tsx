import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWheelchair = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M255.59 189.47a8 8 0 0 0-10.12-5.06l-17.42 5.81-28.9-57.8A8 8 0 0 0 192 128h-80v-24h56a8 8 0 0 0 0-16h-56v-9a32 32 0 1 0-16 0v10.81A72 72 0 0 0 112 232c33.52 0 63.69-22.71 71.75-54a8 8 0 1 0-15.5-4c-6.16 24-30.34 42-56.25 42a56 56 0 0 1-16-109.66V136a8 8 0 0 0 8 8h83.05l29.79 59.58a8 8 0 0 0 9.69 4l24-8a8 8 0 0 0 5.06-10.11ZM88 48a16 16 0 1 1 16 16 16 16 0 0 1-16-16Z" />
  </Svg>
);
const Memo = memo(SvgWheelchair);
export default Memo;
