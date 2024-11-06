const con = require('../connect/connect').con;

const create = (req, res)=>{
    let numero = req.body.numero;
    let andar = req.body.andar;
    let tipoenum = req.body.tipoenum;
    let valordiaria = req.body.valordiaria;
    let statusquarto = req.body.statusquarto;
    let cliente = req.body.datadecadastro
    

    let query = 'INSERT INTO quartos (numero, andar, tipoenum, valordiaria, statusquarto, cliente,) VALUES'
   query += `('${numero}',' ${andar}','${tipoenum}','${valordiaria}','${statusquarto}','${cliente}');`;
    con.query(query, (err, result)=> { 
        if(err){
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const read = (req,res)=>{
    con.query('SELECT * FROM quartos',(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const update = (req,res)=>{
    con.query('UPDATE * FROM quartos WHERE id = ',(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}


const deletar = (req, res) => {
     let id = req.params.id;
     con.query(`DELETE FROM quartos WHERE id = '${id}'`, (err,result) =>{
        if(err){
            res.status(400).json(err).end();
        }else{
           res.status(201).json(result)
        }
     })

    }

module.exports = {
    create,
    read,
    update,
    deletar
}