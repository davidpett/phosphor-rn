import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPushPinSlashThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M51 37.31a4 4 0 0 0-6 5.38L75.35 76c-9.93.88-22.26 4.54-34.87 14.71a12 12 0 0 0-1 17.84l51.13 51.13-45.44 45.49a4 4 0 0 0 5.66 5.66l45.46-45.47 51.12 51.12a12 12 0 0 0 8.49 3.52h.85a12 12 0 0 0 8.73-4.74 81.06 81.06 0 0 0 13.19-25.55l26.37 29a4 4 0 1 0 5.92-5.38Zm108.08 173.11a4 4 0 0 1-6 .4L45.17 102.93a4 4 0 0 1 .33-6c14.08-11.36 27.62-13.5 37-13.12l89.69 98.65c-2.12 11.46-8.19 21.46-13.11 27.96Zm73.41-109.25L187.85 146a4 4 0 0 1-5.67-5.64l44.65-44.8a4 4 0 0 0 0-5.66l-60.68-60.73a4 4 0 0 0-5.66 0l-41.22 41.36a4 4 0 0 1-5.67-5.65l41.23-41.36a12 12 0 0 1 17 0l60.66 60.68a12 12 0 0 1 0 16.97Z" />
  </Svg>
);
const Memo = memo(SvgPushPinSlashThin);
export default Memo;
