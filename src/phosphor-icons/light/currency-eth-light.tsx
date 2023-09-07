import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyEthLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m220.72 124.29-88-112a6 6 0 0 0-9.44 0l-88 112a6 6 0 0 0 0 7.42l88 112a6 6 0 0 0 9.44 0l88-112a6 6 0 0 0 0-7.42ZM134 33.35l72.56 92.35-72.56 33Zm-12 125.33-72.56-33L122 33.35Zm0 13.18v50.79l-62.08-79Zm12 0 62.08-28.21-62.08 79Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyEthLight);
export default Memo;
