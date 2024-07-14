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

const getUserById = (id : number, callback : Callback) => {
    const user = users.find(user => user.id === id);
    (user) ? callback(undefined, user) : callback(`User not found with id ${id}`);
}

module.exports = {
    getUserById
}