import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTreeLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M197.26 64.41a2 2 0 0 1-1-1 74 74 0 0 0-136.52 0 2 2 0 0 1-1 1A70.25 70.25 0 0 0 18 127.8c-.1 37.74 30.49 69.2 68.2 70.2a69.4 69.4 0 0 0 35.8-8.8V232a6 6 0 0 0 12 0v-42.82a69.54 69.54 0 0 0 34 8.82h1.81c37.7-1 68.29-32.44 68.19-70.18a70.27 70.27 0 0 0-40.74-63.41ZM169.5 186a57.58 57.58 0 0 1-33.69-9.74 14.77 14.77 0 0 0-1.81-1v-43.5l44.68-22.34a6 6 0 1 0-5.36-10.74L134 118.29V88a6 6 0 0 0-12 0v54.29l-39.32-19.66a6 6 0 0 0-5.36 10.74L122 155.71v19.5a14.77 14.77 0 0 0-1.81 1A57.51 57.51 0 0 1 86.5 186 58 58 0 0 1 63.76 75.31 14 14 0 0 0 70.81 68a62 62 0 0 1 114.38 0 14 14 0 0 0 7.05 7.29A58 58 0 0 1 169.5 186Z" />
  </Svg>
);
const Memo = memo(SvgTreeLight);
export default Memo;
