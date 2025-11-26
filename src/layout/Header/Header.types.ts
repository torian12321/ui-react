type User = {
  name: string;
};

export type HeaderProps = {
  user?: User;
  onLogin?: VoidFunction;
  onLogout?: VoidFunction;
  onCreateAccount?: VoidFunction;
};
