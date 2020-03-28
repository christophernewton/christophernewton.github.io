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
          years working remotely from different locations around Australia. I
          moved on to head of development for Bwired located in Prahran where
          my responsibilities shifted to overseeing local and overseas teams. My
          skill base extended to helping with build tools as well as <strong>cross-browser
            compatibility</strong> and strong knowledge of building templates for
          desktop/mobile on open source solutions like <strong>Dot Net Nuke, Joomla,
            Wordpress & Drupal</strong>. I have experience with <strong>React, React Native</strong> and
          <strong>Vue</strong>.
        </p>

        <p>
          My most recent position is with Revium leading the
          front end team looking afte people management, code reviews and setting up standards and processes.
          I enjoy the challenges that come with being a front end developer,
          especially with complex and large jobs. I find it satisfying to work out
          ways to find the most efficient and best solutions possible.
        </p>
        <h1 :class="$style.title">
          What I love
        </h1>
        <ul>
          <li>My wife</li>
          <li>Playing, creating music</li>
          <li>Sketch</li>
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
          <li>Html, Css, JavaScript, Sass/Less, Gulp, Webpack, Git, React, React Native, Angular, Vue, Nuxt, PHP, Node</li>
        </ul>
        <br />
        <h4>CMS</h4>
        <ul>
          <li>Wordpress, Drupal, Dotnet Nuke, Coredna, Kentico, Contentful</li>
        </ul>
        <br />
        <h4>Server</h4>
        <ul>
          <li>Docker, NGINX, Azure, AWS</li>
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
      :text="spanWrap('Nintendo.com.au')" 
      color="blockRed"
    >
      <div slot="content">
        <h1 :class="$style.title">
          Nintendo.com.au
        </h1>
        <p>Working with a team of 7 people, together we built a new site from the ground up using Coredna. My responsibilities for this project include </p>
        <ul>
          <li>Communicating with marketing and design teams. </li>
          <li>Code standards and quality assurance</li>
          <li>Delegating tasks to remote employees</li>
          <li>Making sure time lines are kept</li>
        </ul>
        <br>
        <h2>Challenges</h2>
        <p>This project launched in multiple phases with the homepage, Wii U and 3ds pages launching first and then continuing work on support, help and games catalogue.</p>
        <p>The approval process was lengthy with each phase so management of branches and sandboxes were key to making sure each phase launched successfully.</p>
        <a
          href="http://www.nintendo.com.au/"
          target="_blank"
        >Visit nintendo.com.au</a>
      </div>
    </block>
    <block 
      :text="spanWrap('Lumoenergy.com.au')" 
      color="blockYellow"
    >
      <div slot="content">
        <h1 :class="$style.title">
          lumoenergy.com.au
        </h1>
        <p>Staticaly built site with vue app for quote and join </p>
        <ul>
          <li>Liasing with client. </li>
          <li>Code standards and quality assurance</li>
          <li>Working with team to create solutions</li>
          <li>Built and maintain webpack tooling to suit clients needs</li>
        </ul>
        <br />
        <a
          href="https://www.lumoenergy.com.au/"
          target="_blank"
        >Visit lumoenergy.com.au</a>
      </div>
    </block>
    <block 
      :text="spanWrap('chw.net.au')" 
      color="blockGreen"
    >
      <div slot="content">
        <h1 :class="$style.title">
          Chw.net.au
        </h1>
        <p>Rebuild of the site moving from a static build process to a single page app hosted via IIS and leveraging a pre renderer for SEO </p>
        <ul>
          <li>Research pre renderer and how that can be utilized</li>
          <li>Solution design for search using Azure search</li>
          <li>Created solution for kentico to pass data to front end via webapi</li>
          <li>Code standards and quality assurance</li>
        </ul>
        <br />
        <a
          href="https://chw.net.au/"
          target="_blank"
        >Visit chw.net.au</a>
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
