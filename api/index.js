import express from "express";
import postRoutes from "./routes/post.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser";


const app = express()

app.use(express.json())
app.use(cookieParser)

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "../client/public/upload");
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + file.originalname);
//     },
//   });

// const upload = multer({ storage });

// app.post("/api/upload", upload.single("file"), function (req, res) {
//   const file = req.file;
//   res.status(200).json(file.filename);
// });

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