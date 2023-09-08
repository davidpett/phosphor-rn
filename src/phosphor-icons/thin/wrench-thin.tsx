import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWrenchThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M223.05 70.5a4 4 0 0 0-6.42-1.44l-41.82 38.6L153 103l-4.68-21.79 38.6-41.82a4 4 0 0 0-1.44-6.43A68 68 0 0 0 98.94 126L36.4 180l-.21.2a28 28 0 0 0 39.6 39.6l.2-.21 54-62.54A68 68 0 0 0 228 96a67.51 67.51 0 0 0-4.95-25.5ZM160 156a60 60 0 0 1-29-7.47 4 4 0 0 0-5 .89l-56 64.83A20 20 0 0 1 41.75 186l64.82-56a4 4 0 0 0 .89-5 60 60 0 0 1 69.46-86.59l-35.87 38.88a4 4 0 0 0-1 3.55l5.66 26.35a4 4 0 0 0 3.07 3.07l26.35 5.66a4 4 0 0 0 3.55-1l38.87-35.87A60.05 60.05 0 0 1 160 156Z" />
  </Svg>
);
const Memo = memo(SvgWrenchThin);
export default Memo;
