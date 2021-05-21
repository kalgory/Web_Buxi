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
      isAppBarShow: true,
    },
  },
  {
    name: 'root',
    path: '/',
    redirect: '/call',
    meta: {
      isAppBarShow: true,
    },
  },
  {
    path: '/call',
    component: BaseCall,
    children: [
      {
        name: 'call default',
        path: '',
        component: CallDefault,
        meta: {
          isAppBarShow: true,
        },
      },
      {
        name: 'call apply',
        path: '/apply',
        component: CallApply,
        meta: {
          isAppBarShow: true,
        },
      },
    ],
  },
  {
    path: '/payment',
    component: BasePayment,
    children: [
      {
        name: 'payment default',
        path: '',
        component: PaymentDefault,
        meta: {
          isAppBarShow: true,
        },
      },
    ],
  },
  {
    name: 'auth',
    path: '/auth',
    component: BaseAuth,
    children: [
      {
        name: 'sign in',
        path: 'signin',
        component: AuthSignIn,
        meta: {
          isAppBarShow: false,
        },
      },
    ],
  },
  {
    name: 'user',
    path: '/user',
    component: BaseUser,
    redirect: '/user/me',
    children: [
      {
        name: 'myProfile',
        path: 'me',
        component: UserProfile,
        meta: {
          isAppBarShow: true,
        },
      },
    ],
  },
];
