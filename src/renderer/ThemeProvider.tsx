import { ThemeProvider } from 'theme-ui';
import theme from './theme';

export default function ThemeUIProvider(props: any) {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
