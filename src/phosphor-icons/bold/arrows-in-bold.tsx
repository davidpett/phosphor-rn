import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsInBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M140 104V64a12 12 0 0 1 24 0v11l35.51-35.52a12 12 0 0 1 17 17L181 92h11a12 12 0 0 1 0 24h-40a12 12 0 0 1-12-12Zm-36 36H64a12 12 0 0 0 0 24h11l-35.49 35.51a12 12 0 0 0 17 17L92 181v11a12 12 0 0 0 24 0v-40a12 12 0 0 0-12-12Zm77 24h11a12 12 0 0 0 0-24h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 24 0v-11l35.51 35.52a12 12 0 0 0 17-17ZM104 52a12 12 0 0 0-12 12v11L56.49 39.51a12 12 0 0 0-17 17L75 92H64a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgArrowsInBold);
export default Memo;
