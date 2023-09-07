import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDogThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M100 140a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm64 8a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm64.94-9.11a12.12 12.12 0 0 1-5 1.11 11.83 11.83 0 0 1-9.35-4.62l-2.59-3.29V184a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36v-51.91l-2.53 3.27A11.88 11.88 0 0 1 32.1 140a12.08 12.08 0 0 1-5-1.11 11.82 11.82 0 0 1-6.84-13.14l16.42-88a12 12 0 0 1 14.7-9.43h.16L104.58 44h46.84l53.08-15.6h.16a12 12 0 0 1 14.7 9.43l16.42 88a11.81 11.81 0 0 1-6.84 13.06ZM97.25 50.18 49.34 36.1a4.18 4.18 0 0 0-.92-.1 4 4 0 0 0-3.92 3.26l-16.42 88a4 4 0 0 0 7.08 3.22ZM204 121.75 150 52h-44l-54 69.75V184a28 28 0 0 0 28 28h44v-18.34l-14.83-14.83a4 4 0 0 1 5.66-5.66L128 186.34l13.17-13.17a4 4 0 0 1 5.66 5.66L132 193.66V212h44a28 28 0 0 0 28-28Zm23.92 5.48-16.42-88a4 4 0 0 0-4.84-3.16l-47.91 14.11 62.11 80.28a4 4 0 0 0 7.06-3.23Z" />
  </Svg>
);
const Memo = memo(SvgDogThin);
export default Memo;
