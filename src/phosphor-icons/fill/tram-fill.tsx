import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTramFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 48h-48V24h32a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h32v24H72a32 32 0 0 0-32 32v104a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32Zm0 152H72a16 16 0 0 1-16-16v-56h144v56a16 16 0 0 1-16 16Zm-88-28a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm88 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgTramFill);
export default Memo;
