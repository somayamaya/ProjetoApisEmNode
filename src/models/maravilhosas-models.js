const { response } = require('express');
let data = require('../data/data.json')

// selectAllData

const selectAllData = () =>{
    return data

}

const selectDataById = (id)=>{
    return data.find(maravilhosa => maravilhosa.id == id);
}

const insertData = (novaMaravilhosa) => {
    const existeMaravilhosa = data.find(maravilhosa => maravilhosa.id == novaMaravilhosa.id)
    if(!existeMaravilhosa) {
        data.push(novaMaravilhosa)
        return data.find(maravilhosa => maravilhosa.id == novaMaravilhosa.id);
    }

    return false;
}

const updateData = (updateMaravilhosa)=>{
    
    const idsMaravilhosa = data.map(maravilhosa => maravilhosa.id)
    const indexMaravilhosa = idsMaravilhosa.indexOf(updateMaravilhosa.id)
    if(indexMaravilhosa > -1) {
        data.splice(indexMaravilhosa, 1, updateMaravilhosa)
        return data[indexMaravilhosa]
    }
    return false
}

const deleteData= (idMaravilhosa) =>{
    const existeMaravilhosa = data.find(maravilhosa => maravilhosa.id == idMaravilhosa)
    

    if(existeMaravilhosa) {
        
        const newData = data.filter(maravilhosa => maravilhosa.id != idMaravilhosa);
        data = newData;
        return true
    }

    return false;



}

module.exports = {
    selectAllData,
    selectDataById,
    insertData,
    updateData,
    deleteData
}
//selectDataById

//insertData

//updateData

//deleteData