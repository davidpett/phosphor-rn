import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaperPlaneThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234.43 202.08 138.35 34.14a12 12 0 0 0-20.92 0l-95.88 168A12 12 0 0 0 32 220a12 12 0 0 0 4-.7l90.48-31.05h.05a4.09 4.09 0 0 1 2.74 0l90.66 31a12 12 0 0 0 14.49-17.2Zm-7.43 8.48a3.93 3.93 0 0 1-4.45 1.17l-90.59-31V120a4 4 0 0 0-8 0v60.65h-.13l-90.5 31.06a4 4 0 0 1-4.85-5.7l95.87-168a4 4 0 0 1 7 0l96.08 168a3.89 3.89 0 0 1-.43 4.55Z" />
  </Svg>
);
const Memo = memo(SvgPaperPlaneThin);
export default Memo;
