import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgKnifeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234.64 29.37a32 32 0 0 0-45.26 0l-.1.1L15.41 207.79a12 12 0 0 0 5.89 20.1A159.13 159.13 0 0 0 57.19 232c34.21 0 68.42-11.11 100.55-32.9 32.29-21.9 51.09-46.74 51.87-47.78a12 12 0 0 0-1.11-15.7l-16-16 42.29-45.08a32.09 32.09 0 0 0-.15-45.17Zm-91 150.25C112.74 200.43 81 209.85 49 207.77l97.6-100.13 37.13 37.16a222.39 222.39 0 0 1-40.06 34.82Zm74-121.94-.26.27-41.89 44.66-12.12-12.17 43-44.12a8 8 0 0 1 11.28 11.36Z" />
  </Svg>
);
const Memo = memo(SvgKnifeBold);
export default Memo;
