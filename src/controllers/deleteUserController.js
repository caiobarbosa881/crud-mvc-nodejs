'use strict';

const User = require("../models/User");

const deleteUser = async (req, res) => {
    
    if (req.params.userId == undefined || req.params.userId == null) {
        return res.redirect("/?error=noUserFound");
    };
    
    await User.destroy({
        where: {
            userId: req.params.userId,
        }
    });

    return res.json({"mensagem": "O usuário foi removido com sucesso!!!"});
};

module.exports = { 
   deleteUser
};
