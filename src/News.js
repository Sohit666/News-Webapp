import React, { PureComponent } from "react";
import NewsItem from "./NewsItem";

export default class News extends PureComponent {
  article = [
    {
      source: {
        id: null,
        name: "NBC4 Washington",
      },
      author: "Derrick Ward, News4 Reporter",
      title:
        "Fatal stabbing on 14th Street in NW DC stemmed from argument over sweet and sour sauce: prosecutors - NBC4 Washington",
      description:
        "The fatal stabbing of a 16-year-old girl after she left a McDonald’s on 14th Street NW early Sunday stemmed from an argument over sweet and sour sauce,…",
      url: "https://www.nbcwashington.com/news/local/fatal-stabbing-on-14th-street-in-northwest-dc-stemmed-from-argument-over-sweet-and-sour-sauce-prosecutors-say/3412503/",
      urlToImage:
        "https://media.nbcwashington.com/2023/08/Naima-Liggon-photo-from-family.jpg?quality=85&strip=all&resize=1200%2C675",
      publishedAt: "2023-08-29T01:48:45Z",
      content:
        "The fatal stabbing of a 16-year-old girl after she left a McDonalds on 14th Street NW early Sunday stemmed from an argument over sweet and sour sauce, prosecutors said.\r\nNaima Liggon, of Waldorf, Mar… [+1016 chars]",
    },
    {
      source: {
        id: null,
        name: "Deadline",
      },
      author: "Armando Tinoco",
      title:
        "Josh Seiter Dies: Former ‘Bachelorette’ Contestant Was 36 - Deadline",
      description:
        "Josh Seiter, a former contestant on The Bachelorette, has died. He was 36. Seiter was featured in Season 11, which aired in 2015, of the ABC dating show which had Kaitlyn Bristowe searching for lov…",
      url: "https://deadline.com/2023/08/josh-seiter-dead-the-bachelorette-contestant-1235530094/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2023/08/josh-seiter-the-bachelorette-dies.jpg?w=1024",
      publishedAt: "2023-08-29T01:47:00Z",
      content:
        "Josh Seiter, a former contestant on The Bachelorette, has died. He was 36.\r\nSeiter was featured in Season 11, which aired in 2015, of the ABC dating show which had Kaitlyn Bristowe searching for love… [+1685 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author:
        "Ben Brasch, Paulina Villegas, Praveena Somasundaram, Maham Javaid",
      title:
        "UNC-Chapel Hill faculty member killed in shooting, sparking campus lockdown - The Washington Post",
      description:
        "A person is in custody Monday after allegedly shooting and killing a faculty member at the University of North Carolina-Chapel Hill.",
      url: "https://www.washingtonpost.com/nation/2023/08/28/unc-shooting-faculty-member-killed/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M56BGXELNJEWXNCOHEG75QIKJA_size-normalized.jpg&w=1440",
      publishedAt: "2023-08-29T01:30:29Z",
      content:
        "A faculty member was dead and a person was in custody Monday after a shooting that shut down the University of North Carolina at Chapel Hill for three hours and sparked urgent warnings for students t… [+3812 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Shristi A, Noel Randewich",
      title:
        "Wall Street ends higher as investors await US inflation, jobs data - Reuters",
      description:
        "Wall Street ended higher on Monday, with gains in 3M and Goldman Sachs ahead of key inflation and jobs data this week that will offer more clues on the Federal Reserve's interest rate path.",
      url: "https://www.reuters.com/markets/us/futures-edge-higher-focus-shifts-inflation-jobs-data-2023-08-28/",
      urlToImage:
        "https://www.reuters.com/resizer/LnGMRQDTYbnPgOvIAHaCpNNaSz8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FHTOHYG5C5OX7E2EHW727KGH3E.jpg",
      publishedAt: "2023-08-29T00:57:00Z",
      content:
        "Aug 28 (Reuters) - Wall Street ended higher on Monday, with gains in 3M and Goldman Sachs ahead of key inflation and jobs data this week that will offer more clues on the Federal Reserve's interest r… [+2920 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title:
        "Hawaiian Electric says power lines sparked fire but firefighters fell short - The Guardian US",
      description:
        "In response to Maui county’s lawsuit, utility appears to blame emergency crews for most of the destruction",
      url: "https://www.theguardian.com/us-news/2023/aug/28/maui-wildfires-hawaiian-electric-company",
      urlToImage:
        "https://i.guim.co.uk/img/media/65f910ba6645490d811184a442eb175ddca44ca5/0_136_2372_1423/master/2372.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ca32c7a9dd2e61bfb14441cc1dbf39c0",
      publishedAt: "2023-08-29T00:45:00Z",
      content:
        "Hawaiis electric utility acknowledged its power lines started a wildfire on Maui but faulted county firefighters for declaring the blaze contained and leaving the scene, only to have a second wildfir… [+5154 chars]",
    },
    {
      source: {
        id: null,
        name: "Arizona Sports",
      },
      author: ", Tyler Drake",
      title:
        "Colt McCoy release a tough but necessary move for Cardinals - Arizona Sports",
      description:
        "The Arizona Cardinals had seen enough when it came to Colt McCoy running the offense, releasing the QB on Monday.",
      url: "https://arizonasports.com/story/3532651/gannon-colt-mccoys-release-a-tough-but-necessary-move-for-cardinals/",
      urlToImage:
        "http://arizonasports.com/wp-content/uploads/2023/08/IMG_8582-scaled-e1693268350990.jpeg",
      publishedAt: "2023-08-29T00:28:00Z",
      content:
        "TEMPE — When you know, you know.\r\nWhen it came to quarterback Colt McCoy and his spot on the roster, the Arizona Cardinals knew a change was needed, releasing the veteran signal caller Monday.\r\nAfter… [+1702 chars]",
    },
    {
      source: {
        id: null,
        name: "Florida Today",
      },
      author: "Jamie Groh",
      title:
        "ULA delays Atlas V launch to roll the rocket back ahead of Tropical Storm Idalia - Florida Today",
      description:
        "ULA teams chose to delay its Atlas V rocket launch from Cape Canaveral ahead of Tropical Storm Idalia. No new targeted launch date announced.",
      url: "https://www.floridatoday.com/story/tech/science/space/2023/08/28/tropical-storm-idalia-united-launch-alliance-rocket-atlas-v-cape-canaveral-space-force-nro-florida/70695897007/",
      urlToImage:
        "https://www.floridatoday.com/gcdn/authoring/authoring-images/2023/08/28/PBRE/70699730007-crb-082523-atlas-2.jpg?crop=3795,2145,x0,y108&width=3200&height=1809&format=pjpg&auto=webp",
      publishedAt: "2023-08-29T00:21:08Z",
      content:
        "Update:(Monday, Aug. 28) United Launch Alliance has delayed the launch of the NROL-107 mission to roll the Atlas V rocket back to ULA's vertical integration facility at Cape Canaveral Space Force Sta… [+6076 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Mary Gilbert, Robert Shackelford, Nouran Salahieh, Joe Sutton",
      title:
        "Idalia is expected to make landfall in Florida as a Category 3 hurricane with dangerous rain, winds and storm surge - CNN",
      description:
        "Tropical Storm Idalia is expected to strengthen into a hurricane Monday and could bring potentially catastrophic winds, heavy rain and flooding to Florida’s Gulf Coast as a powerful Category 3 storm later this week, prompting evacuations and school closures i…",
      url: "https://www.cnn.com/2023/08/28/weather/tropical-storm-idalia-florida-monday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230828004513-idalia-satellite-1a.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-29T00:00:00Z",
      content:
        "Tropical Storm Idalia is expected to strengthen into a hurricane Monday and could bring potentially catastrophic winds, heavy rain and flooding to Floridas Gulf Coast as a powerful Category 3 storm l… [+5995 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "USA still undefeated in Group C 🇺🇸 FIBA World Cup Highlights | SportsCenter - ESPN",
      description:
        "Check out these highlights of the USA's defeat of Greece in the FIBA World Cup, and hear from Coach Steve Kerr and Jalen Brunson on the team's success. Also ...",
      url: "https://www.youtube.com/watch?v=gX-__7WVLuk",
      urlToImage: "https://i.ytimg.com/vi/gX-__7WVLuk/maxresdefault.jpg",
      publishedAt: "2023-08-28T23:32:46Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title:
        "California school district sued over new policy that could forcibly out trans kids - The Guardian US",
      description:
        "State attorney general Rob Bonta filed a lawsuit against schools having to notify parents if their children change gender identity",
      url: "https://www.theguardian.com/us-news/2023/aug/28/california-school-policy-trans-kids-lawsuit",
      urlToImage:
        "https://i.guim.co.uk/img/media/26159c806b9bb679534b34d6d5d3ad94176d742a/0_136_4000_2401/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c781cb297cc0115e6706b345ea52771a",
      publishedAt: "2023-08-28T23:00:00Z",
      content:
        "Californias attorney general sued a southern California school district Monday over its new policy requiring schools to notify parents if their children change their gender identification or pronouns… [+11327 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Selome Hailu",
      title:
        "‘The Idol’ Canceled: Controversial Series From Sam Levinson and the Weeknd Won’t Get Season 2 - Variety",
      description:
        "Goodbye, angel. “The Idol” — HBO’s controversy-ridden series from Sam Levinson and Abel “The Weeknd” Tesfaye — has been canceled after one season. “’The Idol&#82…",
      url: "https://variety.com/2023/tv/news/the-idol-canceled-the-weeknd-hbo-season-2-1235706540/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2023/08/abel-the-weeknd-tesfaye-lily-rose-depp_1-e1693261981503.jpg?w=1000&h=563&crop=1",
      publishedAt: "2023-08-28T23:00:00Z",
      content:
        "Goodbye, angel.\r\n“The Idol” — HBO’s controversy-ridden series from Sam Levinson and Abel “The Weeknd” Tesfaye — has been canceled after one season.\r\n“’The Idol’ was one of HBO’s most provocative orig… [+2459 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "The Associated Press",
      title:
        "Powerful quake and aftershocks rock Indonesia's Bali and Java islands. No casualties reported - ABC News",
      description:
        "A powerful earthquake and two strong aftershocks have rocked Indonesia’s resort island of Bali and other parts of the country, causing panic but no immediate reports of damage or casualties",
      url: "https://abcnews.go.com/International/wireStory/powerful-earthquakes-rock-indonesias-bali-java-islands-casualties-102631451",
      urlToImage:
        "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
      publishedAt: "2023-08-28T22:58:27Z",
      content:
        "DENPASAR, Indonesia -- A powerful earthquake and two strong aftershocks rocked Indonesias resort island of Bali and other parts of the country early Tuesday, causing panic but no immediate reports of… [+1958 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Florida receives more than 1,600 complaints after potentially contaminated fuel sold as Idalia looms - WFLA News Channel 8",
      description:
        "8 On Your Side Investigator Mahsa Saeidi has what you need to know.",
      url: "https://www.youtube.com/watch?v=IRWISgpypLw",
      urlToImage: "https://i.ytimg.com/vi/IRWISgpypLw/maxresdefault.jpg",
      publishedAt: "2023-08-28T22:48:30Z",
      content: null,
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Robert Legare, Melissa Quinn",
      title:
        "Judge sets March 2024 trial date in Trump's federal case related to 2020 election - CBS News",
      description:
        "The trial for Donald Trump's election-related case in Washington, D.C., could be the first of the former president's four pending criminal cases to go to trial.",
      url: "https://www.cbsnews.com/news/trump-dc-trial-date-to-be-scheduled-judge/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2023/08/25/8e9b5e3f-d7b1-475c-a2a0-6b80a69eef77/thumbnail/1200x630g2/2d850375d1afd67641d04886b1598a3a/ap23237018593677.jpg?v=d305b8f74537e6fcb32d87e8b9acfe15",
      publishedAt: "2023-08-28T21:56:00Z",
      content:
        "Washington — A federal judge in Washington, D.C., has set a trial date for March 2024 in the case brought by the Justice Department against former President Donald Trump related to alleged efforts to… [+7904 chars]",
    },
    {
      source: {
        id: null,
        name: "AnandTech",
      },
      author: "Ryan Smith",
      title:
        "Hot Chips 2023: Intel Details More on Granite Rapids and Sierra Forest Xeons - AnandTech",
      description: null,
      url: "https://www.anandtech.com/show/20034/hot-chips-2023-intel-details-granite-rapids-and-sierra-forest-xeons",
      urlToImage:
        "https://images.anandtech.com/doci/20034/HotChips_2023_Intel-Xeons_Carousel_678x452.jpg",
      publishedAt: "2023-08-28T21:53:30Z",
      content:
        "With the annual Hot Chips conference taking place this week, many of the industry’s biggest chip design firms are at the show, talking about their latest and/or upcoming wares. For Intel, it’s a case… [+10944 chars]",
    },
    {
      source: {
        id: null,
        name: "Space.com",
      },
      author: "Mike Wall",
      title:
        "India to launch Aditya-L1, its 1st solar probe, on Sept. 2 - Space.com",
      description:
        "Aditya-L1 is scheduled to lift off Saturday (Sept. 2) at 2:20 a.m. EDT (0620 GMT).",
      url: "https://www.space.com/india-launch-aditya-l1-first-solar-probe-sept-2",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/tiacTzbBd7YGeG5FSJrvoV-1200-80.jpg",
      publishedAt: "2023-08-28T21:30:40Z",
      content:
        "India will launch its first sun-studying spacecraft this weekend, if all goes according to plan.\r\nThe Aditya-L1 solar observatory is scheduled to launch Saturday (Sept. 2) at 2:20 a.m. EDT (0620 GMT;… [+3090 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title:
        "Ron DeSantis faces two crises: A racist shooting and looming storm - POLITICO - POLITICO",
      description:
        "A racially-motivated Jacksonville tragedy, couple with a looming storm, pose big tests for the governor.",
      url: "https://www.politico.com/news/2023/08/28/desantis-florida-crises-hurricane-racist-shooting-00113226",
      urlToImage:
        "https://static.politico.com/7d/19/58c9e4a54e68bc8f2b9e2af69c93/fatal-store-shooting-florida-11950.jpg",
      publishedAt: "2023-08-28T21:12:52Z",
      content:
        "The vigil stood in contrast to press conferences in Tallahassee on Sunday and Monday, when DeSantis appeared visibly tired but spoke authoritatively about preparations overseeing Tropical Storm Idali… [+8379 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Kyle Barr",
      title:
        "Images of New CMF by Nothing Smartwatch and Earbuds Leak - Gizmodo",
      description:
        'Marketing banners show Nothing’s "Watch Pro" could cost around $55 and come with a near-two-inch screen.',
      url: "https://gizmodo.com/cmf-by-nothing-smartwatch-and-earbuds-leak-photos-1850781376",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/72a1e8c5bc1baaaadd22e9b83b6e9891.jpg",
      publishedAt: "2023-08-28T20:58:10Z",
      content:
        "Nothings not done with this summers product releases, even after revealing the Nothing Phone (2) and bringing Nothing OS 2 to the Phone (1). Just this month, the company launched its CMF brand that C… [+2963 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Marc Lallanilla",
      title:
        "Ozempic users say weight loss 'wonder drug' curbs cravings for booze, cigarettes, gambling - New York Post ",
      description:
        "“It does seem like there’s a pretty strong signal here,” said one medical expert of the mostly anecdotal reports.",
      url: "https://nypost.com/2023/08/28/ozempic-could-cure-cravings-for-alcohol-nicotine-and-drugs/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2023/08/newspress-collage-4sd1j7idt-1693252528537.jpg?quality=75&strip=all&1693238908&w=1024",
      publishedAt: "2023-08-28T20:53:00Z",
      content:
        "Ozempic and Wegovy are quickly becoming known as wonder drugs for their ability to treat an ever-growing range of conditions. \r\nHeart failure? Check. \r\nType 2 diabetes? Check. \r\nObesity, heart attack… [+4572 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        'Pope Francis blasts "backwards" U.S. conservatives, "reactionary attitude" in U.S. church - CBS News',
      description:
        'Francis has previously quipped it was an "honor" to be attacked by Americans.',
      url: "https://www.cbsnews.com/news/pope-francis-criticizes-us-conservatives-church/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2023/07/09/3617ea44-4a03-4737-937f-16dcfbc99dbf/thumbnail/1200x630/64d9351ce8d4528a6099654b74eade09/2023-07-09t113008z-1669366546-rc2nz1aw6lxs-rtrmadp-3-pope-cardinals.jpg?v=d305b8f74537e6fcb32d87e8b9acfe15",
      publishedAt: "2023-08-28T20:45:50Z",
      content:
        'Pope Francis has blasted the "backwardness" of some conservatives in the U.S. Catholic Church, saying they have replaced faith with ideology and that a correct understanding of Catholic doctrine allo… [+2116 chars]',
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }
 async componentDidMount(){
  console.log("CDM");
  let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=54b259889dd5476d84315e7bd716d961"
  let data = await fetch(url);
let parsedData= await data.json;
console.log(parsedData);
this.setState({articles:parsedData.articles})
 }



  render() {
    console.log("hello render");
    return (
      <div className="container my-3">
        <h2>InsightInk-Top</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
