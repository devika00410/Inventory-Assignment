const express=require("express")
const router=express.Router()
const inventorycontroller=require("../Controllers/InventoryControllers")

router.get('/',inventorycontroller.getInventory)
router.get('/id/:id',inventorycontroller.getInventoryById)
router.get('/category/:category',inventorycontroller.getInventoryByCategory)
router.put('/:id',inventorycontroller.updateInventory)
router.post('/', inventorycontroller.createInventoryItem);
router.patch('/:id',inventorycontroller.partialUpdateInventory)
router.delete('/:id',inventorycontroller.deleteInventory)

module.exports = router;