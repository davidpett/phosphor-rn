import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCursorBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m180.85 131.88 34.62-13.13.53-.21a20 20 0 0 0-1.76-37.27L54.16 29A20 20 0 0 0 29 54.16l52.27 160.08a19.81 19.81 0 0 0 18 13.74h1a19.81 19.81 0 0 0 18.27-12l.21-.53 13.13-34.62 41.29 41.29a20 20 0 0 0 28.29 0l20.68-20.68a20 20 0 0 0 0-28.29Zm6.46 70.46-42.84-42.84a20 20 0 0 0-14.13-5.86 20.5 20.5 0 0 0-3.74.35 20 20 0 0 0-14.6 11.68c-.08.17-.15.35-.22.53l-11.25 29.67L54.28 54.28l141.59 46.24-29.67 11.25-.53.22a20 20 0 0 0-6.17 32.48l42.84 42.84Z" />
  </Svg>
);
const Memo = memo(SvgCursorBold);
export default Memo;
