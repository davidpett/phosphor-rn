import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaypalLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M191.91 82.7a49 49 0 0 1-1.37 8.94A48 48 0 0 1 144 128h-36a8 8 0 0 0-7.76 6.06l12-48A8 8 0 0 1 120 80h56a48.25 48.25 0 0 1 15.91 2.7Z"
      opacity={0.2}
    />
    <Path d="M220.12 93.54a55.8 55.8 0 0 0-20.19-16.18A56 56 0 0 0 144 24H84a16 16 0 0 0-15.52 12.12l-36 144A16 16 0 0 0 48 200h27.5l-3 12.12A16 16 0 0 0 88 232h31.5a16 16 0 0 0 15.5-12.12l9-35.88h32a56 56 0 0 0 44.14-90.46ZM79.52 184H48L84 40h60a40 40 0 0 1 39.3 32.49A57 57 0 0 0 176 72h-56a16 16 0 0 0-15.53 12.12ZM183 88.62c-.08.36-.15.72-.24 1.08A39.94 39.94 0 0 1 144 120h-32l8-32h56a40.07 40.07 0 0 1 7 .62Zm31.76 49.08A39.94 39.94 0 0 1 176 168h-32a16 16 0 0 0-15.52 12.12l-9 35.88H88l20-80h36a55.9 55.9 0 0 0 54-41.39 40.2 40.2 0 0 1 9.48 8.77 39.73 39.73 0 0 1 7.3 34.32Z" />
  </Svg>
);
const Memo = memo(SvgPaypalLogoDuotone);
export default Memo;
