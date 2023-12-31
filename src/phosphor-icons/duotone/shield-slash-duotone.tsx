import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldSlashDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 56v58.77c0 84.18-71.31 112.07-85.54 116.8a7.54 7.54 0 0 1-4.92 0C111.31 226.86 40 199 40 114.79V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M53.92 34.62A8 8 0 0 0 40.26 42 16 16 0 0 0 32 56v58.77c0 89.62 75.82 119.34 91 124.38a15.44 15.44 0 0 0 10 0 147.19 147.19 0 0 0 54.59-33.76l14.51 16a8 8 0 1 0 11.84-10.77ZM128 224c-13.53-4.5-80-30.68-80-109.18V56h3.73L176.8 193.57A130.13 130.13 0 0 1 128 224Zm96-168v58.77c0 19.67-3.73 37.93-11.1 54.29a8 8 0 1 1-14.59-6.57c6.43-14.28 9.69-30.33 9.69-47.72V56H98.52a8 8 0 1 1 0-16H208a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgShieldSlashDuotone);
export default Memo;
