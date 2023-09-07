import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlagBannerDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m224 56-45.71 96H32l48-52-48-44Z" opacity={0.2} />
    <Path d="M230.76 51.73A8 8 0 0 0 224 48H32a8 8 0 0 0-5.41 13.9l42.09 38.57-42.56 46.1A8 8 0 0 0 32 160h133.62l-28.84 60.56a8 8 0 1 0 14.44 6.88l80-168a8 8 0 0 0-.46-7.71ZM173.23 144h-123l35.61-38.57a8 8 0 0 0-.47-11.33L52.57 64h158.76Z" />
  </Svg>
);
const Memo = memo(SvgFlagBannerDuotone);
export default Memo;
