
import Container from '@/components/Container'
import TypeIt from 'typeit-react'

export default function About() {
  return (
    <Container>

      <div className="divide-y z-10">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
          {/*   <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>*/}
            <span className="text-gray-500 dark:text-gray-400">
              <TypeIt
                className="flex"
                getBeforeInit={(instance) => {
                  instance.type('Digital Strategist')

                  return instance
                }}
              />
            </span>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>Hi, I'm Nick</p>
          
            <div className="pb-2 prose dark:prose-dark max-w-none xl:col-span-2">
              {' '}
              <p>
                Welcome to my site, glad you could make it. Get comfortable and take a look around.
                I spend most of my time thinking about technology or teaching others how to use
                technology for business. Whether it's an artisan chocolate maker, a real estate
                team, or a trading company moving goods from Shanghai to Los Angeles, there is
                always a digital strategy to implement, and I'm the person who does that. Over the
                past three years, I've worked with businesses by helping them establish their goals
                and set up their marketing plans, as well as operations workflows. I'm always open
                to new ideas and projects and hope to help you discover a digital solution that will
                fit your needs.
              </p>
              <p>
                In my free time, I obsess about the future of the internet and how it will affect
                markets and reshape society. Over the last year, I've established a keen interest in
                Next.js, a React Javascript framework for front-end web development. I've also
                familiarized myself with Web3 dev tools for building on the Ethereum blockchain and
                will shortly begin the descent into the Tensorflow crash courses for ML. During
                weekends and weeknights, I am an apprentice for a full-stack engineer. Together we
                are working on an app that will help categorize news articles and process them for
                sentiment analysis. Under the apprenticeship, I'm learning how to set up servers and
                build GraphQL APIs, as well as proper dev etiquette.
              </p>
              <p>
                My favorite tools are Whimsical, Google Workspace, Google Tag Manager, Google
                Analytics, Notion, Adobe Creative Cloud, Figma, Next.js, Email Octopus, Hubspot, and
                ZoomInfo. With just these few tools set up properly, you can execute initiatives
                that whole departments would have been responsible for just a few years ago
              </p>
              <p>
                {' '}
                Extremely adaptable and a world-class Google researcher. Deeply passionate about
                Innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
