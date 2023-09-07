import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlagBannerLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.07 52.8A6 6 0 0 0 224 50H32a6 6 0 0 0-4 10.42l43.56 39.93-43.97 47.58A6 6 0 0 0 32 158h136.78l-30.2 63.42a6 6 0 0 0 10.84 5.16l80-168a6 6 0 0 0-.35-5.78ZM174.5 146H45.7l38.71-41.93a6 6 0 0 0-.36-8.49L47.43 62H214.5Z" />
  </Svg>
);
const Memo = memo(SvgFlagBannerLight);
export default Memo;
