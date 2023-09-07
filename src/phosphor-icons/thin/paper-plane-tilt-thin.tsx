import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaperPlaneTiltThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224.47 31.52a11.87 11.87 0 0 0-11.82-3L20.74 86.67a12 12 0 0 0-1.88 22.4l85.61 40.55a4 4 0 0 1 1.91 1.9l40.55 85.62a11.88 11.88 0 0 0 10.81 6.86h1a11.89 11.89 0 0 0 10.52-8.63l58.21-192v-.08a11.85 11.85 0 0 0-3-11.77Zm-4.62 9.54-58.23 192a4 4 0 0 1-7.46.63l-40.55-85.59 49.24-49.23a4 4 0 1 0-5.66-5.66l-49.24 49.24-85.66-40.61a3.88 3.88 0 0 1-2.27-4 3.93 3.93 0 0 1 3-3.54L214.9 36.16A3.93 3.93 0 0 1 216 36a4 4 0 0 1 2.79 1.19 3.93 3.93 0 0 1 1.06 3.87Z" />
  </Svg>
);
const Memo = memo(SvgPaperPlaneTiltThin);
export default Memo;
