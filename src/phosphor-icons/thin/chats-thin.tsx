import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 84h-36V48a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v128a4 4 0 0 0 4 4 4 4 0 0 0 2.51-.89L73 148h3v36a12 12 0 0 0 12 12h95l38.49 31.11a4 4 0 0 0 2.51.89 4 4 0 0 0 4-4V96a12 12 0 0 0-12-12ZM71.58 140a4 4 0 0 0-2.51.89L36 167.62V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v88a4 4 0 0 1-4 4ZM220 215.62l-33.07-26.73a4 4 0 0 0-2.51-.89H88a4 4 0 0 1-4-4v-36h84a12 12 0 0 0 12-12V92h36a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgChatsThin);
export default Memo;
