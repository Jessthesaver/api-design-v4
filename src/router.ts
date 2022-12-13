import {Router} from 'express'
import {body , oneOf, validationResult} from 'express-validator'
import { getOneProduct, getProducts,createProduct,updateProduct,deleteProduct } from './handlers/products'
import { getUpdates,getOneUpdate, createUpdate, updateUpdate,deleteUpdate } from './handlers/updates'
import { handleInputErrors } from './modules/middleware'
const router = Router()

/*
    Product
*/
router.get('/product',  getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(),updateProduct);
router.post('/product/', body('name').isString(), handleInputErrors, createProduct);
router.delete('/product/:id', deleteProduct)

/*
    Update
*/
router.get('/update',getUpdates)
router.get('/update/:id', getOneUpdate)
router.put('/update/:id',  
    body('title').optional,
    body('body').optional(),  
    body('version').optional(),
    body('status').isIn(['IN_PROGRESS','SHIPPED','DEPRECATED']) ,
     updateUpdate)
router.post('/update/', 
    body('title').exists(),
    body('body').exists().isString(),
    body('productId').exists().isString(),  
    createUpdate)
router.delete('/update/:id', deleteUpdate)

/**
 * Update points
 */
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', 
    body('name').optional().isString(),
    body('description').optional().isString(),
    () => {})
router.post('/updatepoint/',
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(), () => {})
router.delete('/updatepoint/:id', () => {})

/**
 * When to use patch vs put
 * patch just updates and put completely replaces
 */

export default router