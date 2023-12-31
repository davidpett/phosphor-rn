import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCompassToolLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M213.34 122.73a6 6 0 1 0-10.68-5.46 81.79 81.79 0 0 1-35.81 35.36l-18.14-40.8A38 38 0 0 0 134 42.48V24a6 6 0 0 0-12 0v18.48a38 38 0 0 0-14.71 69.35L58.52 221.56a6 6 0 1 0 11 4.88l25.9-58.26A93.37 93.37 0 0 0 128 174a97 97 0 0 0 32.68-5.69l25.84 58.13a6 6 0 1 0 11-4.88l-25.77-58a93.92 93.92 0 0 0 41.59-40.83ZM128 54a26 26 0 1 1-26 26 26 26 0 0 1 26-26Zm0 108a81.51 81.51 0 0 1-27.73-4.83l18-40.45a37.85 37.85 0 0 0 19.52 0l18 40.6A85.34 85.34 0 0 1 128 162Z" />
  </Svg>
);
const Memo = memo(SvgCompassToolLight);
export default Memo;
