import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonArmsSpread = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 40a32 32 0 1 0-32 32 32 32 0 0 0 32-32Zm-32 16a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm103.5 31.71A19.62 19.62 0 0 0 212 72H44a20 20 0 0 0-8.38 38.16h.13l50.75 22.35-21 79.72A20 20 0 0 0 102 228.8l26-44.87 26 44.87a20 20 0 0 0 36.4-16.52l-21-79.72 50.75-22.35h.13a19.64 19.64 0 0 0 11.22-22.5Zm-17.8 7.9-56.93 25.06a8 8 0 0 0-4.51 9.36L175.13 217a7 7 0 0 0 .49 1.35 4 4 0 0 1-5 5.45 4 4 0 0 1-2.25-2.07 6.31 6.31 0 0 0-.34-.63L134.92 164a8 8 0 0 0-13.84 0L88 221.05a6.31 6.31 0 0 0-.34.63 4 4 0 0 1-2.25 2.07 4 4 0 0 1-5-5.45 7 7 0 0 0 .49-1.35L103.74 130a8 8 0 0 0-4.51-9.36L42.3 95.61A4 4 0 0 1 44 88h168a4 4 0 0 1 1.73 7.61Z" />
  </Svg>
);
const Memo = memo(SvgPersonArmsSpread);
export default Memo;
