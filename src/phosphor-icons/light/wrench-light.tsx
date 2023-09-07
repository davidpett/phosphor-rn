import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWrenchLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224.91 69.75a6 6 0 0 0-9.63-2.16l-41.07 37.9-19.51-4.19-4.19-19.51 37.9-41.07a6 6 0 0 0-2.16-9.63 70 70 0 0 0-89.77 94.39l-61.39 53c-.11.09-.21.19-.32.3a30 30 0 0 0 42.43 42.45c.11-.11.21-.21.3-.32l53-61.39a70 70 0 0 0 94.39-89.77ZM160 154a58 58 0 0 1-28-7.22 6 6 0 0 0-7.45 1.33l-55.98 64.77a18 18 0 0 1-25.45-25.45l64.76-55.94a6 6 0 0 0 1.32-7.49 58 58 0 0 1 64-84.53l-33.62 36.46a6 6 0 0 0-1.45 5.33l5.65 26.35a6 6 0 0 0 4.61 4.61l26.35 5.65a6 6 0 0 0 5.33-1.45l36.42-33.62A58.06 58.06 0 0 1 160 154Z" />
  </Svg>
);
const Memo = memo(SvgWrenchLight);
export default Memo;
