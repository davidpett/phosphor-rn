import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLifebuoyBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm44.25 135.28a51.89 51.89 0 0 0 0-54.56l23-23a83.84 83.84 0 0 1 0 100.56ZM100 128a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm78.28-67.25-23 23a51.89 51.89 0 0 0-54.56 0l-23-23a83.84 83.84 0 0 1 100.56 0Zm-117.53 17 23 23a51.89 51.89 0 0 0 0 54.56l-23 23a83.84 83.84 0 0 1 0-100.56Zm17 117.53 23-23a51.89 51.89 0 0 0 54.56 0l23 23a83.84 83.84 0 0 1-100.56 0Z" />
  </Svg>
);
const Memo = memo(SvgLifebuoyBold);
export default Memo;
