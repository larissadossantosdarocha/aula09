const con = require('../connect/connect').con;

const create = (req, res)=>{
    let cliente = req.body.cliente;
    let numero = req.body.email;
    let tipuenum = req.body.endereco
    
    
    let query = 'INSERT INTO telefone (cliente, numero, tipoenum,) VALUES'
   query += `(' ${cliente}','${numero}','${tipuenum}');`;
    con.query(query, (err, result)=> { 
        if(err){
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const read = (req,res)=>{
    con.query('SELECT * FROM telefone',(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const update = (req,res)=>{
    con.query('UPDATE * FROM telefone WHERE id = ',(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}


const deletar = (req, res) => {
     let id = req.params.id;
     con.query(`DELETE FROM telefone WHERE id = '${id}'`, (err,result) =>{
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
