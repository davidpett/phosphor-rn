import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFishSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 76a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm31.54 90.77c-27.06 27-69.42 38.35-126.32 33.95q2.39 17.84 6.7 37.57a8 8 0 0 1-6.11 9.52 7.81 7.81 0 0 1-1.72.19 8 8 0 0 1-7.8-6.29q-4.91-22.43-7.39-42.64-20.2-2.49-42.61-7.39a8 8 0 0 1 3.42-15.63q19.71 4.3 37.54 6.7c-4.39-56.89 7-99.24 34-126.29C133 12.58 202.43 24.9 215.9 27.82a16.07 16.07 0 0 1 12.28 12.28c2.92 13.47 15.25 82.9-28.64 126.67Zm13-123.28a167.84 167.84 0 0 0-49.25-2.78c-20.24 2-37.4 7.83-51.25 17.46A88 88 0 0 0 197.83 144c9.62-13.85 15.49-31 17.46-51.25a169 169 0 0 0-2.75-49.26Z" />
  </Svg>
);
const Memo = memo(SvgFishSimpleFill);
export default Memo;
