import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCursorClickDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M213.66 201 201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z"
      opacity={0.2}
    />
    <Path d="m169.64 134.33 44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.79a15.83 15.83 0 0 0 14.6-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76.06-.05Zm95.15-.09-49.66-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31ZM88 24v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0ZM8 96a8 8 0 0 1 8-8h8a8 8 0 0 1 0 16h-8a8 8 0 0 1-8-8Zm112.85-67.58 8-16a8 8 0 0 1 14.31 7.16l-8 16a8 8 0 1 1-14.31-7.16Zm-81.69 96a8 8 0 0 1-3.58 10.74l-16 8a8 8 0 0 1-7.16-14.31l16-8a8 8 0 0 1 10.74 3.57Z" />
  </Svg>
);
const Memo = memo(SvgCursorClickDuotone);
export default Memo;
