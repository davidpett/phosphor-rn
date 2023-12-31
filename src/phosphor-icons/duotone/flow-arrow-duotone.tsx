import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlowArrowDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M80 176a32 32 0 1 1-32-32 32 32 0 0 1 32 32Z" opacity={0.2} />
    <Path d="m245.66 74.34-32-32a8 8 0 0 0-11.32 11.32L220.69 72H192a74.49 74.49 0 0 0-28.35 6.73c-13.62 6.29-30.83 19.71-35.54 48-5.32 31.93-29.1 39.22-41 40.86a40 40 0 1 0 .18 16.06 71.65 71.65 0 0 0 20.84-5.65c13.62-6 30.87-19.4 35.76-48.69C150.65 88.77 190.34 88 192 88h28.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32ZM48 200a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" />
  </Svg>
);
const Memo = memo(SvgFlowArrowDuotone);
export default Memo;
