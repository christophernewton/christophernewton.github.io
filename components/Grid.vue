<template>
  <div>
    <block color="blockBlue" :text="spanWrap('About')">
      <div slot="content">
        <h1 :class="$style.title">About</h1>
        <p>Born and raised in Wodonga Victoria, I worked with WEB MATRIX for 11
        years working remotely from different locations around Australia. I
        moved on to head of development for Bwired located in Prahran where
        my responsibilities shifted to overseeing local and overseas teams. My
        skill base extended to helping with build tools as well as <strong>cross-browser
        compatibility</strong> and strong knowledge of building templates for
        desktop/mobile on open source solutions like <strong>Dot Net Nuke, Joomla,
        Wordpress & Drupal</strong>. I have experience with <strong>React, React Native</strong> and <strong>Angular</strong> on
        personal projects and <strong>Vue</strong> on commercial projects and would love to
        expand my knowledge in all of these.</p>

        <p>My most recent position is with Loyalty Corp where we hired and built a
        front end team from the ground up whilst rebuilding the platform.
        I enjoy the challenges that come with being a front end developer,
        especially with complex and large jobs. I find it satisfying to work out
        ways to find the most efficient and best solutions possible.</p>
        <h1 :class="$style.title">What I love</h1>
        <ul>
          <li>My wife</li>
          <li>Playing, creating music</li>
          <li>Sketch</li>
          <li>Animation (achieveing 60fps)</li>
          <li>Interesting approaches to UI/UX</li>
        </ul>
        <br>
        <h1 :class="$style.title">What I know</h1>
        <em>Html, Css, Cross browser compatibility, Sass/Less, Gulp, Webpack, Git, React, React Native, Angular, Vue, Nuxt, PHP, Wordpress, Drupal, Dotnet Nuke, Coredna</em>
        <br >
        <br >
        <h1 :class="$style.title">Contact Me</h1>
        <p>christopherjnewton [at] gmail [dot] com</p>
      </div>
    </block>
    <block color="blockRed" :text="spanWrap('Nintendo.com.au')">
      <div slot="content">
        <h1 :class="$style.title">Nintendo.com.au</h1>
        <p>Working with a team of 7 people, together we built a new site from the ground up using Coredna. My responsibilities for this project include </p>
        <ul>
          <li>Communicating with marketing and design teams. </li>
          <li>Code standards and quality assurance</li>
          <li>Delegating tasks to remote employees</li>
          <li>Making sure time lines are kept</li>
        </ul>
        <br >
        <h2>Challenges</h2>
        <p>This project launched in multiple phases with the homepage, Wii U and 3ds pages launching first and then continuing work on support, help and games catalogue.</p>
        <p>The approval process was lengthy with each phase so management of branches and sandboxes were key to making sure each phase launched successfully.</p>
        <a
          href="http://www.nintendo.com.au/"
          target="_blank">Visit nintendo.com.au</a>
      </div>
    </block>
    <block color="blockYellow" :text="spanWrap('Wodongatafe.edu.au')">
      <div slot="content">
        <h1 :class="$style.title">Wodongatafe.edu.au</h1>
        <p>Built on top of DNN and legacy modules, my responsibilities for this project include </p>
        <ul>
          <li>Creating tickets and handing tasks over to team. </li>
          <li>Code standards and quality assurance</li>
          <li>Making sure time lines are kept and mvp was delivered on time</li>
          <li>Creating webpack tooling to help the team enter the project faster</li>
        </ul>
        <br >
        <a
          href="https://www.wodongatafe.edu.au/"
          target="_blank">Visit wodongatafe.edu.au</a>
      </div>
    </block>
    <block color="blockGreen" :text="spanWrap('Benefits.suncorp.com.au')">
      <div slot="content">
        <h1 :class="$style.title">Benefits.suncorp.com.au</h1>
        <p>Full rebuild of the front end converting legacy laravel blade templates over to Vue, my responsibilities for this project include </p>
        <ul>
          <li>Communicating to product owner on timelines and tech choices</li>
          <li>Working with designers to create a consistant design language</li>
          <li>Creating webpack tooling to generate theming and unique styles for each client</li>
          <li>Code standards and quality assurance</li>
          <li>Interviewing, vetting and hiring new team members</li>
        </ul>
        <br >
        <a
          href="https://benefits.suncorp.com.au/"
          target="_blank">Visit benefits.suncorp.com.au</a>
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
