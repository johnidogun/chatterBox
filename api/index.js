import express from "express";
import postRoutes from "./routes/post.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser";


const app = express()

app.use(express.json())
app.use(cookieParser)
app.use("/api/post", postRoutes)
app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)

app.get("/test", (req, res)=>{
    res.json("it works")
})

// app.use("./routes/post.js", postRoutes)
app.listen(8800, ()=>{
    console.log("Connected!")
})