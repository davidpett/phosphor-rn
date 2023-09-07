import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiscordLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M104 140a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm60-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm74.45 64.9-67 29.71a16.17 16.17 0 0 1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11 22a16.18 16.18 0 0 1-21.71 9.1l-67-29.71a15.93 15.93 0 0 1-9.06-18.51L38 58a16.07 16.07 0 0 1 13-11.86l36.06-5.93a16.22 16.22 0 0 1 18.26 11.88l3.26 12.84Q118.11 64 128 64t19.4.93l3.26-12.84a16.21 16.21 0 0 1 18.26-11.88L205 46.14A16.07 16.07 0 0 1 218 58l29.53 116.38a15.93 15.93 0 0 1-9.08 18.52ZM232 178.28 202.47 62h-.08l-36.06-6a.17.17 0 0 0-.17 0l-2.83 11.14c5 .94 10 2.06 14.83 3.42A8 8 0 0 1 176 86.31a8.09 8.09 0 0 1-2.16-.3A172.25 172.25 0 0 0 128 80a172.25 172.25 0 0 0-45.84 6 8 8 0 1 1-4.32-15.4c4.82-1.36 9.78-2.48 14.82-3.42L89.83 56h-.12l-36.1 5.93a.17.17 0 0 0-.09 0L24 178.33 91 208a.23.23 0 0 0 .22 0L98 189.72a173.2 173.2 0 0 1-20.14-4.32 8 8 0 0 1 4.3-15.4 171.85 171.85 0 0 0 45.84 6 171.85 171.85 0 0 0 45.84-6 8 8 0 0 1 4.32 15.41 173.2 173.2 0 0 1-20.16 4.31l6.75 18.28a.22.22 0 0 0 .21 0Z" />
  </Svg>
);
const Memo = memo(SvgDiscordLogo);
export default Memo;
