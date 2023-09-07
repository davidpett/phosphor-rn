import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartHalfBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M170.21 52.72a12 12 0 0 0-4.42-23.59C150.5 32 137.49 39.2 128.08 49.66 116 36 98.14 28 78 28a66.08 66.08 0 0 0-66 66c0 31 18.91 63 56.2 94.87a342.69 342.69 0 0 0 54.11 37.7A12.1 12.1 0 0 0 128 228a11.92 11.92 0 0 0 5.68-1.46A339.75 339.75 0 0 0 175.32 199a12 12 0 0 0-14.64-19A333.659 333.659 0 0 1 140 194.68V74.55c5.43-11.32 16.31-19.23 30.21-21.83ZM116 194.66a318.88 318.88 0 0 1-32.51-24.3C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17 0 31.35 8.57 38 22.52Zm117-94.73a12 12 0 0 1-13.25-10.61 41.89 41.89 0 0 0-18.41-30.25 12 12 0 0 1 13.34-20 65.84 65.84 0 0 1 28.92 47.61A12 12 0 0 1 233 99.93Zm1 33.42c-5.84 11.72-14.33 23.63-25.23 35.43a12 12 0 0 1-17.62-16.29c9.36-10.13 16.55-20.17 21.38-29.84a12 12 0 1 1 21.47 10.7Z" />
  </Svg>
);
const Memo = memo(SvgHeartHalfBold);
export default Memo;