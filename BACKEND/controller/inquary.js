const inquary = require("../model/inquary")

//=========================addNewComment=================
exports.addComment = async function (req, res, next) {
    try {
        if (!req.body.name || !req.body.email || !req.body.mobile || !req.body.comment) {
            throw new Error('Please Enter Valid Feild')
        }
        const data = await inquary.create(req.body)
        res.status(201).json({
            status: "Sucessfull",
            message: "Addedd Sucessful",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

//=====================allComment====================

exports.allComment = async function (req, res, next) {
    try {
        const data = await inquary.find()
        res.status(200).json({
            status: "sucessful",
            message: "Data is found",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

//=====================get Comment====================

exports.getComment = async function (req, res, next) {
    try {
        const data = await inquary.findById(req.params.id)
        res.status(200).json({
            status: "sucessful",
            message: "Data is found",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

//=========================updateComment==============
exports.editComment = async function (req, res, next) {
    try {
        if (!req.body.status) {
            throw new Error('Please Enter Valid Feild')
        }
        var data = await inquary.findByIdAndUpdate(req.params.id, { "status": req.body.status });
        data = await inquary.findById(req.params.id);
        res.status(201).json({
            status: "Sucessfull",
            message: "Updated Sucessful",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

//================DeleteComment======================

exports.deleteComment = async function (req, res, next) {
    try {
        const data = await inquary.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "sucessful",
            message: "Data is Deleted",
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

//=====================searchComment=====================

exports.searchComment = async function (req, res, next) {
    try {
        const data = await inquary.find({
            $or: [
                { name: { $regex: new RegExp(req.query.name, 'i') } },
                { comment: { $regex: new RegExp(req.query.name, 'i') } }
            ]
        })
        res.status(200).json({
            status: "Successfull",
            message: "Data is found",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}


