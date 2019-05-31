<template>
  <div class="pagantes">
    <select v-model="servico">
      <option value="netflix">Netflix</option>
      <option value="spotify">Spotify</option>
    </select>

    <div id="netflix" v-if="servico === 'netflix'">
      <h2>{{pagante.netflix.name}} - {}</h2>
    </div>
    <div id="spotify" v-else-if="servico === 'spotify'">
      <h2>{{pagante.spotify.name}} - {}</h2>
    </div>
  </div>
</template>

<script>
  import DsaAvatar from '../assets/avatars/dsa.jpg'
  import MvbAvatar from '../assets/avatars/mvb.jpg'
  import AksAvatar from '../assets/avatars/aks.jpg'
  import LfmAvatar from '../assets/avatars/lfm.jpg'
  import MegAvatar from '../assets/avatars/meg.jpg'
  import MlmAvatar from '../assets/avatars/mlm.jpg'
  import BpmAvatar from '../assets/avatars/bpm.jpg'

  const pagadores = {
    dsa: { name: 'Daniel', avatar: DsaAvatar},
    mvb: { name: 'Barcos', avatar: MvbAvatar},
    aks: { name: 'Karol', avatar: AksAvatar},
    lfm: { name: 'Luís', avatar: LfmAvatar},
    meg: { name: 'Duda', avatar: MegAvatar},
    mlm: { name: 'Mari', avatar: MlmAvatar},
    bpm: { name: 'Bia', avatar: BpmAvatar}
  }

  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro',
    'outubro', 'novembro', 'dezembro']

  const mesPagantes = {
    spotify: ['dsa', 'mvb', 'aks', 'lfm', 'meg', 'mlm', 'dsa', 'mvb', 'aks', 'lfm', 'meg', 'mlm'],
    netflix: ['aks', 'dsa', 'bpm', 'aks', 'dsa', 'bpm', 'aks', 'dsa', 'bpm', 'aks', 'dsa', 'bpm']
  }

  const currentDate = new Date();

  export default {

    name: 'Pagantes',
    data () {
      return {
        msg: 'Pagante do mês',
        pagantes: {
          netflix: {
            dsa: pagadores.dsa,
            aks: pagadores.aks,
            bpm: pagadores.bpm,
          },
          spotify: {
            dsa: pagadores.dsa,
            mvb: pagadores.mvb,
            aks: pagadores.aks,
            lfm: pagadores.lfm,
            meg: pagadores.meg,
            mlm: pagadores.mlm,
          },
        },
        pagante: {
          netflix: pagadores[mesPagantes.netflix[currentDate.getMonth()]],
          spotify: pagadores[mesPagantes.spotify[currentDate.getMonth()]]
        },
        servico: 'netflix',
      }
    },
    computed: {

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
