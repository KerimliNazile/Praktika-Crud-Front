import express from "express"
import cors from "cors"

import mongoose, { Schema } from "mongoose"
import { config } from "dotenv"

config()
const app = express()

//Midleware 
app.use(cors())
app.use(express.json())


const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: [{ type: String }]

}, { timestamps: true }
)




const Books = mongoose.model("books", bookSchema)

//Get All Users
app.get("/books", async (req, res) => {
    try {
        const books = await Books.find({})
        res.send(books)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})
//User get by id

app.get("/books/:id", async (req, res) => {
    try {
        const books = await Books.findById(req.params.id)
        res.send(books)
    } catch (error) {
        res.status(500).json({ message: error })

    }
})//Add User
app.post("/books", (req, res) => {
    const book = new Books({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category

    })
    book.save()
    res.send({ message: "Book Created" })
})
//User Update
app.put("/books/:id", async (req, res) => {
    try {
        const book = await Books.findByIdAndUpdate(req.params.id)

        if (book) {
            book.title = req.body.title,
                book.description = req.body.description,

                book.image = req.body.image,
                book.category = req.body.category

            await book.save()
            res.json(book)
        } else {
            res.status(404).json({ message: "Not Found" })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})//Delete User

app.delete("/books/:id", async (req, res) => {
    try {
        await Books.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Book Deleted" })

    } catch (error) {
        res.status(500).json({ message: error })
    }
})

const PORT = process.env.PORT
const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)

mongoose.connect("mongodb+srv://nazile:nazile@cluster0.haleq1p.mongodb.net/")
.then(()=>console.log("Connected db"))
.catch(err => console.log("Db not connect" + err))

app.listen(PORT, () => {
    console.log("Server Connection");
})