export const db = {
    students : [
        {
            id: 1,
            name: 'Fatma Laribi',
            age: 22,
            gender: "FEMALE",
            classroom: 1
        },
        {
            id: 2,
            name: 'Ahmed Mahfoudhi',
            age: 22,
            gender: "MALE",
            classroom: 2
        },
        {
            id: 3,
            name: 'Nadine Boukadida',
            age: 22,
            gender: "FEMALE",
            classroom: 3
        },
        {
            id: 4,
            name: 'Mohamed Aziz Khayati',
            age: 22,
            gender: "MALE",
            classroom: 1
        }
    ],
    classroom: [
        {
            id: 1,
            designation: 'GL3'
        },{
            id: 2,
            designation: 'GL2'
        },{
            id: 3,
            designation: 'GL4'
        },
    ],
    todos: [
        {
            id:1,
            name:'Learn React',
            content:'Learn React',
            status:'DONE',
            user:1
        },
        {
            id:2,
            name:'Learn Angular',
            content:'Learn Angular',
            status:'WAITING',
            user:1
        },
        {
            id:3,
            name:'Learn Vue',
            content:'Learn Vue',
            status:'CANCELED',
            user:2
        },
        {
            id:4,
            name:'Learn Node',
            content:'Learn Node',
            status:'IN_PROGRESS',
            user:2
        },
        {
            id:5,
            name:'Learn MongoDB',
            content:'Learn MongoDB',
            status:'WAITING',
            user:3
        }
    ],
    users:[
        {
            id:1,
            name:'John Wick',
            email:'johnWick@gmail.com',
        },
        {
            id:2,
            name:'Joe Biden',
            email:'joeBiden@gmail.com',
        },
        {
            id:3,
            name:'Elon Musk',
            email: 'elonMusk@gmail.com'
        }
    ],
}
