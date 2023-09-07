import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaypalLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M217 96a51.69 51.69 0 0 0-21-16 52 52 0 0 0-52-52H84a12 12 0 0 0-11.65 9.09l-36 144A12 12 0 0 0 48 196h31.5a10.6 10.6 0 0 0 1.14-.06l-4.29 17.15A12 12 0 0 0 88 228h31.5a12 12 0 0 0 11.64-9.09l9-35.88a4 4 0 0 1 3.88-3h32a52 52 0 0 0 41-84ZM48 188a4 4 0 0 1-3.89-5l36-144A4 4 0 0 1 84 36h60a44 44 0 0 1 43.93 41.37A52.53 52.53 0 0 0 176 76h-56a12 12 0 0 0-11.65 9.09L83.39 185a4 4 0 0 1-3.88 3ZM187.63 85.56a43 43 0 0 1-1 5.11A43.94 43.94 0 0 1 144 124h-36a10.6 10.6 0 0 0-1.14.06l9.25-37A4 4 0 0 1 120 84h56a44.3 44.3 0 0 1 11.63 1.56Zm31 53.11A43.94 43.94 0 0 1 176 172h-32a12 12 0 0 0-11.64 9.09l-9 35.88a4 4 0 0 1-3.88 3H88a4 4 0 0 1-3.89-5l20-80a4 4 0 0 1 3.89-3h36a51.92 51.92 0 0 0 50.44-39.39c.35-1.39.62-2.79.85-4.19a44.08 44.08 0 0 1 23.39 50.25Z" />
  </Svg>
);
const Memo = memo(SvgPaypalLogoThin);
export default Memo;
