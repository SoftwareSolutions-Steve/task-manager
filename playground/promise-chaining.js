require ('../src/db/mongoose')
const User = require('../src/models/user')

//61e305698fb44a205053c216

// User.findByIdAndUpdate('61e76df317bc032990edc6ea', {age : 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age: age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('61e76df317bc032990edc6ea', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})