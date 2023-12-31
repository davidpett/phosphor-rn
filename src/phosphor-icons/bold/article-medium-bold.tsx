import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArticleMediumBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M60 132a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h4V64h-4a12 12 0 0 1 0-24h16a12 12 0 0 1 10.18 5.63L80 93.36l29.82-47.72A12 12 0 0 1 120 40h16a12 12 0 0 1 0 24h-4v56h4a12 12 0 0 1 0 24h-24a12 12 0 0 1-4-23.3V93.84l-17.82 28.52a12 12 0 0 1-20.36 0L52 93.84v26.86a12 12 0 0 1 8 11.3Zm116-28h64a12 12 0 0 0 0-24h-64a12 12 0 0 0 0 24Zm64 16h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24Zm0 40H72a12 12 0 0 0 0 24h168a12 12 0 0 0 0-24Zm0 40H72a12 12 0 0 0 0 24h168a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgArticleMediumBold);
export default Memo;
