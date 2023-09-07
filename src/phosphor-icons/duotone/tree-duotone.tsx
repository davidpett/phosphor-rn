import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTreeDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M232 127.82a64 64 0 0 1-99.52 53.41 8 8 0 0 0-9 0A64 64 0 1 1 61.25 69.86a8 8 0 0 0 4-4.17 68 68 0 0 1 125.44 0 8 8 0 0 0 4 4.17A64 64 0 0 1 232 127.82Z"
      opacity={0.2}
    />
    <Path d="M198.1 62.6a76 76 0 0 0-140.2 0A72.29 72.29 0 0 0 16 127.8c-.11 38.82 31.36 71.2 70.14 72.2a71.68 71.68 0 0 0 33.86-7.51V232a8 8 0 0 0 16 0v-39.51a71.45 71.45 0 0 0 32 7.51h1.86c38.78-1 70.25-33.36 70.14-72.18a72.26 72.26 0 0 0-41.9-65.22ZM169.45 184a55.7 55.7 0 0 1-32.52-9.4q-.47-.3-.93-.57v-41.09l43.58-21.78a8 8 0 1 0-7.16-14.32L136 115.06V88a8 8 0 0 0-16 0v51.06l-36.42-18.22a8 8 0 1 0-7.16 14.32L120 156.94V174c-.31.18-.62.37-.92.57A55.73 55.73 0 0 1 86.55 184a56 56 0 0 1-22-106.86 15.9 15.9 0 0 0 8.05-8.33 60 60 0 0 1 110.7 0 15.9 15.9 0 0 0 8.05 8.33 56 56 0 0 1-22 106.86Z" />
  </Svg>
);
const Memo = memo(SvgTreeDuotone);
export default Memo;
