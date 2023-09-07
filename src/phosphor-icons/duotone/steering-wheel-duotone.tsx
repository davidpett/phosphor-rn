import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSteeringWheelDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M222.4 145.55a96.6 96.6 0 0 1-3.86 14.45h-53a8 8 0 0 0-7.5 5.19l-21.9 58.47c-2.69.22-5.41.34-8.15.34s-5.5-.12-8.2-.35L97.94 165.2a8 8 0 0 0-7.49-5.2h-53a96.6 96.6 0 0 1-3.86-14.45 128 128 0 0 1 188.8 0Z"
      opacity={0.2}
    />
    <Path d="M128 152a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm104-24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-192 0v.33a135.93 135.93 0 0 1 176 0V128a88 88 0 0 0-176 0Zm67.5 85.58L90.45 168H49.63a88.35 88.35 0 0 0 57.87 45.58ZM128 216h2.49l20.07-53.57a16.07 16.07 0 0 1 15-10.39h47.12c.38-1.31.72-2.64 1-4a120 120 0 0 0-171.4 0c.31 1.34.65 2.67 1 4h47.17a16.08 16.08 0 0 1 15 10.4l20 53.56H128Zm78.37-48h-40.82l-17.09 45.59A88.34 88.34 0 0 0 206.37 168Z" />
  </Svg>
);
const Memo = memo(SvgSteeringWheelDuotone);
export default Memo;
