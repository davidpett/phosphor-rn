import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136.13 187.77a6 6 0 0 1 0 8.49l-9.95 9.94a54 54 0 0 1-76.38-76.38l24.11-24.12a54 54 0 0 1 74.09-2.19 6 6 0 1 1-8 9 42 42 0 0 0-57.6 1.71L58.28 138.3a42 42 0 0 0 59.42 59.42l9.94-9.95a6 6 0 0 1 8.49 0Zm70.07-138a54.06 54.06 0 0 0-76.38 0l-9.95 9.94a6 6 0 0 0 8.49 8.49l9.94-10a42 42 0 0 1 59.42 59.42l-24.12 24.19a42 42 0 0 1-57.6 1.71 6 6 0 1 0-8 9 54 54 0 0 0 74.07-2.19l24.11-24.12a54 54 0 0 0 .02-76.41Z" />
  </Svg>
);
const Memo = memo(SvgLinkLight);
export default Memo;
