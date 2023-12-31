import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartBreakDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M232 94c0 66-104 122-104 122S24 160 24 94a54 54 0 0 1 92.18-38.18L128 67.63l11.82-11.81A54 54 0 0 1 232 94Z"
      opacity={0.2}
    />
    <Path d="M178 32a61.6 61.6 0 0 0-43.84 18.16L128 56.32l-6.16-6.16A62 62 0 0 0 16 94c0 70 103.79 126.67 108.21 129a8 8 0 0 0 7.58 0C136.21 220.67 240 164 240 94a62.07 62.07 0 0 0-62-62Zm-50 174.8C109.74 196.16 32 147.69 32 94a46 46 0 0 1 78.53-32.53l6.16 6.16L106.34 78a8 8 0 0 0 0 11.31l24.53 24.53-16.53 16.52a8 8 0 0 0 11.32 11.32l22.18-22.19a8 8 0 0 0 0-11.31l-24.53-24.55 22.16-22.16A46 46 0 0 1 224 94c0 53.61-77.76 102.15-96 112.8Z" />
  </Svg>
);
const Memo = memo(SvgHeartBreakDuotone);
export default Memo;
