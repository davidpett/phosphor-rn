import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStrategyDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M96 188a28 28 0 1 1-28-28 28 28 0 0 1 28 28Z" opacity={0.2} />
    <Path d="M68 152a36 36 0 1 0 36 36 36 36 0 0 0-36-36Zm0 56a20 20 0 1 1 20-20 20 20 0 0 1-20 20ZM34.34 106.34 48.69 92 34.34 77.66a8 8 0 0 1 11.32-11.32L60 80.69l14.34-14.35a8 8 0 0 1 11.32 11.32L71.31 92l14.35 14.34a8 8 0 0 1-11.32 11.32L60 103.31l-14.34 14.35a8 8 0 0 1-11.32-11.32Zm187.32 96a8 8 0 0 1-11.32 11.32L196 199.31l-14.34 14.35a8 8 0 0 1-11.32-11.32L184.69 188l-14.35-14.34a8 8 0 0 1 11.32-11.32L196 176.69l14.34-14.35a8 8 0 0 1 11.32 11.32L207.31 188Zm-45.19-89.51c-6.18 22.33-25.32 41.63-46.53 46.93a8.13 8.13 0 0 1-2 .24 8 8 0 0 1-1.93-15.76c15.63-3.91 30.35-18.91 35-35.68 3.19-11.5 3.22-29-14.71-46.9l-2.3-2.35V80a8 8 0 0 1-16 0V40a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16h-20.69l2.35 2.34c18.24 18.25 24.92 40.44 18.81 62.49Z" />
  </Svg>
);
const Memo = memo(SvgStrategyDuotone);
export default Memo;
