app.set('view engine', 'html')
app.set('views', (__dirname + '/public'));

mongoose.connect("mongodb://localhost/workout", {
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});