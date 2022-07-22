module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Relocations', [{
      title: 'Junior Software Engineer, Backend',
      lang: 'Python',
      country: 'Netherlands',
      level: 'junior',
      body: 'As the software engineer at EVBox, you contribute to our solutions while being a member of one of the teams working on a particular product domain.',
      url: 'https://relocate.me/the-netherlands/amsterdam/evbox/software-engineer-backend-8800'
    },
    {
      title: 'Intern Applied Machine Learning',
      lang: 'C#',
      country: 'Japan',
      level: 'intern',
      body: 'Machine learning on news ranking is crucial for analyzing millions of articles every day to deliver the most engaging high-quality information in near-real-time while providing a "Personalized Discovery" experience to our users.',
      url: 'https://relocate.me/japan/tokyo/smartnews/tech-lead-applied-machine-learning-news-ranking-8883'
    },
    {
      title: 'Junior Infrastructure Engineer',
      lang: 'TypeScript',
      country: 'Germany',
      level: 'junior',
      body: 'In Vimcar Infrastructure, Engineers are primarily a team of enablers. They are a centralised team, that works on bigger long-term projects, while creating tools for software developers, to help them push their code to production safely.',
      url: 'https://relocate.me/germany/berlin/vimcar/senior-infrastructure-engineer-8609'
    },
    {
      title: 'Junior Cloud Security Engineer',
      lang: 'JavaScript',
      country: 'UK',
      level: 'junior',
      body: 'We are expanding the Security Engineering team extensively, meaning that there are many skill-sets and experiences required. Your place within the team will depend on your individual strengths and interests, to give you an idea of some of the areas that of expertise we are looking for, here are some of the key projects.',
      url: 'https://relocate.me/the-united-kingdom/london/form3/senior-cloud-security-engineer-8103'
    },
    {
      title: 'Intern Applied Machine Learning ',
      lang: 'C++',
      country: 'Japan',
      level: 'intern',
      body: 'Machine learning on news ranking is crucial for analyzing millions of articles every day to deliver the most engaging high-quality information in near-real-time while providing a "Personalized Discovery" experience to our users.',
      url: 'https://relocate.me/japan/tokyo/smartnews/tech-lead-applied-machine-learning-news-ranking-8883'
    },
    {
      title: 'Junior DevOps Engineer',
      lang: 'C++',
      country: 'Japan',
      level: 'junior',
      body: 'As a senior DevOps engineer at doWhile you will work with our clients to build high-quality infrastructure and solutions using modern technologies and methods.',
      url: 'https://relocate.me/sweden/gothenburg/dowhile/senior-devops-engineer-8430'
    },
    {
      title: 'Intern QA Automation Engineer',
      lang: 'C#',
      country: 'Netherlands',
      level: 'intern',
      body: 'Grip (www.grip.tools) is web-based software that automatically produces visual content for physical goods. Grip supports brands to cope with the fast-accelerating challenge of the exponential grow and need for content. It’s based on photorealistic 3D, capitalising on INDG’s twenty-year-long experience in that field. 3D is good because once your beer or your juicer or your rocket is on Grip, it can be used and re-used for multiple media: images, videos, iOS apps, and such.',
      url: 'https://relocate.me/the-netherlands/amsterdam/indg-grip/qa-automation-engineer-c-ts-8867'
    },
    {
      title: 'Intern DevOps Engineer',
      lang: 'C#',
      country: 'Sweden',
      level: 'intern',
      body: 'As a senior DevOps engineer at doWhile you will work with our clients to build high-quality infrastructure and solutions using modern technologies and methods.',
      url: 'https://relocate.me/sweden/gothenburg/dowhile/senior-devops-engineer-8430'
    },
    {
      title: 'Junior Java Software Engineer',
      lang: 'Java',
      country: 'Netherlands',
      level: 'junior',
      body: 'Kramp Hub creates solutions that are aiming at giving the AgTech industry a push forward when it comes to competing with technology.',
      url: 'https://relocate.me/the-netherlands/utrecht/kramp-hub/senior-java-software-engineer-8846'
    },
    {
      title: 'Junior Cloud Engineer',
      lang: 'Python',
      country: 'Netherlands',
      level: 'junior',
      body: 'We are the fastest-growing omnichannel supermarket in the Netherlands. If you think we can improve, then we are looking for you.',
      url: 'https://relocate.me/the-netherlands/utrecht/kramp-hub/senior-java-software-engineer-8846'
    },
    {
      title: 'Intern UX Researcher - Discovery Innovation Lab',
      lang: 'Python',
      country: 'Germany',
      level: 'intern',
      body: 'Berlin is considered by many to be the most extraordinary city in Europe. With its fascinating history and the diversity of its inhabitants, the city has developed an unmistakable character. When we went in search of attractive real estate with our first customers in 1985, we couldn\'t even imagine what would become possible in this city. Since then, we\'ve had the great pleasure of doing what many others would love to do more often: finding a new home in Berlin again and again.',
      url: 'https://relocate.me/germany/berlin/ziegert-group/senior-ux-researcher-discovery-innovation-lab-8601'
    },
    {
      title: 'Junior Full Stack Developer',
      lang: 'JavaScript',
      country: 'Netherlands',
      level: 'junior',
      body: 'DASH is the tech accelerator of The Works: home to successful international work-brands like YoungCapital, YoungCapital NEXT, StudentJob and Jobbird.com. As an employment agency, we work very differently than you might think. We recruit almost all our candidates via digital channels. Our work help students, graduates, and young professionals find a diverse range of career opportunities.',
      url: 'https://relocate.me/the-netherlands/hoofddorp/dash/full-stack-developer-8882'
    },
    {
      title: 'Junior Frontend Engineer',
      lang: 'JavaScript',
      country: 'Japan',
      level: 'junior',
      body: 'PayPay, a fintech company that achieved more than 47M users within around 3 years since its launch in 2018 has hugely diversified employees who are from 40 different countries. The number of employees by now is more than 1,000 staff members, and yet the company is still incomplete and at a growing stage.',
      url: 'https://relocate.me/japan/tokyo/paypay/frontend-engineer-8365'
    },
    {
      title: 'Intern Full Stack JavaScript Engineer',
      lang: 'JavaScript',
      country: 'Germany',
      level: 'intern',
      body: 'Zero to One Search GmbH is a Germany-based international recruitment agency with a focus on connecting IT professionals with tech companies. Our mission is to help tech players to find candidates in accordance with their businesses needs, and IT specialists to get the right jobs with interesting challenges and opportunity to relocate to Europe.',
      url: 'https://relocate.me/germany/munich/zero-to-one-search/senior-full-stack-javascript-engineer-8875'
    },
    {
      title: 'Intern RoR Engineer',
      lang: 'Ruby',
      country: 'Romania',
      level: 'intern',
      body: 'Sage is the global market leader for technology that helps small and medium businesses perform at their best. Sage is trusted by millions of customers worldwide to deliver the best cloud technology and support with our partners to manage finances, operations, and people. We believe in doing everything we can to help people be the best they can be, so the combined efforts of 13,000 Sage colleagues working with businesses and communities make a real difference to the world.',
      url: 'https://relocate.me/romania/cluj-napoca/sage/senior-ror-engineer-8258'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Relocations', null, {});
  }
};
