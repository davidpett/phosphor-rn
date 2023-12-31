import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaintBucketThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230.5 164.88a4 4 0 0 0-5 0c-.88.7-21.5 17.45-21.5 39.12a24 24 0 0 0 48 0c0-21.67-20.62-38.42-21.5-39.12ZM228 220a16 16 0 0 1-16-16c0-13.75 10.95-25.8 16-30.63 5.05 4.83 16 16.88 16 30.63a16 16 0 0 1-16 16Zm-1.17-99.34L119.34 13.17a4 4 0 0 0-5.65 0L70.25 56.6 42.82 29.17a4 4 0 0 0-5.65 5.66L64.6 62.26 17.86 109a20 20 0 0 0 0 28.29l84.85 84.85a20 20 0 0 0 28.29 0l95.83-95.83a4 4 0 0 0 0-5.65Zm-101.49 95.82a12 12 0 0 1-17 0l-84.83-84.85a12 12 0 0 1 0-17l46.74-46.71 34.2 34.2A24 24 0 0 0 141 133a24 24 0 0 0-30.86-36.51l-34.2-34.2 40.61-40.6 101.79 101.79Zm10-89.17a16 16 0 1 1 0-22.62 16 16 0 0 1-.03 22.62Z" />
  </Svg>
);
const Memo = memo(SvgPaintBucketThin);
export default Memo;
