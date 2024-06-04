import {Router} from 'express';
import {getProducts, getProduct, saveProduct, deleteProduct} from '../controllers/productos.js';

const router = Router();

router.get('/verProductos', getProducts);
router.post('/guardarProductos', saveProduct);
router.delete('/borrarProductos', deleteProduct);

export default router;