import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRocketLaunchLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M101.83 185.45C101.45 187 92.09 222 40 222a6 6 0 0 1-6-6c0-52.09 35.06-61.45 36.55-61.82a6 6 0 0 1 2.91 11.64c-1 .27-24.84 7.08-27.26 44 37.34-2.47 43.92-27 44-27.26a6 6 0 0 1 11.65 2.91Zm93.53-68.32-5.36 5.35v59.17a13.91 13.91 0 0 1-4.1 9.89l-34.35 34.35A14 14 0 0 1 127.8 218l-5.46-39.15-45.16-45.19-39.13-5.46a14 14 0 0 1-7.94-23.76l34.35-34.35A13.9 13.9 0 0 1 74.35 66h59.17l5.35-5.35c26.11-26.11 57.57-27.23 69.88-26.5a14 14 0 0 1 13.11 13.1c.73 12.31-.4 43.75-26.5 69.88Zm-155.63-.81 38.14 5.32L121.52 78H74.35a2 2 0 0 0-1.41.59L38.6 112.92a2 2 0 0 0-.49 2 1.93 1.93 0 0 0 1.62 1.4ZM178 134.48l-43.65 43.65 5.32 38.16a2 2 0 0 0 3.4 1.11l34.34-34.34a2 2 0 0 0 .59-1.41ZM209.88 48a2 2 0 0 0-1.83-1.83 78.47 78.47 0 0 0-60.69 23L88.49 128 128 167.51l51.76-51.75 7.11-7.11A78.47 78.47 0 0 0 209.88 48Z" />
  </Svg>
);
const Memo = memo(SvgRocketLaunchLight);
export default Memo;
