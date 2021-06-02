// Base
const Base404 = () => import('@/views/Base404');
const BaseBoard = () => import('@/views/BaseBoard');
const BaseAuth = () => import('@/views/BaseAuth');
const BaseUser = () => import('@/views/BaseUser');

// Auth
const AuthSignIn = () => import('@/views/auth/AuthSignIn');

// Board
const BoardApply = () => import('@/views/board/BoardApply');
const BoardBefore = () => import('@/views/board/BoardBefore');
const BoardOn = () => import('@/views/board/BoardOn');
const BoardAfter = () => import('@/views/board/BoardAfter');

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
    redirect: '/board',
    meta: {
      isAppBarShow: true,
    },
  },
  {
    path: '/board',
    redirect: '/board/apply',
    component: BaseBoard,
    children: [
      {
        name: 'board apply',
        path: 'apply',
        component: BoardApply,
        meta: {
          isAppBarShow: true,
        },
      },
      {
        name: 'board before',
        path: 'before',
        component: BoardBefore,
        meta: {
          isAppBarShow: true,
        },
      },
      {
        name: 'board on',
        path: 'before',
        component: BoardOn,
        meta: {
          isAppBarShow: true,
        },
      },
      {
        name: 'board after',
        path: 'after',
        component: BoardAfter,
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
