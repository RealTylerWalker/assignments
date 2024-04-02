// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
function findSum(a, b) {
  if (typeof a !== "number") {
    throw new Error("First parameter is not a number " + a);
  } else {
    console.log("first parameter is a number");
  }
  if (typeof b !== "number") {
    throw new Error("Second parameter is not a number " + b);
  } else {
    console.log("second parameter is a number");
  }

  let result = a + b;
  return result;
}
try {
  console.log(findSum(3, 1));
} catch (err) {
  console.log(err);
}

const user = { username: "idahomeboy", password: "abc123" };

function login(username, password) {
  if (username !== user.username || password !== user.password) {
    throw new Error("Incorrect username or password.");
  } else {
    console.log("Login successful!");
    return true;
  }
}
try {
  console.log(login("idahomeboy", "abc123"));
} catch (err) {
  console.log(err);
}
