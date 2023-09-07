import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMosqueBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 124a32 32 0 0 0-8.06 1c-1.29-41.54-29.35-62.32-50-77.58C150.18 38.73 140 31.21 140 24a12 12 0 0 0-24 0c0 7.21-10.18 14.73-22 23.45-20.63 15.26-48.69 36-50 77.58A32 32 0 0 0 4 156v52a12 12 0 0 0 12 12h224a12 12 0 0 0 12-12v-52a32 32 0 0 0-32-32ZM44 196H28v-40a8 8 0 0 1 16 0Zm64.31-129.26c7-5.14 14-10.36 19.69-16.27 5.68 5.91 12.74 11.13 19.69 16.27C164.8 79.4 182.4 92.44 186.9 116H69.1c4.5-23.56 22.1-36.6 39.21-49.26ZM188 196h-24v-28a12 12 0 0 0-24 0v28h-24v-28a12 12 0 0 0-24 0v28H68v-56h120Zm40 0h-16v-40a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgMosqueBold);
export default Memo;
