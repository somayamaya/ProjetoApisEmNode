const { response } = require('express')
const model = require('../models/maravilhosas-models')

const getMaravilhosas = (request, response)=> {
    console.log(model.getAll())
    return response.status(200).json(model.getAll()) 


}
const getMaravilhosaById = (request, response)=> {
    console.log(request.params.id)
    console.log(model.getById(request.params.id))
    return response.status(200).json(model.getById(request.params.id))

}

const addMaravilhosa = (request, response) => {
    const novaMaravilhosa = request.body
    const adicionarMaravilhosa = model.addMaravilhosa(novaMaravilhosa)
    if(adicionarMaravilhosa) {
        return response.status(201).json(adicionarMaravilhosa)
    }


    return response.status(400).send("Erro.")
}


const updateMaravilhosa = (request, response)=>{
    const id = parseInt(request.params.id)
    const updateMaravilhosa = {id, ...request.body}
    const update = model.updateData(updateMaravilhosa)

    if(update)
        return response.status(200).json(update)

    return response.status(400).send("Erro.")
    

   

    


}

const deleteMaravilhosa = (request, response)=>{
    const id = parseInt(request.params.id)
    const delMaravilhosa = model.deleteData(id)

    if(delMaravilhosa)
    return response.status(200).send(' Maravilhosa Feke excluida' )
    
    return response.status(400).send('Maravilhosa Fake não encontrada')


}


module.exports = {
    getMaravilhosas,
    getMaravilhosaById,
    
    addMaravilhosa,
    updateMaravilhosa,
    deleteMaravilhosa
}

//Nomes dos métodos para implementação:

//getMaravilhosas

//getMaravilhosaById

//addMaravilhosa 

//updateMaravilhosa 

//deleteMaravilhosa


