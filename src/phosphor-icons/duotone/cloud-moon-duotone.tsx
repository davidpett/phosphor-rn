import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudMoonDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M98.31 130.38ZM94.38 17.62a64.06 64.06 0 0 1-76.76 76.76A64.12 64.12 0 0 0 55 138.93a44.08 44.08 0 0 1 43.33-8.54 68.13 68.13 0 0 1 45.47-47.32h.15c0-1 .07-2 .07-3a64 64 0 0 0-49.64-62.45Z"
      opacity={0.2}
    />
    <Path d="M164 72a76.45 76.45 0 0 0-12.36 1A71.93 71.93 0 0 0 96.17 9.83a8 8 0 0 0-9.59 9.58A56.45 56.45 0 0 1 88 32a56.06 56.06 0 0 1-56 56 56.45 56.45 0 0 1-12.59-1.42 8 8 0 0 0-9.59 9.59 72.22 72.22 0 0 0 32.29 45.06A52 52 0 0 0 84 224h80a76 76 0 0 0 0-152ZM29.37 104H32a72.08 72.08 0 0 0 72-72v-2.67a55.63 55.63 0 0 1 32 48 76.28 76.28 0 0 0-43 43.4 52 52 0 0 0-39 8.86A56.22 56.22 0 0 1 29.37 104ZM164 208H84a36 36 0 1 1 4.78-71.69c-.37 2.37-.63 4.79-.77 7.23a8 8 0 0 0 16 .92 58.91 58.91 0 0 1 1.88-11.81c0-.16.09-.32.12-.48A60.06 60.06 0 1 1 164 208Z" />
  </Svg>
);
const Memo = memo(SvgCloudMoonDuotone);
export default Memo;
