const inventorySummaries = [
    {
        id: 1,
        name: "Electronics Store",
        category: "Electronics",
        totalItems: 15,
        totalQuantity: 87,
        totalValue: 25400.50
    },
    {
        id: 2,
        name: "Book Haven",
        category: "Books",
        totalItems: 32,
        totalQuantity: 420,
        totalValue: 8560.25
    },
    {
        id: 3,
        name: "Fashion Hub",
        category: "Clothing",
        totalItems: 28,
        totalQuantity: 315,
        totalValue: 18750.75
    },
    {
        id: 4,
        name: "Fresh Mart",
        category: "Grocery",
        totalItems: 45,
        totalQuantity: 680,
        totalValue: 9250.30
    },
    {
        id: 5,
        name: "Sports Gear",
        category: "Sports",
        totalItems: 22,
        totalQuantity: 95,
        totalValue: 32100.00
    },
    {
        id: 6,
        name: "Home Comfort",
        category: "Furniture",
        totalItems: 18,
        totalQuantity: 42,
        totalValue: 45800.60
    }
];


// / Get

exports.getInventory = (req, res) => {
    res.status(200).json(inventorySummaries)
}

// Get details by id
exports.getInventoryById = (req, res) => {
    const { id } = req.params
    const inventory = inventorySummaries.find((b) => b.id === parseInt(id))

    if (inventory) {
        res.status(200).json(inventory)
    } else {
        res.status(404).json({ message: "Inventory Not Found" })
    }
}

// Get details by category
exports.getInventoryByCategory = (req, res) => {
    const { category } = req.params
    const inventories = inventorySummaries.filter((b) => b.category.toLowerCase() === category.toLowerCase())
    if (inventories.length > 0) {
        res.status(200).json(inventories)
    } else {
        res.status(404).json({ message: "Category Not Found" })
    }
}

// Post
exports.createInventoryItem = (req, res) => {
    const newInventoryItem = req.body;
    inventorySummaries.push(newInventoryItem);
    res.status(201).json(inventorySummaries);
}



// Put

exports.updateInventory = (req, res) => {
    const { id } = req.params
    const newInventory = inventorySummaries.find((b) => b.id === parseInt(id))
    if (newInventory) {
        if (req.body.name) newInventory.name = req.body.name
        if (req.body.category) newInventory.category = req.body.category
        if (req.body.totalItems) newInventory.totalItems = req.body.totalItems
        if (req.body.totalQuantity) newInventory.totalQuantity = req.body.totalQuantity
        if (req.body.totalValue) newInventory.totalValue = req.body.totalValue

        res.status(200).json(inventorySummaries)
    } else {
        res.status(404).json({ Message: "Summary Not Found" })
    }


}

// Patch

exports.partialUpdateInventory = (req, res) => {
    const { id } = req.params
    const inventoryToUpdate = inventorySummaries.find((b) => b.id === parseInt(id))
    if (!inventoryToUpdate)
        return res.status(404).json({ message: "The product not found" })
    if (req.body.id !== undefined)
        inventoryToUpdate.id = req.body.id
    if (req.body.name !== undefined)
        inventoryToUpdate.name = req.body.name
    if (req.body.totalItems !== undefined)
        inventoryToUpdate.totalItems = req.body.totalItems;
    if (req.body.totalQuantity !== undefined)
        inventoryToUpdate.totalQuantity = req.body.totalQuantity;
    if (req.body.totalValue !== undefined)
        inventoryToUpdate.totalValue = req.body.totalValue;
    res.status(200).json( inventoryToUpdate)
}

// Delete

exports.deleteInventory= (req,res)=>{
const {id}=req.params
const index=inventorySummaries.findIndex((b)=>b.id===parseInt(id))

if(index=== -1)
    return res.status(404).json({message:"The data not found"})
const removedItem=inventorySummaries.splice(index,1)
res.status(200).json(removedItem)
}