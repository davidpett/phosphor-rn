import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCarrotFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 80h-32.56a64 64 0 0 1-10.19 77.26c-8.52 8.69-19.61 16.92-31.85 24.51a4 4 0 0 1-4.91-.59l-34.84-34.84a8 8 0 0 0-11.49.18 8.23 8.23 0 0 0 .41 11.38l29.88 29.88a4 4 0 0 1-1 6.39C95.74 214.79 53 228.54 46.78 230.48a16 16 0 0 1-21.26-21.26c2.73-8.71 29-90.27 64.86-133.35a4 4 0 0 1 5.9-.26l42.05 42.06a8 8 0 0 0 11.71-.43 8.19 8.19 0 0 0-.6-11.1l-41.36-41.36a4 4 0 0 1 .63-6.18 64 64 0 0 1 67.28-2V24a8 8 0 0 1 8.54-8 8.18 8.18 0 0 1 7.47 8.28v28.41l26.34-26.35a8 8 0 0 1 11.32 11.32L203.31 64h28.41a8.18 8.18 0 0 1 8.28 7.47 8 8 0 0 1-8 8.53Z" />
  </Svg>
);
const Memo = memo(SvgCarrotFill);
export default Memo;