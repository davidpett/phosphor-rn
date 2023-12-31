import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBugDroidThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m186.17 43.49 16.66-16.66a4 4 0 1 0-5.66-5.66l-17 17a83.72 83.72 0 0 0-104.26 0l-17-17a4 4 0 0 0-5.66 5.66l16.58 16.66A83.75 83.75 0 0 0 44 104v40a84 84 0 0 0 168 0v-40a83.75 83.75 0 0 0-25.83-60.51ZM128 28a76.08 76.08 0 0 1 76 76v12H52v-12a76.08 76.08 0 0 1 76-76Zm0 192a76.08 76.08 0 0 1-76-76v-20h152v20a76.08 76.08 0 0 1-76 76Zm20-136a8 8 0 1 1 8 8 8 8 0 0 1-8-8Zm-56 0a8 8 0 1 1 8 8 8 8 0 0 1-8-8Z" />
  </Svg>
);
const Memo = memo(SvgBugDroidThin);
export default Memo;
