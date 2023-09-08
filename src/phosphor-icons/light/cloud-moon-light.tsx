import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudMoonLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 74a74.41 74.41 0 0 0-14.17 1.36 70 70 0 0 0-54.11-63.59A6 6 0 0 0 88.53 19 58.06 58.06 0 0 1 19 88.53a6 6 0 0 0-7.19 7.19 70.22 70.22 0 0 0 33.3 44.95A50 50 0 0 0 84 222h80a74 74 0 0 0 0-148ZM26.22 101.76q2.88.24 5.78.24a70.08 70.08 0 0 0 70-70c0-1.94-.08-3.88-.24-5.8A57.64 57.64 0 0 1 138 78.71 74.32 74.32 0 0 0 94.2 123a50.36 50.36 0 0 0-10.2-1 49.74 49.74 0 0 0-29.86 9.92 58.24 58.24 0 0 1-27.92-30.16ZM164 210H84a38 38 0 1 1 7.08-75.34 75.84 75.84 0 0 0-1.07 9 6 6 0 0 0 12 .7 61.54 61.54 0 0 1 2-12.24c0-.15.08-.29.11-.43A62.06 62.06 0 1 1 164 210Z" />
  </Svg>
);
const Memo = memo(SvgCloudMoonLight);
export default Memo;
