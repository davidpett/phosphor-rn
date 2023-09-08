import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEqualizerBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M80 108a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h44a12 12 0 0 1 12 12Zm-12 28H24a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24Zm0 40H24a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24Zm82-40h-44a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24Zm0 40h-44a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24Zm38-96h44a12 12 0 0 0 0-24h-44a12 12 0 0 0 0 24Zm44 16h-44a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24Zm0 40h-44a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24Zm0 40h-44a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgEqualizerBold);
export default Memo;
