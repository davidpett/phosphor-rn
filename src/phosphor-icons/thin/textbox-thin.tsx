import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextboxThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M112 44a4 4 0 0 0-4 4v20H24a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h84v20a4 4 0 0 0 8 0V48a4 4 0 0 0-4-4ZM24 180a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h84v104ZM244 80v96a12 12 0 0 1-12 12h-88a4 4 0 0 1 0-8h88a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4h-88a4 4 0 0 1 0-8h88a12 12 0 0 1 12 12ZM84 112a4 4 0 0 1-4 4H68v28a4 4 0 0 1-8 0v-28H48a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgTextboxThin);
export default Memo;
