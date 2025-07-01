const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const articleRoutes = require('./routes/articles');

const app = express();
const PORT = 5555;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/articles', articleRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://nata:1234567890@cluster0.zpq1tm2.mongodb.net/map?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('DB OK'))
.catch((err)=>console.log('DB error', err)), {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
//   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// }).catch(err => console.error('DB error:', err));

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});