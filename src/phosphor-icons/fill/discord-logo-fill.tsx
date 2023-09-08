import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiscordLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M247.51 174.39 218 58a16.08 16.08 0 0 0-13-11.88l-36.06-5.92a16.22 16.22 0 0 0-18.26 11.88l-.21.85a4 4 0 0 0 3.27 4.93 155.62 155.62 0 0 1 24.41 5.62 8.2 8.2 0 0 1 5.62 9.7 8 8 0 0 1-10.19 5.64 155.4 155.4 0 0 0-90.8-.1 8.22 8.22 0 0 1-10.28-4.81 8 8 0 0 1 5.08-10.33 156.85 156.85 0 0 1 24.72-5.72 4 4 0 0 0 3.27-4.93l-.21-.85a16.21 16.21 0 0 0-18.28-11.87L51 46.13A16.08 16.08 0 0 0 38 58L8.49 174.39a15.94 15.94 0 0 0 9.06 18.51l67 29.71a16.17 16.17 0 0 0 21.71-9.1l3.49-9.45a4 4 0 0 0-3.27-5.35 158.13 158.13 0 0 1-28.63-6.2 8.2 8.2 0 0 1-5.61-9.67 8 8 0 0 1 10.2-5.66 155.59 155.59 0 0 0 91.12 0 8 8 0 0 1 10.19 5.65 8.19 8.19 0 0 1-5.61 9.68 157.84 157.84 0 0 1-28.62 6.2 4 4 0 0 0-3.27 5.35l3.49 9.45a16.18 16.18 0 0 0 21.71 9.1l67-29.71a15.94 15.94 0 0 0 9.06-18.51ZM92 152a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm72 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgDiscordLogoFill);
export default Memo;
