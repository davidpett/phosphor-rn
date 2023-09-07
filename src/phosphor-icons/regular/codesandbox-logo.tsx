import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodesandboxLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m223.68 66.15-88-48.15a15.94 15.94 0 0 0-15.36 0l-88 48.18a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03ZM168 152v50.09l-32 17.52v-86.87l80-43.8v32l-43.84 24A8 8 0 0 0 168 152Zm-84.16-7L40 121V89l80 43.8v86.87l-32-17.58V152a8 8 0 0 0-4.16-7Zm-.7-88.41 41 22.45a8 8 0 0 0 7.68 0l41-22.45 34.48 18.87-79.3 43.42-79.34-43.44ZM128 32l28.2 15.44L128 62.89 99.8 47.45ZM40 139.22l32 17.52v36.59l-32-17.51Zm144 54.11v-36.59l32-17.52v36.6Z" />
  </Svg>
);
const Memo = memo(SvgCodesandboxLogo);
export default Memo;
