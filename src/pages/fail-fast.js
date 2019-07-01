import React from "react"
import { Link } from "gatsby"

import Subscribe from "../components/subscribe"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Permission to Fail"
          description="When we give ourselves permission to fail faster, we are giving ourselves permission to grow faster. This reasoning doesn’t come naturally. Testing ourselves early on triggers anxiety as we perceive our initial inability as failure. We are wired to avoid it because, for most part of human history, failing could lead to fatal consequences."/>

    <h1>Permission to Fail</h1>
    <span id="postInfo" style={{
      fontFamily: `Montserrat`,
      fontWeight: `400`,
      marginTop: `-10px`,
      marginBottom: `30px`,
    }}
    >Mon July 01, 2019 by <a href="https://twitter.com/malikpiara">Malik Piara</a></span>

    <p>The approach many people have to learning is to go through books, reading them from cover to cover. This linear strategy comes from our belief that the understanding of a subject will grow in direct proportion to the amount of hours we invest in it. This reasoning seems to be spread out across many domains as we often think of the world as linear.</p>

    <p>There is another learning strategy. It relies on a circular approach where we start by assessing our knowledge, go on to reflect, pinpoint what we don’t know and then adjust course rapidly. We do so by exposing ourselves to tests and challenges early on and going back to them frequently.</p>

    <p>The circular strategy is better. Tackling the challenge early on helps us map out what we don't know and keeps us from wasting time in places where we have few to gain from. It ultimately helps us grow at a faster and compounding pace due to shorter feedback loops.</p>

    <p>When we give ourselves permission to fail faster, we are giving ourselves permission to grow faster. This reasoning doesn’t come naturally. Testing ourselves early on triggers anxiety as we perceive our initial inability as failure. We are wired to avoid it because, for most part of human history, failing could lead to fatal consequences. From an evolutionary standpoint our apprehension to risk makes sense. Having said that, the stakes were higher for our ancient counterparts.</p>

    <h4>The Battleship Analogy</h4>
    <p>What we do not know is information we can use to improve. Let’s look at the example of battleship, the guessing game where we have to sink the hidden fleets of our opponent.</p>

    <p>When we hit the water, that, can certainly feel like lack of success, if see it through the lens of someone who is too close to that move. In truth, what is perceived as failure here, actually increases our knowledge and keeps us from spending time where we don’t have anything to gain. Knowing where not to look is important and can become a great advantage after some time, like in the studying strategy.</p>

    <h4>Lean Startups</h4>
    <p>When it comes to building new tech-enabled products, we work with assumptions about what a group of people need and want. We don’t actually know if they’ll want our solution. To reduce the feedback loop and learn about what not to build we put something in front of users as soon and as often as possible. – This is especially important. There are plenty of “ideas” but resources are pretty scarce.</p>

    <p>At Upframe we were building a platform to connect young makers to founders and domain experts, so they could learn from their experience. Even though we were up to date with the popular books (theory), and with the concept of building products as modularised prototypes, focused on specific needs of specific groups of customers (what they call "minimum viable product"), we were inexperienced. And I made decisions that led our team to spend one year building a product no one is using today.</p>

    <p>Taking time to put something in front of users will only delay any chance to learn. And increase the risk of a big blowup, like when I did not expose myself to mock tests before my high school math exam. The strategy is to get as much information about our market and our customer early on, so we don’t end up spending months working on something no one wants.</p>

    <h4>Final Note</h4>
    <p>The complex nature of digital products and flexibility of small teams creates learning opportunities that are hard to find.</p>

    <p>I often start new projects that I kill, sometimes, as fast as I start them. This is because I see great value in the potential outcomes, and contained risk in the harm of my free time. I approach them in a particular way, often building prototypes instead of fully fledged products that take months to code and design. This asymmetry enables me to fail fast and learn in the process. The short-term failures are important learning about where not to look and what not to do and I’m betting on the long-term.</p>

    <p>——</p> <br />
    <p>Thank you Dad, Tobias Freudenreich, Paulo Gonçalves, João Araújo, Mariana Barbosa for reading and going through early drafts of this.</p>

    <Subscribe />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
