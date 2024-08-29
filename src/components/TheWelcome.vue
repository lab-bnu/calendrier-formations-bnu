<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template #heading>13/11 - Initiation à la manipulation de données avec Pandas, à travers les données de la Bnu  </template>

    En utilisant des données rendues accessibles à toutes et tous par la Bnu, plongez avec nous dans l'univers de la manipulation de données grâce à Pandas, et comprenez les enjeux de l'utilisation de notebooks dans le cadre de la science ouverte. 

Pandas est un outil de manipulation et d'analyse des données rapide, puissant, flexible, facile à utiliser et open source. 

L'atelier est court, pensé pour des personnes n'ayant aucune expérience en programmation : vous aurez l'occasion d'apprendre, en douceur, à manipuler et visualiser des données Excel de base avec Python et la librairie Pandas.
    
<a href="https://vuejs.org/" target="_blank" rel="noopener">Inscription ici</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>26/11 - Initiation sur la bibliothèque numérique et exploitaiton avec le standard IIIF</template>

    Cet atelier permet de mieux comprendre le fonctionnement des bibliothèques numériques, les défis et enjeux à traiter des images numériques et les rendre accessible aussi bien techniquement qu'ergonomiquement. Le standard le plus communénement utilisé au sein des bibliothèques numériques est le iiif. Ces spécifications techniques permettent une récupération des images libres de droits et de ses informations descriptives. Le IIIF offre des possibilités de réutilisation et d'exploitation du patrimoine numérisé. 
    

    <br />
    <a href="https://vuejs.org/" target="_blank" rel="noopener">Inscription ici</a>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
