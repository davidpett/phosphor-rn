import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMegaphoneDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M232 120a40 40 0 0 1-40 40h-40V80h40a40 40 0 0 1 40 40Z"
      opacity={0.2}
    />
    <Path d="M240 120a48.05 48.05 0 0 0-48-48h-39.8c-2.91-.17-53.62-3.74-101.91-44.24A16 16 0 0 0 24 40v160a16 16 0 0 0 26.29 12.25c37.77-31.68 77-40.76 93.71-43.3v31.72a16 16 0 0 0 7.12 13.33l11 7.33A16 16 0 0 0 186.5 212l11.77-44.36A48.07 48.07 0 0 0 240 120ZM40 199.93V40c42.81 35.91 86.63 45 104 47.24v65.48c-17.35 2.28-61.16 11.35-104 47.21Zm131 8v.11l-11-7.33V168h21.6ZM192 152h-32V88h32a32 32 0 1 1 0 64Z" />
  </Svg>
);
const Memo = memo(SvgMegaphoneDuotone);
export default Memo;
