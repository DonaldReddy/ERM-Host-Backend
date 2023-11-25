import app from './app.js'
import dbConnect from './database/dbConnect.js'

dbConnect().then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log("Server Running");
    })
})
