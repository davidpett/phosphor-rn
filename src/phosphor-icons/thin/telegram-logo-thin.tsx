import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTelegramLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234.27 29.22a5 5 0 0 0-5.1-.87L26.51 107.66a10.22 10.22 0 0 0 1.75 19.56L84 138.16V200a12 12 0 0 0 7.51 11.13A12.1 12.1 0 0 0 96 212a12 12 0 0 0 8.62-3.68l28-29 43 37.71a12 12 0 0 0 7.89 3 12.47 12.47 0 0 0 3.74-.59 11.87 11.87 0 0 0 8-8.72l40.62-176.6a5 5 0 0 0-1.6-4.9ZM28 117.38a2.13 2.13 0 0 1 1.42-2.27l174.65-68.35-117 83.85-57.26-11.24a2.12 2.12 0 0 1-1.81-1.99Zm70.87 85.38A4 4 0 0 1 92 200v-56.3l34.58 30.3Zm88.58 6.14a4 4 0 0 1-6.57 2.09l-86.45-75.81 131.7-94.38Z" />
  </Svg>
);
const Memo = memo(SvgTelegramLogoThin);
export default Memo;
