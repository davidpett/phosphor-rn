import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandWavingFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184.27 29.93a8 8 0 0 1 9.8-5.66c15.9 4.27 29 14.11 36.86 27.73a8 8 0 0 1-13.86 8c-5.72-9.92-15.36-17.12-27.14-20.27a8 8 0 0 1-5.66-9.8ZM79.58 225.72c-9.38-7.4-17.22-16.84-24.65-29.72a8 8 0 0 0-13.86 8c8.49 14.7 17.57 25.59 28.6 34.28a8 8 0 0 0 9.91-12.56Zm116.61-167.3a16 16 0 1 0-27.71 16l16 27.71a8 8 0 0 1-2.93 10.93 32 32 0 0 0-11.71 43.71 8 8 0 0 1-13.86 8 48.07 48.07 0 0 1 11-61l-40.35-69.85a16 16 0 0 0-27.72 16l32 55.43a8 8 0 0 1-13.85 8l-40-69.29a16 16 0 0 0-27.72 16l44 76.21a8 8 0 1 1-13.85 8l-28-48.49a16 16 0 1 0-27.72 16l44 76.21a88 88 0 0 0 152.42-88Z" />
  </Svg>
);
const Memo = memo(SvgHandWavingFill);
export default Memo;
