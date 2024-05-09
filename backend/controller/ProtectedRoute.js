require("dotenv").config();
// const axios = require("axios");
const WeightGain = async (req, res) => {
  try {
    var decoded;
    //const token = req.cookies.token;
    const token = req.headers.authorization.split(" ")[1];
    if (!token || token === undefined || token ==="null") {
      return res.status(400).json({
        success: false,
        message: "Not a verified user please login",
      });
    }
    console.log("reached");
     try {
      const jwt = require("jsonwebtoken");
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode)
      if (decode) {
        const Email = decode.Email;
        const data = await user.findOne({ Email });
        // console.log(data)
        if (data) {
          res.locals.role = data.Role; // Assigning user role to res.locals
          console.log("User role:", data.Role);
        } else {
          console.log("User not found in database");
        }
      }

      
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Success",
      //   data: chatCompletion.choices[0].message,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = WeightGain;
