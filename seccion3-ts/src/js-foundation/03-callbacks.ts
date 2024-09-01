interface User {
    id : number;
    name : string;
}

interface Callback {
    (err? : string, user? : User) : void;
}

const users = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    }
];

export function getUserById(id : number, callback : Callback){
    const user = users.find(function(user){
        return user.id === id;
    });

    if(!user){
        return callback(`User not found with id ${id}`);
    }

    return callback(undefined, user);
}