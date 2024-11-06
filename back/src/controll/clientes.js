const con = require('../connect/connect').con;

const create = (req, res)=>{
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let endereco = req.body.endereco;
    let datadenascimento = req.body.datadenascimento;
    let datadecadastro = req.body.datadecadastro
    

    let query = 'INSERT INTO clientes (nome, cpf, email, endereco, datadenascimento, datadecadastro,) VALUES'
   query += `('${nome}',' ${cpf}','${email}','${endereco}','${datadenascimento}','${datadecadastro}');`;
    con.query(query, (err, result)=> { 
        if(err){
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const read = (req,res)=>{
    con.query('SELECT * FROM clientes',(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const update = (req,res)=>{
    con.query('UPDATE * FROM clientes WHERE id = ',(err,result)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}




const deletar = (req, res) => {
     let id = req.params.id;
     con.query(`DELETE FROM clientes WHERE id = '${id}'`, (err,result) =>{
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