const userData = require("../model/userModal");

const signup = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    console.log("data reaching backend:::", name);

    // Check if user already exists
    const existingUser = await userData.findOne({ Email: email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const newUser = new userData({
      Name: name,
      Email: email,
      Password: password,
      Phone: phone,
    });

    // Save user to the database
    await newUser.save();

    // Send a success response with user details (excluding password)
    res.status(201).json({
      user: {
        id: newUser._id,
        name: newUser.Name,
        email: newUser.Email,
        phone: newUser.Phone,
      },
      message: "Signup successful",
    });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const Login = async (req, res) => {
  try {
    const inputemail = req.body.email;
    const inputpassword = req.body.password;
    console.log("received:::", inputemail, inputpassword)
    const UserExistInDb = await userData.findOne({ Email: inputemail });
    if (UserExistInDb) {
      if (UserExistInDb.Password === inputpassword) {
        console.log("is logged")

        res.status(201).json({
          user: { id: UserExistInDb.id },
          message: "Signup successful",
        });

      } else {
        console.log("not logged")
      }
    } else {
      return res.status(400).json({ error: "User does not exists, sign up" });
    }


    console.log(inputemail, inputpassword)


    //need to add JWT loggics................
  }
  catch (error) {
    return res.status(400)
  }

}



//this is user home page
const Homepage = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userData.findById(userId);
    console.log("from server home:", userId)
    console.log("from userdata:", user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}



module.exports = { signup, Login, Homepage };
