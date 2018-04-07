// Import the router
import { RouterFactory } from 'meteor/akryum:vue-router2'

// Components
import Home from '/imports/ui/App.vue'
import chat from '/imports/ui/Chat.vue'
import test from '/imports/ui/Test.vue'

RouterFactory.configure(factory => {
  // Simple routes
  factory.addRoutes([
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
  ])
})
