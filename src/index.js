
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'))

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log('PATH: ', __dirname)

app.get('/', (req, res) => {
    res.render('home', {
        'title': 'Create your blog space',
        'message': "Introduce my self, I'm Dong. Hope to see you tomorrow ^^"
    });
});

app.get('/blogs', (req, res) => {
    const blogs = [
        {title: 'Blog 1', content: 'Content blog 1'},
        {title: 'Blog 2', content: 'Content blog 2'},
        {title: 'Blog 3', content: 'Content blog 3'},
    ]
    res.render('blogs', {
        'title_blog': 'Blog space',
        blogs,
    });
});

app.get('/about', (req, res) => {
    const infor_company = [
        {title: 'Goal short', content: 'Design System is basic knowledge in approaching to learn AI or other technology produres'},
        {title: 'Goal long', content: 'Developing service for providing and successing customer'}
    ]
    res.render('about', {
        'about_our': 'we are the furture leading to tend about providing solutions to develop and enhance human availibities in approaching with technologies.',
        infor_company
    })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});