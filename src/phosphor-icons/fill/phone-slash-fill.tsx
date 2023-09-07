import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneSlashFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M213.91 210.62a8 8 0 1 1-11.84 10.76l-90.51-99.57a75.89 75.89 0 0 0-8.56 2.4l-5.9 29.51a16 16 0 0 1-9.75 11.72l-.29.11-49 17.37a16 16 0 0 1-18.38-5.07c-17.23-22.21-15.3-51.68 4.69-71.67a141.26 141.26 0 0 1 45.31-30.44L42.09 45.38a8 8 0 1 1 11.84-10.76Zm17.68-104.44c-28.86-28.87-69.5-44.16-111.49-42a8 8 0 0 0-5.5 13.37l90.81 99.9a8 8 0 0 0 3.24 2.16l9.25 3.28a16 16 0 0 0 18.38-5.07c17.23-22.18 15.3-51.65-4.69-71.64Z" />
  </Svg>
);
const Memo = memo(SvgPhoneSlashFill);
export default Memo;