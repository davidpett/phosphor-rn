import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUploadSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 80H88l40-40Z" opacity={0.2} />
    <Path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0ZM80.61 83.06a8 8 0 0 1 1.73-8.72l40-40a8 8 0 0 1 11.32 0l40 40A8 8 0 0 1 168 88h-32v64a8 8 0 0 1-16 0V88H88a8 8 0 0 1-7.39-4.94ZM107.31 72h41.38L128 51.31Z" />
  </Svg>
);
const Memo = memo(SvgUploadSimpleDuotone);
export default Memo;
