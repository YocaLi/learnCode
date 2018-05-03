
import App from '../App'

export default [{
  path: '/',
  name: 'App',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('../page/home')), 'home') // 代码分割
  }, {
    path: '/item',
    component: r => require.ensure([], () => r(require('../page/item')), 'item') // 代码分割
  }, {
    path: '/score',
    component: r => require.ensure([], () => r(require('../page/score')), 'score') // 代码分割
  }]
}]
