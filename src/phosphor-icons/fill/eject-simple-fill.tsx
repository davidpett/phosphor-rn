import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEjectSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 1 1 0-16h192a8 8 0 0 1 8 8ZM40.09 168h175.82a16.1 16.1 0 0 0 12.48-26.23L146.74 40.94a24.11 24.11 0 0 0-37.48 0L27.61 141.77A16.1 16.1 0 0 0 40.09 168Z" />
  </Svg>
);
const Memo = memo(SvgEjectSimpleFill);
export default Memo;
