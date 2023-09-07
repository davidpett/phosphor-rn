import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBinocularsDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M104 168a40 40 0 1 1-40-40 40 40 0 0 1 40 40Zm88-40a40 40 0 1 0 40 40 40 40 0 0 0-40-40Z"
      opacity={0.2}
    />
    <Path d="M237.2 151.87a47.1 47.1 0 0 0-2.35-5.45L193.26 51.8a7.82 7.82 0 0 0-1.66-2.44 32 32 0 0 0-45.26 0A8 8 0 0 0 144 55v25h-32V55a8 8 0 0 0-2.34-5.66 32 32 0 0 0-45.26 0 7.82 7.82 0 0 0-1.66 2.44L21.15 146.4a47.1 47.1 0 0 0-2.35 5.45A48 48 0 1 0 112 168V96h32v72a48 48 0 1 0 93.2-16.13ZM76.71 59.75a16 16 0 0 1 19.29-1v73.51a47.9 47.9 0 0 0-46.79-9.92ZM64 200a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm96-141.26a16 16 0 0 1 19.29 1l27.5 62.58a47.9 47.9 0 0 0-46.79 9.93ZM192 200a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" />
  </Svg>
);
const Memo = memo(SvgBinocularsDuotone);
export default Memo;
