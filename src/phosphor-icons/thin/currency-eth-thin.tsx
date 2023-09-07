import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyEthThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m219.15 125.53-88-112a4 4 0 0 0-6.3 0l-88 112a4 4 0 0 0 0 4.94l88 112a4 4 0 0 0 6.3 0l88-112a4 4 0 0 0 0-4.94ZM132 27.57l77.71 98.9L132 161.79Zm-8 134.22-77.71-35.32L124 27.57Zm0 8.79v57.85l-70.72-90Zm8 0 70.72-32.15-70.72 90Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyEthThin);
export default Memo;
