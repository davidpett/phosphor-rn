import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLineSegmentsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M238.64 78.62A31.9 31.9 0 0 1 216 88a32.33 32.33 0 0 1-7.64-.92l-26.63 49.46c.3.28.6.56.89.85a32 32 0 1 1-50.2 6.38l-20.18-20.18A32 32 0 0 1 96 128a32.4 32.4 0 0 1-7.65-.91l-26.63 49.44c.3.28.61.56.9.85a32 32 0 1 1-45.26 0 32 32 0 0 1 30.27-8.44l26.63-49.46c-.3-.28-.6-.56-.89-.85a32 32 0 0 1 0-45.26 32 32 0 0 1 50.2 38.89l20.18 20.18a32.19 32.19 0 0 1 23.9-3.5l26.63-49.46c-.3-.28-.61-.56-.9-.85a32 32 0 0 1 0-45.26 32 32 0 0 1 45.26 45.26Z" />
  </Svg>
);
const Memo = memo(SvgLineSegmentsFill);
export default Memo;