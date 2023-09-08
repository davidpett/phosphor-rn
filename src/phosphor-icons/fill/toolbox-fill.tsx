import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToolboxFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 64h-48v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H32a16 16 0 0 0-16 16v28a4 4 0 0 0 4 4h44V96.27A8.17 8.17 0 0 1 71.47 88 8 8 0 0 1 80 96v16h96V96.27a8.17 8.17 0 0 1 7.47-8.27 8 8 0 0 1 8.53 8v16h44a4 4 0 0 0 4-4V80a16 16 0 0 0-16-16Zm-64 0H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm80 68v60a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-60a4 4 0 0 1 4-4h44v16a8 8 0 0 0 8.53 8 8.17 8.17 0 0 0 7.47-8.27V128h96v16a8 8 0 0 0 8.53 8 8.17 8.17 0 0 0 7.47-8.25V128h44a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgToolboxFill);
export default Memo;
