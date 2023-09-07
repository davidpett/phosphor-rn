import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSoccerBallBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm76 72.25-22 7.15-42-29.62V44.87a84.23 84.23 0 0 1 64 47.38ZM104.5 160l-14.29-42.67L128 90.68l37.79 26.65L151.5 160ZM116 44.87v24.91L74 99.4l-22-7.15a84.23 84.23 0 0 1 64-47.38ZM44 128a84.26 84.26 0 0 1 1-12.79l21.57 7 16 47.74-13.21 18.11A83.72 83.72 0 0 1 44 128Zm44.73 74.23L102 184h52l13.25 18.23a83.81 83.81 0 0 1-78.54 0Zm97.91-14.17L173.48 170l16-47.74 21.57-7a84 84 0 0 1-24.39 72.85Z" />
  </Svg>
);
const Memo = memo(SvgSoccerBallBold);
export default Memo;
