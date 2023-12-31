import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWebcamLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M166 104a38 38 0 1 0-38 38 38 38 0 0 0 38-38Zm-64 0a26 26 0 1 1 26 26 26 26 0 0 1-26-26Zm122 98h-90v-20.25a78 78 0 1 0-12 0V202H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12ZM62 104a66 66 0 1 1 66 66 66.08 66.08 0 0 1-66-66Z" />
  </Svg>
);
const Memo = memo(SvgWebcamLight);
export default Memo;
