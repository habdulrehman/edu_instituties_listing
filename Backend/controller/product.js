const productModel = require("../model/productModel")
const myProduct = require("../products")

const getProducts =async (req, res)=>{
    const data =await productModel.find()
    res.status(200).json({data:data})
}

const createProduct = (req, res)=>{
    const data = new productModel({
        school: req.body.school,
        college: req.body.college,
        university: req.body.university,
        acadmey: req.body.acadmey,
        sports_acadmey: req.body.sports_acadmey,

    })
    data.save()
    res.status(201).json({msg: 'Product created successfully', data})
}

const updateProduct = async (req, res)=>{
    const {id} = req.params
    const body = req.body
    const data = await productModel.findByIdAndUpdate(id, body, {new: true})
    res.status(201).json({msg: `Product with id ${id} updated successfully`, data})
}

const deleteProduct =async (req, res)=>{
    try {
        const {id} = req.params
        console.log(id)
        await productModel.findByIdAndDelete(id)
        res.status(200).json({msg:`product with id ${id} deleted successfully`})
        
    } catch (error) {
        res.status(404).json({msg: 'This id is not valid', error})
    }
}

module.exports = {getProducts, createProduct, deleteProduct, updateProduct}