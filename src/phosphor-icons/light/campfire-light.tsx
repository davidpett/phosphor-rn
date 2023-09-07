import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCampfireLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M221.72 225.82a6 6 0 0 1-7.54 3.9L128 202.3l-86.18 27.42a6 6 0 1 1-3.64-11.44l70-22.28-70-22.28a6 6 0 1 1 3.64-11.44L128 189.7l86.18-27.42a6 6 0 1 1 3.64 11.44l-70 22.28 70 22.28a6 6 0 0 1 3.9 7.54ZM70 108c0-46.81 52.62-79.73 54.86-81.11a6 6 0 0 1 6.28 0C133.38 28.27 186 61.19 186 108a58 58 0 0 1-116 0Zm58 46a18 18 0 0 0 18-18c0-15.48-12-27.43-18-32.44-6 5-18 17-18 32.44a18 18 0 0 0 18 18Zm-46-46a45.93 45.93 0 0 0 17 35.67 29.87 29.87 0 0 1-1-7.67c0-26.9 25.58-44.27 26.67-45a6 6 0 0 1 6.66 0c1.09.72 26.67 18.09 26.67 45a29.87 29.87 0 0 1-1 7.67A45.93 45.93 0 0 0 174 108c0-34.06-35.15-61.22-46-68.78-10.85 7.56-46 34.71-46 68.78Z" />
  </Svg>
);
const Memo = memo(SvgCampfireLight);
export default Memo;
