// Base
const Base404 = () => import('@/views/Base404');
const BaseAuth = () => import('@/views/BaseAuth');
const BasePayment = () => import('@/views/BasePayment');
const BaseUser = () => import('@/views/BaseUser');
const BaseCall = () => import('@/views/BaseCall');
// Auth
const AuthSignIn = () => import('@/views/auth/AuthSignIn');

// Call
const CallDefault = () => import('@/views/call/CallDefault');
const CallApply = () => import('@/views/call/CallApply');

// Payment
const PaymentDefault = () => import('@/views/payment/PaymentDefault');

// User
const UserProfile = () => import('@/views/user/UserProfile');

export default [
  {
    name: '404',
    path: '*',
    meta: {
      title: '',
      isRequireAuth: false,
      isAppbarShow: false,
    },
    component: Base404,
  },
  {
    name: 'root',
    path: '/',
    redirect: '/signin',
    meta: {
      title: '',
      isRequireAuth: false,
    },
  },
  {
    name: 'call',
    path: '/call',
    component: BaseCall,
    meta: {
      title: 'Default',
      isRequireAuth: true,
    },
    children: [
      {
        name: 'call default',
        path: '',
        meta: {
          title: 'Default',
          isRequireAuth: true,
        },
        component: CallDefault,
      },
      {
        name: 'call apply',
        path: '/apply',
        meta: {
          title: 'call apply',
          isRequireAuth: true,
        },
        component: CallApply,
      },
    ],
  },
  {
    name: 'payment',
    path: '/payment',
    component: BasePayment,
    meta: {
      title: 'payment',
      isRequireAuth: true,
    },
    children: [
      {
        name: 'payment default',
        path: '',
        meta: {
          title: 'Default',
          isRequireAuth: true,
        },
        component: PaymentDefault,
      },
    ],
  },
  {
    name: 'auth',
    path: '/auth',
    meta: {
      title: 'Auth',
      isRequireAuth: false,
    },
    children: [
      {
        name: 'sign in',
        path: 'signin',
        component: AuthSignIn,
        meta: {
          title: 'Sign in',
          isRequireAuth: false,
        },
      },
    ],
    component: BaseAuth,
  },
  {
    name: 'user',
    path: '/user',
    redirect: '/user/me',
    meta: {
      title: 'User',
      isRequireAuth: true,
    },
    component: BaseUser,
    children: [
      {
        name: 'myProfile',
        path: 'me',
        component: UserProfile,
        meta: {
          title: 'my profile',
          isRequireAuth: true,
        },
      },
    ],
  },
];
