const Product = require('../models/Products');


const updateProduct=async (req, res) => {

        var id          = req.body.id
        var name = req.body.name
        var description = req.body.description
        var price        = req.body.price
        var countInStock = req.body.countInStock
        var imageUrl     = req.body.imageUrl
    
        
        if (id == '') {
                res.send("id should not empty")
                return
            }
        if (name == '') {
                res.send("name should not empty")
                return
            }
        if (description == '') {
                res.send("description should not empty")
                return
            }    
        if (price == '') {
                res.send("price should not empty")
                return
            }
        if (countInStock == '') {
                res.send("countInStock should not empty")
                return
            }
        if (imageUrl == '') {
                res.send("imageUrl should not empty")
                return
            }





          try {
              
        
                const product = await Product.updateOne({
                    _id: id
                }, 
                {
                 'name':name, 
                 'description':description,
                 'price':price,
                 'countInStock':countInStock,
                 'imageUrl':imageUrl,
                });
                res.send({
                    data: product,
                    msg: 'Update user successfully!',
                    
                })
            
        } catch (error) {
            res.send(error)
        }
    }





const deleteProductById=async (req, res) => {
    var {id} = req.params
        console.log(id)
        if (id == '') {
            res.send("id should not empty")
            return
          }
        try {
            const products = await Product.findByIdAndDelete(id);
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Error"})
        }
    }

const createProducts=async (req, res) => {

      
        var description = req.body.description
        var name = req.body.name
        var price        = req.body.price
        var countInStock = req.body.countInStock
        var imageUrl     = req.body.imageUrl
    
    
       
        if (description == '') {
                res.send("description should not empty")
                return
            }    
        if (name == '') {
                res.send("name should not empty")
                return
            } 
        if (price == '') {
                res.send("price should not empty")
                return
            }
        if (countInStock == '') {
                res.send("countInStock should not empty")
                return
            }
        if (imageUrl == '') {
                res.send("imageUrl should not empty")
                return
            }




    const products = new Product({
        'name':name, 
        'description':description,
        'price':price,
        'countInStock':countInStock,
        'imageUrl':imageUrl,
      });
      try {
        products.save();
          res.json(products);
         
      } catch (error) {
          console.error(error);
          res.status(500).json({message: " Error"})
      }
    }




const getAllProducts=async (req, res) => {

    // const userLogin = req.session.user;
    // console.log(userLogin)
    // if(userLogin == '' || userLogin == undefined){
    //     res.send({
    //         msg: "user do not login , please login",
    //         data: userLogin,
    //         code: 503

    //     });
    //     return

    // }

    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

const getProductById=async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProduct,
    createProducts
}