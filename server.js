const path = require('path')
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const app = express();
const PORT = process.env.PORT || 8080;

const hbs = exphbs.create({helpers});

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

<<<<<<< HEAD
sequelize.sync().then(()=> {
=======
sequelize.sync({force: true}).then(()=> {
>>>>>>> af478907fda8002d86b07b865f6c4fdfa0dff359
    app.listen(PORT, () => console.log('app running on port ' + PORT))
})