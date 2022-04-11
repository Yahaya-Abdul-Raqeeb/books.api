const { title } = require("process")
const books=require("../books")

//get all books
const getBooks =(req, res)=>{
res.status(200).json(books)

}

//delete a book
/*const deleteBook = async(req, res)=>{
    const foundBook = await books.findByTitle(req.params.title)
    if (foundBook){
        foundBook.remove()
        res.json({msg:"book removed"})
    }
    else{
        res.status(404).json({error:"Book not found"})
    }
}*/
//delete a book
const deleteBook=("/book/:title", (req, res)=>{
    res.json(books.filter((book)=>book.title!=req.params.title))
})

module.exports={getBooks, deleteBook}