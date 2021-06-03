// Base
const Base404 = () => import('@/views/Base404.vue');
const BaseBoard = () => import('@/views/BaseBoard.vue');
const BaseAuth = () => import('@/views/BaseAuth.vue');
const BaseUser = () => import('@/views/BaseUser.vue');

// Auth
const AuthSignIn = () => import('@/views/auth/AuthSignIn.vue');

// Board
const BoardApply = () => import('@/views/board/BoardApply.vue');
const BoardBefore = () => import('@/views/board/BoardBefore.vue');
const BoardOn = () => import('@/views/board/BoardOn.vue');
const BoardAfter = () => import('@/views/board/BoardAfter.vue');

// User
const UserProfile = () => import('@/views/user/UserProfile.vue');

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
        path: 'on',
        component: BoardOn,
        meta: {
          isAppBarShow: true,
        },
      },
      {
        name: 'board before',
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
