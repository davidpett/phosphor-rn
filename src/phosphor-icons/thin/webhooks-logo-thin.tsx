import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWebhooksLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180.7 180h-72.89a44 44 0 1 1-79-30.41 4 4 0 0 1 6.4 4.81A35.67 35.67 0 0 0 28 176a36 36 0 0 0 72 0 4 4 0 0 1 4-4h76.7a12 12 0 1 1 0 8ZM64 188a12 12 0 0 0 9.33-19.54l37.11-60.3a4 4 0 0 0-1.31-5.51A36 36 0 1 1 161 57.58a4 4 0 1 0 7.33-3.19 44 44 0 1 0-66.71 52.83l-35.1 57.05A11.58 11.58 0 0 0 64 164a12 12 0 0 0 0 24Zm128-56a44 44 0 0 0-19.56 4.58l-35.11-57A12 12 0 1 0 128 84a12.24 12.24 0 0 0 2.52-.27L167.63 144a4 4 0 0 0 5.5 1.31A36 36 0 1 1 192 212a4 4 0 0 0 0 8 44 44 0 0 0 0-88Z" />
  </Svg>
);
const Memo = memo(SvgWebhooksLogoThin);
export default Memo;