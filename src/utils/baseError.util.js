const blankFieldErr = {
  id: "blankFieldErr",
  msg: "All fields must be filled!",
};

const alreadyExistErr = (d) => {
  return { id: "alreadyExistErr", msg: `${d} already exist!` };
};

const notExistErr = (d) => {
  return {
    id: "notExistErr",
    msg: d,
  };
};

module.exports = { blankFieldErr, alreadyExistErr, notExistErr };
