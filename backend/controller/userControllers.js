const User = require('../models/Users');
var bcrypt = require('bcryptjs');


var salt = bcrypt.genSaltSync(10);


const userInfor = async(req, res) =>{

    const sessionUser = req.session.user;
    if (sessionUser && sessionUser.userName != '') {
      // 返回查询信息json

        return res.json({
            code: 0,
            msg: 'find personal infor correctly',
            data: {
               user: sessionUser,
            }
        });
    } else {
        return res.json({
            code: 506,
            msg: 'illegal operation',
            data: {
                sessionUser,
            }
        })
    }

}



const logoutUser = async(req, res) =>{
    const user = req.session.user;
    if (user && user.name != '') {
        req.session.user='';
        return res.json({
            code: 0,
            msg: 'get_succ',
            data: {
                info: "退出登录成功！",
            }
        });
    } else {
        return res.json({
            code: 101,
            msg: 'get_fail',
            data: {
                info: "用户未登录！",
            }
        })
    }
}

const updateUserForPersonPage = async (req, res) => {


    var id = req.body.id
    var userName = req.body.userName
    var userPass = req.body.userPass
    var userEmail = req.body.userEmail



    if (id == '') {
        res.send({
            msg: "id should not empty",
            data: '',
            code: 505
        });
        return
      
    }
    if (userName == '') {
      
        res.send({
            msg: "userName should not empty",
            data: '',
            code: 505
        });
        return
    }
    if (userPass == '') {
        
        res.send({
            msg: "userPass should not empty",
            data: '',
            code: 505
        });
        return
    }
    if (userEmail == '') {
      
        res.send({
            msg: "userEmail should not empty",
            data: '',
            code: 505
        });
        return
    }
        // 如果它改用户名的话 要做唯一校验
        if ( req.session.user.userName != userName) {
            try {
                const nameUnique = await User.find({
                    'userName': req.body.userName
                });
                if (nameUnique.length != 0) {
                    res.send({
                        msg: "userNmae shuold be unique",
                        data: '',
                        code: 505
                    });
                    return
                }
              
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    msg: "Server Error"
                })
            }
        } 
    




    var hash = bcrypt.hashSync(userPass, salt);

    try {
        // to do 存数据 加密
    
        const user = await User.updateOne({
            _id: id
        }, {
            'userName': userName,
            'userPass': hash,
            'userEmail': userEmail,
        });

        // find this user update session
        try {
        const find = await User.findById(id)
        req.session.user = find;
        }
        catch{
            console.log('update user session error')
        }

         return res.json({
            code: 0,
            msg: 'update successfully',
            data: {
                user: user,
            }
        })

    } catch (error) {
        res.send(error)
    }
}




const updateUser = async (req, res) => {


    var id = req.body.id
    var userName = req.body.userName
    var userPass = req.body.userPass
    var userEmail = req.body.userEmail



    if (id == '') {
        res.send("id should not empty")
        return
    }
    if (userName == '') {
        res.send("userName should not empty")
        return
    }
    if (userPass == '') {
        res.send("userPass should not empty")
        return
    }
    if (userEmail == '') {
        res.send("userEmail should not empty")
        return
    }



    try {
        // to do 存数据 加密
    
        const user = await User.updateOne({
            _id: id
        }, {
            'userName': userName,
            'userPass': userPass,
            'userEmail': userEmail,
        });
         return res.json({
            code: 0,
            msg: 'update successfully',
            data: {
                user: user,
            }
        })

    } catch (error) {
        res.send(error)
    }
}







const userRegister = async (req, res) => {





    var userName = req.body.userName
    var userPass = req.body.userPass
    var userEmail = req.body.userEmail


    //validation 


    if (userName == '' || userName == undefined) {
        res.send({
            msg: "username should not empty",
            data: '',
            code: 505
        });
        return
    }

    if (userPass == '' || userPass == undefined) {
        res.send({
            msg: "userPass should not empty",
            data: '',
            code: 505
        });
        return
    }

    if (userEmail == '' || userEmail == undefined) {
        res.send({
            msg: "userEmail should not empty",
            data: '',
            code: 505
        });
        return
    }
    //username validation unique
    try {
        const nameUnique = await User.find({
            'userName': req.body.userName
        });
        if (nameUnique.length!=0) {
            res.send({
                msg: "userNmae shuold be unique",
                data: '',
                code: 505
            });
            return
        }
      
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Server Error"
        })
    }


    // to do 正则 一般前端拦得住
    //validation end
    var hash = bcrypt.hashSync(userPass, salt);

    var user = new User({
        'userName': userName,
        'userPass': hash,
        'userEmail': userEmail
    });
    try {
        user.save();
        // 注册成功跳转登录页
        console.log("注册成功 接下来进行重定向")

        res.send({
            msg: "regist sucessfully",
            data: user,
            code: 0
        });

        return
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: " Error"
        })
    }
}


const userLogin = async (req, res) => {

   

    //validation 

    var userName = req.body.userName
    var userPass = req.body.userPass
    if (userName == '') {
        res.send({
            msg: "userName should not empty",
            data: '',
            code: 505
        });
        return
    }

    if (userPass == '') {
        res.send({
            msg: "userPass should not empty",
            data: '',
            code:  505
        });
     
        return
    }
  

    // admin login logic


    if (userName =='admin'  ) {

        if (userPass == 'Admin123') {
            res.send({
                msg: "admin login successfully",
                data: '',
                code:  111
            });
            return

        }  
        res.send({
            msg: "admin password wrong",
            data: '',
            code:  508
        });
     
        return
    }
  


    //validation end

    try {

        const user = await User.find({
            'userName': req.body.userName
        });
        if (user.length == 0) {

            res.send({
                msg: "username do not  exist",
                data: user,
                code: 502
            });

            return

        }
        // to do  password validation should change to 加密 
        let checkPass=bcrypt.compareSync(userPass,user[0].userPass);
        if (!checkPass) {

            res.send({
                msg: "password  wrong",
                data: user[0],
                code: 501

            });
            return
        }



        const  loginUser = req.session.user
        if (loginUser  && loginUser.userName == userName) {
        
            res.send({
                msg: "user is already logged in",
                data: user[0],
                code: 188
    
            });
            return
    
        
    }
    


        // login success 

        // to do  save session 
        //localStorage.setItem('user', JSON.stringify(user[0]));

        req.session.user = user[0];


        res.send({
            msg: "login successful",
            data: {
              user: user[0]
            },
            code: 0

        });
        return
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Server Error"
        })

    }

    
}

const deleteUserById = async (req, res) => {
    var {
        id
    } = req.params
    console.log(id)
    if (id == '') {
        res.send("id should not empty")
        return
    }
    try {
        const users = await User.findByIdAndDelete(id);
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error"
        })
    }

}




  


const getAllUsers = async (req, res) => {

    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "get All Users Error"
        })
    }
}

const getUserByUserName = async (req, res) => {
    try {
        const user = await User.find({
            'userName': req.params.userName
        });
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Server Error"
        })
    }
}



module.exports = {
    getAllUsers,
    getUserByUserName,
    userLogin,
    userRegister,
    deleteUserById,
    updateUser,
    logoutUser,
    userInfor,
    updateUserForPersonPage
}