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
    component: Base404,
    meta: {
      title: '',
      isRequireAuth: false,
      isAppbarShow: false,
    },
  },
  {
    name: 'root',
    path: '/',
    redirect: '/auth/signin',
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
        component: CallDefault,
        meta: {
          title: 'Default',
          isRequireAuth: true,
        },
      },
      {
        name: 'call apply',
        path: '/apply',
        component: CallApply,
        meta: {
          title: 'call apply',
          isRequireAuth: true,
        },
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
        component: PaymentDefault,
        meta: {
          title: 'Default',
          isRequireAuth: true,
        },
      },
    ],
  },
  {
    name: 'auth',
    path: '/auth',
    component: BaseAuth,
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
  },
  {
    name: 'user',
    path: '/user',
    component: BaseUser,
    redirect: '/user/me',
    meta: {
      title: 'User',
      isRequireAuth: true,
    },
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
