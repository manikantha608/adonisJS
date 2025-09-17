/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

// routing 2 types
// 1. using .on() method
// router.on('/greet').render('pages/greet')

// 2. using .get() method
router.get("/greet",async({view})=>{
    return view.render('pages/greet')
})