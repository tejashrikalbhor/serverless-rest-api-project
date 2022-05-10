// save the file by route

const express = require("express");
const sequelize = require('sequelize');
const db = require('../models/index');
const user = db['Users'];
const router = new express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get("/", (req, res) => {
    res.send("hello for user..");
});

//get all
router.get("/user", async (req, res) => {
    try {
        const data = await user.findAll();
        return  res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return  res.status(500).send(err.message);
    }

})

//get by id
router.get("/user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await user.findByPk(id);
        if (!data) {
            return res.status(404).send("user with this id does not exists");
        } else {
            res.send(data);

        }
    } catch (err) {
        return  res.status(500).send(err.message);
    }

})

// create a new user
router.post("/user", async (req, res) => {
    try {
const data = await  user.create(req.body);
     return res.status(200).json({
         "name":req.body.name,
         "address" : req.body.address,
         "age" : req.body.age
        });
    } catch (err) {
        return  res.status(500).json({error: err.message});
    }

})

//update user by id
router.put("/user/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {

        const updateinfo = await user.update(data, {
             where: {
                    id: id
             }
                 
            });
 const upDateuser = await user.findOne({where :{id:id}});
            if(!upDateuser)
            {
                return res.status(404).send("user with this id does not exists");
            }
            else{
              
                res.status(200).json({user:upDateuser});
            }
        } 
        catch (err) {
            return  res.status(500).json({error: err.message});  
        }
    });

//delete user
router.delete("/user/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const data = await user.destroy({
            where:{
                id:id
            }
        });
        if(!data)
        {
            return res.status(404).send("user with this id does not exists");
        }
        else{
          
            res.status(200).send("user deleted successfully..");
        }
    } 
    catch (err) {
        return  res.status(500).json({error: err.message});  
    }
    

})
 
module.exports = router;

