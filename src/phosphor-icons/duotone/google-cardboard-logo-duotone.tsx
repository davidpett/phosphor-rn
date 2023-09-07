import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGoogleCardboardLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 56H32a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h60.69a8 8 0 0 0 5.65-2.34l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 0 5.65 2.34H224a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8ZM80 152a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm96 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z"
      opacity={0.2}
    />
    <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h60.69a15.86 15.86 0 0 0 11.31-4.69l24-24 24 24a15.89 15.89 0 0 0 11.31 4.69H224a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm0 144h-60.69l-24-24a16 16 0 0 0-22.62 0l-24 24H32V64h192ZM80 160a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm96 48a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16Z" />
  </Svg>
);
const Memo = memo(SvgGoogleCardboardLogoDuotone);
export default Memo;
