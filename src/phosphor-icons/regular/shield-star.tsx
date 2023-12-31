import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldStar = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M80.57 117A8 8 0 0 1 91 112.57l29 11.61V96a8 8 0 0 1 16 0v28.18l29-11.61a8 8 0 1 1 6 14.86l-30.31 12.12 17.71 23.65a8 8 0 1 1-12.8 9.6L128 149.33l-17.6 23.47a8 8 0 1 1-12.8-9.6l17.74-23.65L85 127.43A8 8 0 0 1 80.57 117ZM224 56v58.77c0 89.62-75.82 119.34-91 124.39a15.44 15.44 0 0 1-10 0c-15.2-5-91-34.76-91-124.38V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-16 0H48v58.79c0 78.5 66.47 104.68 80 109.18 13.66-4.56 80-30.76 80-109.18Z" />
  </Svg>
);
const Memo = memo(SvgShieldStar);
export default Memo;
