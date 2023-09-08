import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBalloonThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a84.09 84.09 0 0 0-84 84c0 22.57 9.08 47.63 24.28 67 12.68 16.17 28 26.81 44.22 31l-12.18 28.4A4 4 0 0 0 104 236h48a4 4 0 0 0 3.68-5.58L143.5 202c16.23-4.17 31.54-14.81 44.22-31 15.2-19.41 24.28-44.47 24.28-67a84.09 84.09 0 0 0-84-84Zm17.93 208h-35.86l10.48-24.46a60.56 60.56 0 0 0 14.9 0ZM128 196c-42.1 0-76-50.33-76-92a76 76 0 0 1 152 0c0 41.67-33.9 92-76 92Zm52-100.66a4 4 0 0 1-3.29 4.61 5 5 0 0 1-.66 0 4 4 0 0 1-3.95-3.34A45.31 45.31 0 0 0 135.34 60a4 4 0 0 1 1.32-7.9A53.46 53.46 0 0 1 180 95.34Z" />
  </Svg>
);
const Memo = memo(SvgBalloonThin);
export default Memo;
