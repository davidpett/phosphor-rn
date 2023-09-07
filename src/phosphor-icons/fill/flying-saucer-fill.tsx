import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlyingSaucerFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M183.59 213.47a8 8 0 0 1-15.18 5.06l-8-24a8 8 0 0 1 15.18-5.06ZM128 184a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8Zm-37.47.41a8 8 0 0 0-10.12 5.06l-8 24a8 8 0 0 0 15.18 5.06l8-24a8 8 0 0 0-5.06-10.12ZM248 112c0 16.22-13.37 30.89-37.65 41.29C188.22 162.78 159 168 128 168s-60.22-5.22-82.35-14.71C21.37 142.89 8 128.22 8 112c0-8.37 3.67-20.79 21.17-32.5 11.37-7.61 26.94-13.76 45.18-17.85A63.64 63.64 0 0 1 173 50.45a64.84 64.84 0 0 1 9.11 11.3C223.43 71.09 248 89.74 248 112Zm-72-16a47.66 47.66 0 0 0-6.06-23.35l-.06-.09A48.07 48.07 0 0 0 127.36 48C101.25 48.34 80 70.25 80 96.83v3a7.92 7.92 0 0 0 6.13 7.76A188.24 188.24 0 0 0 128 112a188.09 188.09 0 0 0 41.85-4.37 7.93 7.93 0 0 0 6.15-7.76Z" />
  </Svg>
);
const Memo = memo(SvgFlyingSaucerFill);
export default Memo;
