import type { StyledComponent as BasicStyledComponent } from 'styled-components';
import type { DefaultTheme } from 'styled-components/native';

export type StyledComponent<
  C extends keyof JSX.IntrinsicElements | React.ComponentType,
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends object = {},
> = BasicStyledComponent<C, DefaultTheme, T, never>;
