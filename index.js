// fetch users

// using promise

const API = "https://jsonplaceholder.typicode.com/";

const fetchUsers = new Promise(async (resolve, reject) => {
  try {
    const users = await fetch(API + "users");

    // const users = [];

    // ERROR HANDLING => THINKING WHAT CAN GO WRONG
    // IF (...) => HOW TO WE HANDLE
    // HDNLE IS === WHAT DO WE SEND BACK
    if (users.length === 0) {
      // throw new Eroo
      reject("Error: no users were found");
    }

    // Success
    resolve(users);
  } catch (err) {
    // throw new Error("Error:", err.message);
    reject("Error", err.message);
  }
});

// const json = () => {
//   // a whole thing that actually parse the data

//   return new Promise((res, rej) => {
//     res(parsedData);
//   });
// };

fetchUsers // I promise to fetch the users!
  // then === await
  .then((response) => {
    return response.json(); // I promise to parse your data
  }) // then === await
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => {
    // console.log(err);
  });

let ourUsers = [];

const fetchUsersAsync = async () => {
  try {
    const response = await fetchUsers; // I promise!
    const users = await response.json();

    ourUsers = [...users];

    return ourUsers;

    // console.log(ourUsers);
  } catch (err) {
    // console.log(err);
  }
};

fetchUsersAsync().then((res) => {
  //   console.log(res);

  if (ourUsers.length > 0) {
    // console.log("Users were found!");
  }

  if (ourUsers.length === 0) {
    // console.log("we have no users");
  }
});

(async () => {
  const users = await fetchUsersAsync();

  if (users.length > 0) {
    // console.log("Users were found!");
  }

  if (users.length === 0) {
    // console.log("we have no users");
  }
})();

// if else
// if

const fetchUser = async (id) => {
  try {
    const res = await fetch(API + "users/" + id);
    const user = await res.json();

    if (Object.keys(user).length === 0) {
      throw new Error("No User Was Found");
    }
  } catch (err) {
    throw new Error(err);
  }
};

fetchUser(100)
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });
