import {connection} from '../database/connection.js'

export const getProducts = async (req, res) => {
    connection.query(
        'SELECT * FROM productos',
        function(err, results){
            res.json(results);
        }
    );
};

export const viewProducts = () =>{
    return new Promise(function(resolve){
        connection.query(
            'SELECT * FROM productos',
            function(err, results){
                resolve(results);
            }
        );
    });
}

export const getProduct = async (req, res) =>{
    const {id_producto} = req.query;
    connection.query(
        'SELECT * FROM productos WHERE id_producto = ?',
        [id_producto],
        function(err, results){
            res.json(results[0]);
        }
    );
};

export const saveProduct = async (req, res) => {
    const {id_producto, precio, nombreProducto} = req.body;

    if(id_producto == null || id_producto == undefined || id_producto == 0){
        connection.query(
            'INSERT INTO productos (precio, nombreProducto) VALUES (?,?)',
            [precio, nombreProducto],
            function(err, results){
                return res.json({
                    "id": results.insertId,
                    "msg": "producto creado correctamente",
                });
            }
        );
    } else{
        connection.query(
            'UPDATE productos SET precio = ?, nombreProducto = ? WHERE id_producto = ?',
            [precio, nombreProducto, id_producto],
            function(err, results){
                return res.json({
                    "id": id_producto,
                    "msg": "Usuario actualizado correctamente",
                });
            }
        );
    }
};

export const deleteProduct = async (req, res) => {
    const {id_producto} = req.body;
    connection.query(
        "DELETE FROM productos WHERE id_producto = ?",
        [id_producto],
        function(err, results){
            res.json(results);
        }
    );
};