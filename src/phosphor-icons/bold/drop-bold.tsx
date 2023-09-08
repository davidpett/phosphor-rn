import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDropBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M134.88 6.17a12 12 0 0 0-13.76 0 259 259 0 0 0-42.18 39C50.85 77.43 36 111.62 36 144a92 92 0 0 0 184 0c0-77.36-81.64-135.4-85.12-137.83ZM128 212a68.07 68.07 0 0 1-68-68c0-33.31 20-63.37 36.7-82.71A249.35 249.35 0 0 1 128 31.11a249.35 249.35 0 0 1 31.3 30.18C176 80.63 196 110.69 196 144a68.07 68.07 0 0 1-68 68Zm49.62-52.4a52 52 0 0 1-34 34 12.2 12.2 0 0 1-3.6.55 12 12 0 0 1-3.6-23.45 28 28 0 0 0 18.32-18.32 12 12 0 0 1 22.9 7.2Z" />
  </Svg>
);
const Memo = memo(SvgDropBold);
export default Memo;
