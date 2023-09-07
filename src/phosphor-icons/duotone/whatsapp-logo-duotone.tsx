import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWhatsappLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M128 32a96 96 0 0 0-83.11 144.07l-12.47 37.39a8 8 0 0 0 10.12 10.12l37.39-12.47A96 96 0 1 0 128 32Zm24 152a80 80 0 0 1-80-80 32 32 0 0 1 32-32l16 32-12.32 18.47a48.19 48.19 0 0 0 25.85 25.85L152 136l32 16a32 32 0 0 1-32 32Z"
      opacity={0.2}
    />
    <Path d="m187.58 144.84-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40 88.1 88.1 0 0 0 88 88 40 40 0 0 0 40-40 8 8 0 0 0-4.42-7.16ZM152 176a72.08 72.08 0 0 1-72-72 24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51 56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155l14.62-9.74 23 11.48A24 24 0 0 1 152 176ZM128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24Zm0 192a87.87 87.87 0 0 1-44.06-11.81 8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216Z" />
  </Svg>
);
const Memo = memo(SvgWhatsappLogoDuotone);
export default Memo;
