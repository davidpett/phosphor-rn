import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTreePalmLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236.35 54.61a64.87 64.87 0 0 0-94.85 0A70 70 0 0 0 128 75a70 70 0 0 0-13.5-20.37 64.87 64.87 0 0 0-94.85 0 6 6 0 0 0 2 9.64l61.83 26.9c-1.85.34-3.7.74-5.54 1.23a69.42 69.42 0 0 0-42.5 32.39 68.65 68.65 0 0 0-7 52.79 6 6 0 0 0 3.86 4.12 6.1 6.1 0 0 0 1.93.32 6 6 0 0 0 3.64-1.23L122 116.64V224a6 6 0 0 0 12 0V116.64l84.17 64.13a6 6 0 0 0 3.64 1.23 6.1 6.1 0 0 0 1.93-.32 6 6 0 0 0 3.86-4.12 68.65 68.65 0 0 0-7-52.79 69.42 69.42 0 0 0-42.5-32.39c-1.84-.49-3.69-.89-5.54-1.23l61.83-26.9a6 6 0 0 0 2-9.64ZM67.08 46a53.16 53.16 0 0 1 38.73 16.88 58.77 58.77 0 0 1 15.47 31.65L34.93 57a52.59 52.59 0 0 1 32.15-11ZM38.29 165.33a56.77 56.77 0 0 1 7.48-34.53A57.58 57.58 0 0 1 81 104a58.79 58.79 0 0 1 15.12-2 57.67 57.67 0 0 1 20.43 3.73Zm171.94-34.53a56.77 56.77 0 0 1 7.48 34.53l-78.24-59.61a58.24 58.24 0 0 1 70.76 25.08Zm-75.51-36.27a58.77 58.77 0 0 1 15.47-31.65A53.16 53.16 0 0 1 188.92 46a52.59 52.59 0 0 1 32.15 11Z" />
  </Svg>
);
const Memo = memo(SvgTreePalmLight);
export default Memo;
