const uuid = require('uuid');

const UsersDB = [{
	id: '5b11c485-dd87-4770-9eaa-bda96f9a806d',
	first_name: 'Kelvyn',
	last_name: 'Loreto',
	email: 'loreto@email.com',
	password: 'password',
	birthday: '1996/08/15'
},{
    id: '943bedb9-6e13-4932-9423-bed48f1657ee',
	first_name: 'Lenin',
	last_name: 'Colina',
	email: 'colina@email.com',
	password: 'drowssap',
	birthday: '1993/01/19'
}
,{
    id: '8f63605c-1b81-4203-8b8a-b6f52951f737',
	first_name: 'Conrad',
	last_name: 'Barrios',
	email: 'B.conrad@email.com',
	password: '1234pass',
	birthday: '2000/12/18'
}
]

const getAllUsers= () =>{
    return UsersDB
};

const getUserById = () =>{
    const data = UsersDB.find(user=> user.id = id)
    return data
}

const createUser = (firstName, lastName, email, password, birthday)=>{
    const newUser = {
        id: uuid.v4(), 
        first_name: firstName,
        last_name: lastName,
        email ,
        password,
        birthday
    }
    // UsersDB.find(user=>{
    //     if (newUser.email !== user.email) {
    //         UsersDB.push(newUser)
    //     }
    // })  

return newUser
}

module.exports= {
    getAllUsers,
    getUserById,
    createUser
}
