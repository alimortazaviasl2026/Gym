import Questions from "../../components/features/Questions/Questions"

const services = [
    {
      id:1 , img :'/Gym/Frame 314 1.png' ,
    },
    {
      id:2 , img :'/Gym/Frame 314 2.png' ,
    },
    {
      id:3 , img :'/Gym/Frame 314 3.png' ,
    },
    {
      id:4 , img :'/Gym/Frame 314 4.png' ,
    },
]

const tools = [
  {
      id:1 , tool :'Carlrie' , img:'/Gym/Frame 443.png'    
  },
  {
      id:2 , tool :'Bmi calculator' , img:'/Gym/Frame 444.png'
  },
  {
      id:3 , tool :'goal setting' , img:'/Gym/Frame 445.png'
  },
  {
      id:4 , tool :'program setting' , img:'/Gym/Frame 446.png'
  },
  {
      id:5 , tool :'adviser' , img:'/Gym/Frame 447.png'
  },
]



const generateComments = () => {
  return [
    {
      id:1 , name:'Steven Haward' , role :'our customer' , idea :'I’ve been using Fitmaker for the past three months, and I’m genuinely impressed. The website is easy to navigate, and everything is laid out clearly. I purchased the Premium Plan, and the personalized coaching has been a game-changer for me. My coach is incredibly supportive and always available to answer my questions. The weekly video sessions keep me motivated, and the custom meal plans have helped me stay on track with my goals. Highly recommended for anyone serious about their fitness journey!' , img :'/Gym/Frame 5 (1) 1 (1).png'
    },
    {
     id:2 , name:'ali Curly' , role :'our customer' , idea :'I’ve rything is laid out clearly. I purchased the Premium Plan, and the personalized coaching has been a game-changer for me. My coach is incredibly supportive and always available to answer my questions. The weekly video sessions keep me motivated, and the custom meal plans have helped me stay on track with my goals. Highly recommended for anyone serious about their fitness journey!' , img :'/Gym/Frame 5 (1) 1.png'
    },
    {
     id:3 , name:'Zahra Abdi' , role :'our customer' , idea :'I’ve been using Fitmaker for the past three months, and I’m genuinely impressed. The website is easy to navigate, and everything is laid out clearly. I purchased the Premium Plan, and the personalized coaching has been a game-changer for me. My coach is incredibly supportive and always available to answer my questions. The weekly video sessions keep me motivated, and the custom meal plans have helped me stay on track with my goals. Highly recommended for anyone serious about their fitness journey!' , img :'/Gym/Frame 376.png'
    },
  ]
}




const members = [
  {id :1 , name :'Sam Cole' , role :'personal Trainer', img:'/Gym/Frame 5 (1) 1.png'},
  {id :2 , name :'Michael Harris' , role :'personal Trainer', img:'/Gym/Frame 5 (1) 1.png'},
  {id :3 , name :'John Anderson' , role :'public Trainer', img:'/Gym/Frame 376.png'},
  {id :4 , name :'Tom Blake' , role :'public Trainer', img:'/Gym/Frame 5 (1) 1 (2).png'},
]



const BlogsData ={
  id:101,
  title:'blogs',
  photos : [
  { publics : ['/Gym/Frame 428.png' ,'/Gym/Frame 429.png' ,'/Gym/Frame 430.png' ,'/Gym/Frame 431.png' ,]},
  {main:['/Gym/Frame 427.png']}
  ]
}




const communityData = [
  {id:1,title :{word1:'Personalized ' , word2:'Workout Plans'} , text:'Customized routines that match your fitness level and goals, ensuring you achieve the best results in the most efficient way.'},
  {id:2,title :{word1:'Expert ' , word2:' Coaching'} , text:'Work with certified trainers who will guide you every step of the way to ensure youre on the right track.'},
  {id:3,title :{word1:'Community ' , word2:' Support'} , text:'Join a vibrant community of fitness enthusiasts where you can share experiences, get motivated, and stay inspired.'},
  {id:4,title :{word1:'Exclusive ' , word2:'Resources'} , text:'Access premium content, including video tutorials, nutrition guides, and member-only discounts on fitness gear.'},
]





const FAQ = [
  {
    id:1,
    Question:'how can I get your services ?',
    answer :'at first you should sign to get all services'
  },
  {
    id:2,
    Question:'can I talk to Trainer directly ?',
    answer :'yes, why not , after booking a trainer you are able to do that'
  },
  {
    id:3,
    Question:'how to reserve an appointment ?',
    answer :'to get an appointMent you need to pay and then you choose the time '
  },
  {
    id:4,
    Question:'how can I say my Opinion ?',
    answer :'to set your opinion you should go to comment page'
  },
  {
    id:5,
    Question:'how can I contact with Trainer ?',
    answer :'with some simple clicks '
  },
  {
    id:6,
    Question:'how much time does it take to get our programs?',
    answer :'at leaset you need to wait about two days'
  },
  {
    id:7,
    Question:' how to call the support team ? ',
    answer :'go to contact page you can call us '
  },
]

//api document file.json  ways postman  




export {services , tools , generateComments , members , BlogsData , communityData , FAQ} 