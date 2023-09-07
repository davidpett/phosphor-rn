import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 68a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0-48a20 20 0 1 1-20 20 20 20 0 0 1 20-20Zm87.42 116.78-45.25-51.3a28 28 0 0 0-21-9.48h-42.34a28 28 0 0 0-21 9.48l-45.25 51.3a16 16 0 0 0 22.56 22.69L89 138.7l-19.7 74.88a16 16 0 0 0 29.08 13.35L128 176l29.58 51a16 16 0 0 0 29.08-13.35L167 138.7l25.9 20.77a16 16 0 0 0 22.56-22.69Zm-5.76 16.87a8 8 0 0 1-11.31 0 3.11 3.11 0 0 0-.33-.29l-35.51-28.48a4 4 0 0 0-6.38 4.13L179 215.94a4.12 4.12 0 0 0 .24.67 8 8 0 1 1-14.5 6.76c-.05-.11-.11-.21-.17-.32L131.46 166a4 4 0 0 0-6.92 0l-33.12 57.05c-.06.11-.12.21-.17.32a8 8 0 1 1-14.5-6.76 4.12 4.12 0 0 0 .24-.67L99.87 129a4 4 0 0 0-6.38-4.13L58 153.36a3.11 3.11 0 0 0-.33.29 8 8 0 0 1-11.31-11.31l.17-.18 45.3-51.39a20 20 0 0 1 15-6.77h42.34a20 20 0 0 1 15 6.77l45.32 51.39.17.18a8 8 0 0 1 0 11.31Z" />
  </Svg>
);
const Memo = memo(SvgPersonThin);
export default Memo;
