import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGithubLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M206.13 75.92A57.79 57.79 0 0 0 201.2 29a6 6 0 0 0-5.2-3 57.77 57.77 0 0 0-47 24h-26a57.77 57.77 0 0 0-47-24 6 6 0 0 0-5.2 3 57.79 57.79 0 0 0-4.93 46.92A55.88 55.88 0 0 0 58 104v8a54.06 54.06 0 0 0 50.45 53.87A37.85 37.85 0 0 0 98 192v10H72a26 26 0 0 1-26-26 38 38 0 0 0-38-38 6 6 0 0 0 0 12 26 26 0 0 1 26 26 38 38 0 0 0 38 38h26v18a6 6 0 0 0 12 0v-40a26 26 0 0 1 52 0v40a6 6 0 0 0 12 0v-40a37.85 37.85 0 0 0-10.45-26.13A54.06 54.06 0 0 0 214 112v-8a55.88 55.88 0 0 0-7.87-28.08ZM202 112a42 42 0 0 1-42 42h-48a42 42 0 0 1-42-42v-8a43.86 43.86 0 0 1 7.3-23.69 6 6 0 0 0 .81-5.76 45.85 45.85 0 0 1 1.43-36.42 45.85 45.85 0 0 1 35.23 21.1 6 6 0 0 0 5.06 2.77h32.34a6 6 0 0 0 5.06-2.76 45.83 45.83 0 0 1 35.23-21.11 45.85 45.85 0 0 1 1.43 36.42 6 6 0 0 0 .79 5.74A43.78 43.78 0 0 1 202 104Z" />
  </Svg>
);
const Memo = memo(SvgGithubLogoLight);
export default Memo;
