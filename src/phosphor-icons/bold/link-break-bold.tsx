import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkBreakBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m148.48 67.93-3.41 3.93a12 12 0 1 1-18.14-15.72l3.72-4.29c.19-.21.38-.42.58-.62a52 52 0 0 1 73.54 73.54c-.2.2-.41.39-.62.58l-4.29 3.72a12 12 0 1 1-15.72-18.14l3.93-3.41a28 28 0 0 0-39.59-39.59Zm-20.62 115a12 12 0 0 0-16.93 1.21l-3.41 3.93a28 28 0 0 1-39.59-39.59l3.93-3.41a12 12 0 0 0-15.72-18.14l-4.29 3.72c-.21.19-.42.38-.62.58a52 52 0 0 0 73.54 73.54c.2-.2.39-.41.58-.62l3.72-4.29a12 12 0 0 0-1.21-16.93ZM208 148h-20a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24ZM48 108h20a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24Zm112 68a12 12 0 0 0-12 12v20a12 12 0 0 0 24 0v-20a12 12 0 0 0-12-12ZM96 80a12 12 0 0 0 12-12V48a12 12 0 0 0-24 0v20a12 12 0 0 0 12 12Z" />
  </Svg>
);
const Memo = memo(SvgLinkBreakBold);
export default Memo;
