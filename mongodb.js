// CRUD  create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const {MongoClient, ObjectId} = require('mongodb')

// const id = new ObjectId()
// console.log(id)
// console.log(id.getTimestamp())

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if(error)
    {
        console.log('Unable to connect to database')
        return
    }

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'task 3'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    //


    // db.collection('users').updateOne({
    //     _id: new ObjectId('61e1997512c8944838e35169')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('users').findOne({_id: new ObjectId('61e254e66c03733a302429bc')}, (error, user) => {
    //     if(error)
    //     {
    //         console.log('Unable to fetch!')
    //     }
    //
    //     console.log(user)
    // })

    // db.collection('users').find({age: 27}).toArray((error, users) => {
    //     console.log(users)
    // })
    //
    // db.collection('users').find({age: 27}).count((error, count) => {
    //     console.log(count)
    // })


    // db.collection('tasks').findOne({_id: new ObjectId('61e19c376791e72700af6dc4')}, (error, task) => {
    //     if(error)
    //     {
    //         console.log('Unable to fetch!')
    //     }
    //
    //     console.log(task)
    // })
    //
    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })


    // db.collection('users').insertOne({
    //     // _id: id,
    //     name: 'Jimmy',
    //     age: 26
    // }, (error, result) => {
    //
    //     if(error)
    //     {
    //         console.log('Unable to insert user')
    //         return
    //     }
    //
    //     console.log(result.ops)
    //
    // })

    // db.collection('users').insertMany([{
    //     name: 'Gunther',
    //     age: 27
    // }, {
    //     name: 'Jen',
    //     age: 28
    // }], (error, result) => {
    //
    //     if(error)
    //     {
    //         console.log('Unable to insert documents')
    //         return
    //     }
    //
    //     console.log(result.ops)
    //
    // })

    // db.collection('tasks').insertMany([{
    //     description: 'task 1',
    //     completed: true
    // }, {
    //     description: 'task 2',
    //     completed: false
    // },{
    //     description: 'task 3',
    //     completed: false
    // }], (error, result) => {
    //
    //     if(error)
    //     {
    //         console.log('Unable to insert tasks')
    //         return
    //     }
    //
    //     console.log(result.ops)
    //
    // })
})


