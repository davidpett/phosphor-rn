import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBookmarkBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 28H72a20 20 0 0 0-20 20v176a12 12 0 0 0 18.36 10.18l57.63-36 57.65 36A12 12 0 0 0 204 224V48a20 20 0 0 0-20-20Zm-4 24v102.35l-45.65-28.53a12 12 0 0 0-12.72 0L76 154.35V52Zm-45.65 121.82a12 12 0 0 0-12.72 0L76 202.35v-19.7l52-32.5 52 32.5v19.7Z" />
  </Svg>
);
const Memo = memo(SvgBookmarkBold);
export default Memo;
