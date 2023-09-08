import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgYinYangThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28ZM36 128a92.1 92.1 0 0 1 92-92 44 44 0 0 1 0 88 52 52 0 0 0-37.44 88A92.14 92.14 0 0 1 36 128Zm92 92a44 44 0 0 1 0-88 52 52 0 0 0 37.44-88A92 92 0 0 1 128 220Zm8-44a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-16-96a8 8 0 1 1 8 8 8 8 0 0 1-8-8Z" />
  </Svg>
);
const Memo = memo(SvgYinYangThin);
export default Memo;
