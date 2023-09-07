import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWineThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m201.5 96.8-21.78-73.93a4 4 0 0 0-3.83-2.87H80.11a4 4 0 0 0-3.83 2.87L54.5 96.8a59.51 59.51 0 0 0 16.32 60.62A83.39 83.39 0 0 0 124 179.91V228H88a4 4 0 1 0 0 8h80a4 4 0 1 0 0-8h-36v-48.09a83.39 83.39 0 0 0 53.18-22.49A59.51 59.51 0 0 0 201.5 96.8ZM83.1 28h89.8l20.93 71.06c.43 1.49.8 3 1.1 4.47-23.64 10.47-50.76.18-65.12-7.1-28.22-14.29-49.48-14.1-63.88-10.14Zm96.62 123.57a75.68 75.68 0 0 1-103.44 0 51.53 51.53 0 0 1-14.11-52.51l1-3.46c12.66-4.87 33.45-7 63 8C137 109 154.33 116 172.8 116a62.78 62.78 0 0 0 23.2-4.22 51.26 51.26 0 0 1-16.28 39.79Z" />
  </Svg>
);
const Memo = memo(SvgWineThin);
export default Memo;
