import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneIncomingBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m224 154.8-47.09-21.1-.18-.08a19.89 19.89 0 0 0-19 1.74 13.08 13.08 0 0 0-1.12.84l-22.31 19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76 11.76 0 0 0 .85-1.15 20 20 0 0 0 1.66-18.83 1.42 1.42 0 0 1-.08-.18L101.2 32a20.06 20.06 0 0 0-20.78-11.85A60.27 60.27 0 0 0 28 80c0 81.61 66.39 148 148 148a60.27 60.27 0 0 0 59.85-52.42A20.06 20.06 0 0 0 224 154.8ZM176 204A124.15 124.15 0 0 1 52 80a36.29 36.29 0 0 1 28.48-35.54l18.82 42-19.16 22.82a12 12 0 0 0-.86 1.16A20 20 0 0 0 78 130.08c9.42 19.28 28.83 38.56 48.31 48a20 20 0 0 0 19.69-1.45 11.63 11.63 0 0 0 1.11-.85l22.43-19.07 42 18.81A36.29 36.29 0 0 1 176 204ZM148 96V56a12 12 0 0 1 24 0v11l27.52-27.52a12 12 0 0 1 17 17L189 84h11a12 12 0 0 1 0 24h-40a12 12 0 0 1-12-12Z" />
  </Svg>
);
const Memo = memo(SvgPhoneIncomingBold);
export default Memo;