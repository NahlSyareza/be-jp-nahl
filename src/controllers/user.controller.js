const baseRes = require("../utils/baseResponse.util");
const baseErr = require("../utils/baseError.util");

const repository = require("../repositories/user.repository");

const register = async (req, res) => {
  try {
    const q = await repository.register(req.query);

    switch (q) {
      case baseErr.blankFieldErr.id:
        return baseRes(res, false, 400, baseErr.blankFieldErr.msg, null);

      case baseErr.alreadyExistErr().id:
        return baseRes(
          res,
          false,
          400,
          baseErr.alreadyExistErr("Email").msg,
          null
        );
    }

    return baseRes(res, true, 200, "Success", q);
  } catch (e) {
    return baseRes(res, false, 500, `Error: ${e.message}`, null);
  }
};

const login = async (req, res) => {
  try {
    const q = await repository.login(req.query);

    switch (q) {
      case baseErr.blankFieldErr.id:
        return baseRes(res, false, 400, baseErr.blankFieldErr.msg, null);

      case baseErr.notExistErr().id:
        return baseRes(
          res,
          false,
          200,
          baseErr.notExistErr("invalid email or password!").msg,
          null
        );
    }

    return baseRes(res, true, 200, "Login success", q);
  } catch (e) {
    return baseRes(res, false, 500, `Error: ${e.message}`, null);
  }
};

module.exports = {
  login,
  register,
};
