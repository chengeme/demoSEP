import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Ui Components',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  // {
  //   displayName: 'Reset Password',
  //   iconName: 'user-plus',
  //   route: '/authentication/reset-password',
  // },
  // {
  //   displayName: 'Change Password',
  //   iconName: 'key',
  //   route: '/authentication/change-password',
  // },
  // {
  //   displayName: 'Forget Password',
  //   iconName: 'user-minus',
  //   route: '/authentication/forget-password',
  // },
];
