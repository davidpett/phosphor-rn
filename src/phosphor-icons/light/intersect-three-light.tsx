import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIntersectThreeLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M193.78 97.13c.13-1.69.22-3.4.22-5.13a66 66 0 0 0-132 0c0 1.73.09 3.44.22 5.13A66 66 0 1 0 128 211.27a66 66 0 1 0 65.78-114.14ZM74 92a54 54 0 0 1 108 0v.51a65.75 65.75 0 0 0-54 8.22 65.75 65.75 0 0 0-54-8.22V92Zm72 64a53.88 53.88 0 0 1-18 40.21A53.88 53.88 0 0 1 110 156v-.51a65.73 65.73 0 0 0 36 0v.51Zm-18-10a53.61 53.61 0 0 1-16.5-2.59 54.09 54.09 0 0 1 16.5-27.62 54.09 54.09 0 0 1 16.5 27.62A53.61 53.61 0 0 1 128 146Zm-27.6-7.61a54.14 54.14 0 0 1-24.9-33.8 53.85 53.85 0 0 1 42.5 4.12 66.09 66.09 0 0 0-17.6 29.68Zm37.6-29.68a53.85 53.85 0 0 1 42.53-4.12 54.14 54.14 0 0 1-24.9 33.8A66.09 66.09 0 0 0 138 108.71ZM92 210a54 54 0 0 1-27.6-100.39 66.29 66.29 0 0 0 33.82 41.26c-.13 1.69-.22 3.4-.22 5.13a65.8 65.8 0 0 0 20 47.29A53.64 53.64 0 0 1 92 210Zm72 0a53.64 53.64 0 0 1-26-6.71A65.8 65.8 0 0 0 158 156c0-1.73-.09-3.44-.22-5.13a66.29 66.29 0 0 0 33.82-41.26A54 54 0 0 1 164 210Z" />
  </Svg>
);
const Memo = memo(SvgIntersectThreeLight);
export default Memo;
