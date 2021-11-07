<template>
  <div>
    <block 
      :text="spanWrap('About')" 
      color="blockBlue"
    >
      <div slot="content">
        <h1 :class="$style.title">
          About
        </h1>
        <p>
          Born and raised in Wodonga Victoria, I worked with WEB MATRIX for 11
          years working remotely from different locations around Australia. My
          skill base extended to helping with build tools as well as <strong>cross-browser
            compatibility</strong> and strong knowledge of building templates for
          desktop/mobile on open source solutions like <strong>Dot Net Nuke, Joomla,
            Wordpress & Drupal</strong>. I have experience with <strong>React, React Native</strong> and
          <strong>Vue</strong>.
        </p>

        <p>
          My most recent position is with Revium leading the
          front end team looking after people management, code reviews and documenting standards and processes.
          I enjoy the challenges that come with being a front end developer,
          especially with complex and large jobs. I find it satisfying to work out
          ways to find the most efficient and best solutions possible.
        </p>
        <h1 :class="$style.title">
          What I love
        </h1>
        <ul>
          <li>My wife and kids</li>
          <li>Playing, creating music</li>
          <li>Sketch, Figma</li>
          <li>Animation (achieveing 60fps)</li>
          <li>Interesting approaches to UI/UX</li>
        </ul>
        <br />
        <h1 :class="$style.title">
          What I know
        </h1>
        <br />
        <h4>Markup, languages and frameworks</h4>
        <ul>
          <li>Html, Css, JavaScript, Sass/Less, Gulp, Webpack, Rollup, Git, React, React Native, Vue, Nuxt, PHP, Node, Jest, Mocha</li>
        </ul>
        <br />
        <h4>CMS</h4>
        <ul>
          <li>Wordpress, Drupal, Joomla, Dotnet Nuke, Coredna, Kentico, Contentful, Acoustic, Storyblok</li>
        </ul>
        <br />
        <h4>Server / Infra</h4>
        <ul>
          <li>Docker, NGINX, Caddy, Azure, AWS, Prerenderer.io</li>
        </ul>
        <br />
        <br />
        <h1 :class="$style.title">
          Contact Me
        </h1>
        <p>christopherjnewton [at] gmail [dot] com</p>
      </div>
    </block>
    <block 
      :text="spanWrap('cedarwoods.com.au/fletchers-slip/')" 
      color="blockRed"
    >
      <div slot="content">
        <h1 :class="$style.title">
          cedarwoods.com.au
        </h1>
        <p>Together with my team, we built a site builder using Kentico. Utilising IIS and virtual directories these project sites use a single html file to power over 30 micro sites. </p>
        <ul>
          <li>Communicating with and working closely with design.</li>
          <li>Upholding code standards and quality assurance</li>
          <li>Delegating tasks to team</li>
          <li>Making sure time lines are kept</li>
          <li>Quoting and solution design</li>
        </ul>
        <br>
        <a
          href="http://www.cedarwoods.com.au/fletchers-slip/"
          target="_blank"
        >
          Visit cedarwoods.com.au
        </a>
      </div>
    </block>
    <block 
      :text="spanWrap('lumoenergy.com.au')" 
      color="blockYellow"
    >
      <div slot="content">
        <h1 :class="$style.title">
          lumoenergy.com.au
        </h1>
        <p>Staticaly built site generated with webpack and using vue for quote and join to host the complex calculations required to present the user with accurate quotes.</p>
        <ul>
          <li>Liasing with client. </li>
          <li>In charge of daily stand ups and reporting to stake holders. </li>
          <li>Code revews and quality assurance / testing</li>
          <li>Working with team to create solutions such as node proxies to test the API</li>
          <li>Built, maintained and extended webpack tooling to suit clients needs</li>
        </ul>
        <br />
        <a
          href="https://www.lumoenergy.com.au/"
          target="_blank"
        >
          Visit lumoenergy.com.au
        </a>
      </div>
    </block>
    <block 
      :text="spanWrap('chw.net.au')" 
      color="blockGreen"
    >
      <div slot="content">
        <h1 :class="$style.title">
          chw.net.au
        </h1>
        <p>Rebuild of the site moving from a static build process to a single page app hosted via IIS and leveraging a pre renderer for SEO </p>
        <ul>
          <li>Research pre renderer and how that can be utilized</li>
          <li>Solution design for search using Azure search</li>
          <li>Created solution for kentico to pass data to front end via webapi</li>
          <li>Code standards and tests</li>
        </ul>
        <p>This was the companies first dive into creating their own component library to reuse components accross projects so there was a learning curve for me to introduce the team to the concept.</p>
        <p>We documented the library with Storybook and created unit tests using Jest and Mocha to ensure as much longevity and few bugs as possible.</p>
        <br />
        <a
          href="https://chw.net.au/"
          target="_blank"
        >
          Visit chw.net.au
        </a>
      </div>
    </block>
  </div>
</template>

<script>
import Block from '@/components/Block.vue'
export default {
  components: {
    Block,
  },
  methods: {
    spanWrap(string) {
      let stringArray = []
      let splitString = string.split('')
      splitString.forEach(element => {
        stringArray.push(`${element}`)
      })
      return stringArray
    },
  },
}
</script>

<style module>
.title {
  font-size: 24px;
  font-family: var(--font-family-secondary);
  font-weight: normal;
}
h2 {
  font-family: var(--font-family-secondary);
  font-weight: normal;
}
p {
  margin-bottom: 24px;
}
a {
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
}
</style>
