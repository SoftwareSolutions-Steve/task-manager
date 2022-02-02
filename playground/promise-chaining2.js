require ('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('61e309c25da58a18dc8333a3', {}).then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id, {})
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('61e2feca4ca42c4fc0251dfa').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})