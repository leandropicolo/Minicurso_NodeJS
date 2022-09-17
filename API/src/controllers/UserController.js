const users = [
    {
        id: 1,
        nome: 'Leandro',
        email: 'teste@teste'
    }
]

class UserController {
    store(req, res){
        const {name, email} = req.body;
        if(!name || !email){
            return res.status(400).json({message:'Nome e email são obrigatorios...'});
        }

        const newId = users[users.length - 1].id + 1;

        const newUser = {
            id: newId,
            name: name,
            email: email
        }

        users.push(newUser);

        return res.status(200).json({ message: "User created"});

    }

    index(req, res){
        return res.status(200).json(users);

    }

    show(req, res){
        const {id} = req.params;

        if(!id){
            return res.status(400).json({message: 'Id is invalid....'})
        }
        
        const currentUser = users.find((user) => user.id === parseInt(id));

        if(!currentUser){
            return res.status(404).json({ message: 'User not found'});
        }

        return res.status(200).json(currentUser);

        
    }

    update(){

    }

    delete(){

    }

}

module.exports = new UserController();