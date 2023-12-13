const Todo = require('../models/Todo');

exports.getTodo = async(req, res) => {
    try{
       const todos = await Todo.find({});

       res.status(200).json(
        {
            success:true,
            data:todos,
            message:'Entire data has been fetched',
        }
    )
    }
    catch(err){
        console.error(err);

        res.status(500).json(
            {
                success:false,
                error: err,
                message:'Server Error',
            }
        )
    }
}

exports.getTodobyId = async(req, res) => {
    try{
        const id = req.params.id;
       const todos = await Todo.findById({_id: id});

       if(!todos){
        res.status(404).json(
            {
                success:false,
                message:`no data found`,
            }
        )
       }
       res.status(200).json(
        {
            success:true,
            data:todos,
            message:`todo ${id} data successfully fetched`,
        }
    )
    }
    catch(err){
        console.error(err);

        res.status(500).json(
            {
                success:false,
                error: err,
                message:'Server Error',
            }
        )
    }
}