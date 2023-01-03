const bars = document.querySelector('.icon');
const tray = document.querySelector('#tray');


bars.addEventListener('click', ()=>{
    tray.classList.toggle('show');
    bars.classList.toggle('how');

})


const speakers = [
    {
        speaker : 'ire aderinokun',
        title: 'first female google developer expert in nigeria',
        desc: `Ire Aderinokun is the first female goggle developer experts in Nigeria, 
        user interface designer, and also co-founder, Chief Operating Officer and VP Engineering of Helicarrier.`,
        image : 'images/iree.jfif',
        alt : "picture of ire-aderinokun",
    },

    {
        speaker : 'abasi ene-obong',
        title : 'ceo and founder, 54gene',
        desc : `Abasi Ene-Obong is the founder and Chief Executive Officer of 54gene, 
        a health technology company advancing the state of healthcare through large-scale discovery.`,
        image : 'images/Dr-Abasi-Ene-Obong-CEO-Founder-54gene_HighRes-1.jpg',
        alt : "picture of abasi ene-obong",
    },

    {
        speaker : 'Danny thompson',
        title : 'works at google',
        desc : `Experienced Leader with a demonstrated history of working in the computer software industry.`,
        image : 'images/danny.webp',
        alt : "picture of danny thompson",
        
    },

    {
        speaker : 'Akinola Akinade',
        title : 'ceo and founder  of aptlearn',
        desc : `Software engineer and tech expert, Akinola Abdulakeem Akinade, has revealed why he’s tutoring young Nigerians trying to get
          into tech space for free on social media.`,
        image : 'images/Agba-Akin.jpg',
        alt : "picture of Akinola akinade",
    },

      {
        speaker : 'Katie King',
        title : 'linkedIn and instagram influencer',
        desc : `Voted a Top 30 Woman in AI in August 2021, British-born Katie King is a Board Advisor, 
        published author, and keynote speaker on artificial intelligence and digital transformation.`,
        image : 'images/Katie-King.webp',
        alt : "picture of katie-king",
    },

    {
        speaker : 'lila tretikov',
        title : 'executive director of the wikimedia foundation',
        desc : `Ms. Tretikov is a Corporate Vice President & Deputy Chief Technology Officer at Microsoft Corporation,
         and a leading expert on Artificial Intelligence and business transformation.`,
        image : 'images/lila-tretikov.jpg',
        alt : "picture of lila tretikov",
    },
]

let test = speakers.slice(0,2)

const wrapper = document.querySelector('.wrapper');
const more = document.querySelector('.more');
const sponsors = document.querySelector('.sponsors')


function wrap(main,array) {
    const take = `
        <div class="img">
            <img src=${array.image} alt=${array.alt} srcset="">
        </div>
        <div class="texts">
            <h3>${array.speaker}</h3>
            <h4>${array.title}</h4>
            <p>${array.desc}</p>
        </div>
    
  `

  const each = document.createElement('div');
  each.classList.add('each')
  each.innerHTML = take;
  main.appendChild(each)
}


window.addEventListener('load', ()=>{
    if (window.innerWidth >= 768) {
        speakers.map((speaker)=>{
            wrap(wrapper,speaker);
          } )
    } 
    else {
        test.map((test)=>{
            wrap(wrapper,test)
        })
        more.addEventListener('click',()=>{
            wrapper.innerHTML='';
            more.style.display = "none";
            sponsors.style.display = "block"; 
            speakers.map((speaker)=>{
                wrap(wrapper,speaker);
              } )

        })
    
    }
})

window.addEventListener('resize', ()=>{
    if (window.innerWidth >= 768) {
        wrapper.innerHTML = '';
        speakers.map((speaker)=>{
            wrap(wrapper,speaker);
          } )
          more.style.display = "none";
        sponsors.style.display = "block"; 
    } 

    else  {
      wrapper.innerHTML='';
      test.map((test)=>{
        wrap(wrapper,test);
    })
    sponsors.style.display ="none";
        more.style.display = "block";
      
    }
})