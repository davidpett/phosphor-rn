import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M134.71 189.19a4 4 0 0 1 0 5.66l-9.94 9.94a52 52 0 0 1-73.56-73.56l24.12-24.12a52 52 0 0 1 71.32-2.1 4 4 0 1 1-5.32 6A44 44 0 0 0 81 112.77l-24.13 24.12a44 44 0 0 0 62.24 62.24l9.94-9.94a4 4 0 0 1 5.66 0Zm70.08-138a52.07 52.07 0 0 0-73.56 0l-9.94 9.94a4 4 0 1 0 5.71 5.68l9.94-9.94a44 44 0 0 1 62.24 62.24L175 143.23a44 44 0 0 1-60.33 1.77 4 4 0 1 0-5.32 6 52 52 0 0 0 71.32-2.1l24.12-24.12a52.07 52.07 0 0 0 0-73.57Z" />
  </Svg>
);
const Memo = memo(SvgLinkThin);
export default Memo;
