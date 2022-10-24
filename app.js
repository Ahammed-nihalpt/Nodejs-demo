const express =require('express')
const session=require('express-session')

const app = express()
app.use(session({
    secret:'secretkey',
    resave:false,
    saveUninitialized: false,
}))
app.listen(3000,()=>{
    console.log('listening to port 3000')
});
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'ejs');
app.use(express.static("views"))

app.get('/',(req,res)=>{
    res.render('homepage')
})

app.get('/home/listview', (req,res) =>{
    const listData=[
        {content:"What is Lorem Ipsum?"},
        {content:"Why do we use it?"},
        {content:"Where can I get some?"},
        {content:"Where does it come from?"},
        {content:"What is Lorem Ipsum?"}
    ]
        res.render('listview',{listData})
})

app.get('/home/table', (req,res) =>{
    const data=[{
        first:"Mark",
        last:"Otto",
        handle:"@mdo"
    },
    {
        first:"Jacob",
        last:"Thornton",
        handle:"@fat"
    },
    {
        first:"Larry",
        last:"the Bird",
        handle:"@twitter"
    }
];
    res.render('table',{data})
})

app.get('/home/card', (req,res) =>{
    const cardData=[{
        image:'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRB4IzuD4-ICbG4fEncHEBshose8Fh2_uXFpua3-YgTdlyq_BaG-dfw2fg8OwEsbWN8',
        name:'Satya Nadella',
        info:'CEO of Microsoft'
    },
    {
        image:'http://searchengineland.com/figz/wp-content/seloads/2015/05/sundar-pichai-2-1920-800x450.jpg',
        name:'Sundar Pichai',
        info:'CEO of Google'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzvO2857Xg95DnEC3gMLPrXZyiXwC1DUOq0bApbA&usqp=CAE&s',
        name:'Laxman Narasimhan',
        info:'Starbucks'
    },
    {
        image:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSvTwO7va6UITcMDBvLc-R1i7kHGpvPCdpT-KKyaQMA1hGT5qbMSLW9LGgqRVBLzI-z',
        name:'Shantanu Narayen',
        info:'CEO of Adobe Systems'
    },
    {
        image:'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRkYR-08JShGM-z-iSpgmRpIm1ZKJRFx573M-YlDrPHH23vxDfKhm44jffz7Njko_XD',
        name:'Arvind Krishna',
        info:'CEO of IBM'
    },
    {
        image:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT3TclpLzPC0Hv3XCkOGrIPKdpJOuQkharI90fCEeTr6P8k5_wP-hUW2FsnCUQXNMpc',
        name:'Parag Agrawal',
        info:'CEO of Twitter'
    },
    {
        image:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS6qcPSGAEVApvKhlHlHfb5vk-hcCRtjRB4Csc7MNd7LFzC3rOsMWcHL8OefYb4S716',
        name:'Anand Mahindra',
        info:'CEO of Mahindra and Mahindra'
    },
]
    res.render('cardview',{cardData})
})


app.get('/count',(req,res)=>{
    req.session.ViewCount += 1;
    res.render('counter',{ViewCount: req.session.ViewCount})
})

app.get('/resetcounter',(req,res)=>{
    req.session.destroy();
    res.redirect('/count')
})

app.use((req,res) =>{
    res.status(404).render('404')
})