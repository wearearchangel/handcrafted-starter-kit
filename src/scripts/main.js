import { Router } from '@wearearchangel/handcrafted'

import Home from './pages/Home'

Router({
  home: Home,
  page: '/foo',
  'sub-page': '/foo/:bar'
})
