import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFishFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168.06 75.94a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm39.87 81c-20.76 26.37-53.85 40.74-98.41 42.77l-22 51.42a8 8 0 0 1-7.39 4.87h-.51a8 8 0 0 1-7.19-5.78l-14.81-51.85L5.8 183.53a8 8 0 0 1-1-15.05l51.43-22c2-44.57 16.41-77.66 42.79-98.41 43.21-34 104.91-22.83 116.84-20.25a16 16 0 0 1 12.26 12.26C230.76 52 241.94 113.76 207.93 157Zm4.6-113.49c-10.71-2.32-66-12.39-103.57 17.18a80.9 80.9 0 0 0-12.83 12.69 36 36 0 0 0 39.36 38.47 8 8 0 0 1 8.72 8.72 36 36 0 0 0 38.49 39.36 80.64 80.64 0 0 0 12.65-12.81c29.57-37.57 19.5-92.88 17.18-103.59Z" />
  </Svg>
);
const Memo = memo(SvgFishFill);
export default Memo;
