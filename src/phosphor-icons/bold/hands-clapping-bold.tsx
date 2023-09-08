import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandsClappingBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 20v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0Zm41.83 21.41a12 12 0 0 0 16.71-2.95l4.59-6.55a12 12 0 1 0-19.66-13.77l-4.59 6.55a12 12 0 0 0 2.95 16.72Zm49.45 13.87a12 12 0 0 0-15.38-7.18l-7.52 2.74a12 12 0 0 0 8.21 22.56l7.51-2.74a12 12 0 0 0 7.18-15.38Zm-30.55 36.21a83.69 83.69 0 0 1-12.51 100.58A84 84 0 0 1 59 210l-35-60.62a30 30 0 0 1 16.5-43.46l-1.3-2.25A30 30 0 0 1 56 60.11a30 30 0 0 1 46.62-30.55 30 30 0 0 1 48 5.45l9.3 16.11a29.54 29.54 0 0 1 4.89-3.52 30 30 0 0 1 41 11Zm-50.17-14.91 5.61 9.72a30.12 30.12 0 0 1 5.34 6.79l19 32.91a84.66 84.66 0 0 1 7 15.54 60 60 0 0 0-7.56-38L185 70.58a6 6 0 1 0-10.39 6ZM119.38 53l5.62 9.77a29.8 29.8 0 0 1 5.33 6.75l9.31 16.1a29.83 29.83 0 0 1 4.88-3.51 30.46 30.46 0 0 1 4.32-2.06L129.77 47a6 6 0 1 0-10.39 6ZM80.2 57.15l3.33 5.77a29.65 29.65 0 0 1 5.83-4.38 30.88 30.88 0 0 1 4.31-2.06l-3.07-5.33a6 6 0 0 0-3.6-2.79 6 6 0 0 0-6.75 8.79Zm109.52 126.39a59.64 59.64 0 0 0-6-45.54l-19-32.91a6 6 0 0 0-11 1.45 6.06 6.06 0 0 0 .28 3.92L165.33 130a12 12 0 1 1-20.77 12l-35-60.5a6 6 0 0 0-10.46 5.9l24.62 42.6a12 12 0 1 1-20.78 12L70.38 85.66a6 6 0 1 0-10.4 6L96 154a12 12 0 0 1-20.79 12l-20-34.64a6 6 0 1 0-10.39 6l35 60.63a60 60 0 0 0 109.91-14.47Z" />
  </Svg>
);
const Memo = memo(SvgHandsClappingBold);
export default Memo;
