import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionBackgroundBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 80H48a20 20 0 0 0-20 20v108a20 20 0 0 0 20 20h108a20 20 0 0 0 20-20V100a20 20 0 0 0-20-20Zm-4 124H52V104h100ZM132 40a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12Zm96 8v8a12 12 0 0 1-24 0v-4h-4a12 12 0 0 1 0-24h8a20 20 0 0 1 20 20Zm0 48v16a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0Zm0 56v8a20 20 0 0 1-20 20h-8a12 12 0 0 1 0-24h4v-4a12 12 0 0 1 24 0ZM76 56v-8a20 20 0 0 1 20-20h8a12 12 0 0 1 0 24h-4v4a12 12 0 0 1-24 0Z" />
  </Svg>
);
const Memo = memo(SvgSelectionBackgroundBold);
export default Memo;
