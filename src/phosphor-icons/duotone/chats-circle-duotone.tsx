import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatsCircleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M231.76 216.34a6 6 0 0 1-7.42 7.42l-29.87-8.53a72.05 72.05 0 0 1-102.41-39.34c1.3.07 2.61.11 3.93.11a72 72 0 0 0 67.93-95.88 72 72 0 0 1 59.29 106.36Z"
      opacity={0.2}
    />
    <Path d="M231.79 187.33a80 80 0 0 0-62.22-114.74 80 80 0 1 0-145.36 66.74l-7.66 26.82a14 14 0 0 0 17.3 17.3l26.82-7.66a80.15 80.15 0 0 0 25.75 7.63 80 80 0 0 0 108.91 40.37l26.82 7.66a14 14 0 0 0 17.3-17.3Zm-170.26-28.1a8.22 8.22 0 0 0-2.2.3l-26.41 7.55 7.55-26.41a8 8 0 0 0-.68-6 63.95 63.95 0 1 1 25.57 25.57 7.94 7.94 0 0 0-3.83-1.01Zm154 29.44 7.55 26.41-26.41-7.55a8 8 0 0 0-6 .68 64.06 64.06 0 0 1-86.32-24.64 79.93 79.93 0 0 0 70.35-93.86 64 64 0 0 1 41.51 92.93 8 8 0 0 0-.68 6.03Z" />
  </Svg>
);
const Memo = memo(SvgChatsCircleDuotone);
export default Memo;
