import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLineLeftBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 68h-44V32a12 12 0 0 0-20.49-8.49l-96 96a12 12 0 0 0 0 17l96 96A12 12 0 0 0 132 224v-36h44a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12Zm-12 96h-44a12 12 0 0 0-12 12v19l-67-67 67-67v19a12 12 0 0 0 12 12h44Zm64-84v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLineLeftBold);
export default Memo;
