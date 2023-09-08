import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWavesBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M28 72a12 12 0 0 1 3.51-8.49 61.26 61.26 0 0 1 15.12-10.24A92.82 92.82 0 0 1 88 44c19.63 0 34 9.57 46.66 18 11.25 7.5 21 14 33.34 14 26.1 0 39.08-12.07 39.62-12.58A11.61 11.61 0 0 1 216 60a12 12 0 0 1 8.49 20.49 61.26 61.26 0 0 1-15.12 10.24A92.82 92.82 0 0 1 168 100c-19.63 0-34-9.57-46.66-18-11.25-7.5-21-14-33.34-14-26.1 0-39 12-39.51 12.49A12 12 0 0 1 28 72Zm188 100a11.61 11.61 0 0 0-8.38 3.42c-.54.51-13.52 12.58-39.62 12.58-12.37 0-22.09-6.48-33.34-14-12.67-8.45-27-18-46.66-18a92.82 92.82 0 0 0-41.37 9.27 61.26 61.26 0 0 0-15.12 10.24 12 12 0 0 0 17 17C49 192 61.9 180 88 180c12.37 0 22.09 6.48 33.34 14 12.67 8.45 27 18 46.66 18a92.82 92.82 0 0 0 41.37-9.27 61.26 61.26 0 0 0 15.12-10.24A12 12 0 0 0 216 172Zm0-56a11.61 11.61 0 0 0-8.38 3.42c-.54.51-13.52 12.58-39.62 12.58-12.37 0-22.09-6.48-33.34-14-12.67-8.45-27-18-46.66-18a92.82 92.82 0 0 0-41.37 9.27 61.26 61.26 0 0 0-15.12 10.24 12 12 0 0 0 17 17C49 136 61.9 124 88 124c12.37 0 22.09 6.48 33.34 14 12.67 8.45 27 18 46.66 18a92.82 92.82 0 0 0 41.37-9.27 61.26 61.26 0 0 0 15.12-10.24A12 12 0 0 0 216 116Z" />
  </Svg>
);
const Memo = memo(SvgWavesBold);
export default Memo;
