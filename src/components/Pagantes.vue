<template>
  <div class="pagantes">
    <div class="inline-block relative w-64">
      <select v-model="servico" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <option value="netflix">Netflix</option>
        <option value="spotify">Spotify</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>

    <div class="div-streaming">
      <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div class="sm:flex sm:items-center px-6 py-4">
          <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" v-bind:src="pagante[servico].avatar" alt="">
          <div class="text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="text-xl leading-tight">{{pagante[servico].name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <p class="title">Pagantes do {{servico}}</p>
        <div class="lists">
          <ul class="nes-list is-disc">
            <li v-for="(mes, key) in meses" v-bind:class="{ 'font-extrabold': key === mesAtual}">{{mes}} - {{pagantes[servico][mesesPagantes[servico][key]].name}}</li>
          </ul>
        </div>
      </div>
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
    props: {
      meses: {
        type: Array,
        default: function () {
          return meses;
        }
      }
    },
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
        mesesPagantes: {
          netflix: mesPagantes.netflix,
          spotify: mesPagantes.spotify,
        },
        pagante: {
          netflix: pagadores[mesPagantes.netflix[currentDate.getMonth()]],
          spotify: pagadores[mesPagantes.spotify[currentDate.getMonth()]]
        },
        mesAtual: currentDate.getMonth(),
        servico: 'netflix',
      }
    },
    computed: {

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .div-streaming {
    margin-top: 25px;
  }
</style>
