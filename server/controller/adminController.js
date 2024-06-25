const userData = require("../model/userModal");



const getUsersOnload = async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * limit;
      const users = await userData.find({ isAdmin: false }).skip(skip).limit(limit);
      const count = await userData.countDocuments({ isAdmin: false });
    //   console.log(users)
    //   res.status(200).json({
    //     Name:users.Name,
    //     Email:users.Email,
    //     Phone:users.Phone,
    //     Deleted:users.Deleted,
    //     isAdmin:users.isAdmin,
    //     Profile:users. Profile

    //   });

    const userDetails = users.map(user => ({
        Name: user.Name,
        Email: user.Email,
        Phone: user.Phone,
        Deleted: user.Deleted,
        isAdmin: user.isAdmin,
        Profile: user.Profile,
        
      }));
  
      console.log(userDetails,count);
      res.status(200).json(userDetails);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



module.exports={getUsersOnload}