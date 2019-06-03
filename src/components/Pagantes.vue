<template>
  <div class="pagantes">
    <div class="inline-block relative w-64 mt-5">
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
            <a href="#modal-como-pagar" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Como pagar?
            </a>
          </div>
        </div>
      </div>
      <div class="mt-5 text-xl">
        <p class="title">Pagantes do {{servico}}</p>
        <div class="lists">
          <ul class="nes-list is-disc">
            <li v-for="(mes, key) in meses" v-bind:key="key" v-bind:class="{ 'font-extrabold': key === mesAtual}">{{mes}} - {{pagantes[servico][mesesPagantes[servico][key]].name}}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="overlay" id="modal-como-pagar">
      <a href="#" class="cancel"></a>

      <div class="modal">
        <div class="mb-6">
          <p class="text-2xl">Como pagar</p>
        </div>
        <div class="mb-6">
          <p class="text-lg">Para pagar basta fazer uma transferência para um desses três bancos: <span class="font-bold">Banco do Brasil, Caixa Econômica Federal ou NuConta</span></p>
        </div>
        <div class="mb-6">
          <p class="text-xl font-bold">Banco do Brasil</p>
          <p class="text-lg"><span class="font-semibold">Agência</span>: 716-1</p>
          <p class="text-lg"><span class="font-semibold">Conta</span>: 65254-7</p>
          <p class="text-lg"><span class="font-semibold">Nome do titular</span>: Daniel Souza Affonso Ferreira</p>
        </div>

        <div class="mb-6">
          <p class="text-xl font-bold">Caixa Econômica Federal</p>
          <p class="text-lg"><span class="font-semibold">Agência</span>: 1406</p>
          <p class="text-lg"><span class="font-semibold">Operação</span>: 023</p>
          <p class="text-lg"><span class="font-semibold">Conta</span>: 2885-0</p>
          <p class="text-lg"><span class="font-semibold">Nome do titular</span>: Daniel Souza Affonso Ferreira</p>
        </div>

        <div class="mb-6">
          <p class="text-xl font-bold">NuConta</p>
          <a href="https://nubank.com.br/pagar/28imt/riur0vhpNG"><p class="text-lg text-blue-600"><span class="font-semibold">Spotify</span></p></a>
          <a href="https://nubank.com.br/pagar/28imt/k0Xn0XYhv5"><p class="text-lg text-blue-600"><span class="font-semibold">Netflix</span></p></a>
        </div>

        <a href="#" class="close">&times;</a>
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
  dsa: {
    name: 'Daniel',
    avatar: DsaAvatar
  },
  mvb: {
    name: 'Barcos',
    avatar: MvbAvatar
  },
  aks: {
    name: 'Karol',
    avatar: AksAvatar},
  lfm: {
    name: 'Luís',
    avatar: LfmAvatar},
  meg: {
    name: 'Duda',
    avatar: MegAvatar},
  mlm: {
    name: 'Mari',
    avatar: MlmAvatar},
  bpm: {
    name: 'Bia',
    avatar: BpmAvatar}
}

const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro',
  'outubro', 'novembro', 'dezembro']

const mesPagantes = {
  spotify: ['dsa', 'mvb', 'aks', 'lfm', 'meg', 'mlm', 'dsa', 'mvb', 'aks', 'lfm', 'meg', 'mlm'],
  netflix: ['aks', 'dsa', 'bpm', 'aks', 'dsa', 'bpm', 'aks', 'dsa', 'bpm', 'aks', 'dsa', 'bpm']
}

const currentDate = new Date()

export default {

  name: 'Pagantes',
  props: {
    meses: {
      type: Array,
      default: function () {
        return meses
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
          bpm: pagadores.bpm
        },
        spotify: {
          dsa: pagadores.dsa,
          mvb: pagadores.mvb,
          aks: pagadores.aks,
          lfm: pagadores.lfm,
          meg: pagadores.meg,
          mlm: pagadores.mlm
        }
      },
      mesesPagantes: {
        netflix: mesPagantes.netflix,
        spotify: mesPagantes.spotify
      },
      pagante: {
        netflix: pagadores[mesPagantes.netflix[currentDate.getMonth()]],
        spotify: pagadores[mesPagantes.spotify[currentDate.getMonth()]]
      },
      mesAtual: currentDate.getMonth(),
      servico: 'netflix'
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .div-streaming {
    margin-top: 25px;
  }

  .overlay {
    visibility: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .7);
  }

  .overlay:target {
    visibility: visible;
  }

  .modal {
    position: relative;
    width: 600px;
    max-width: 80%;
    background: white;
    border-radius: 8px;
    padding: 1em 2em;
  }

  .modal .close {
    position: absolute;
    top: 15px;
    right: 15px;
    color: grey;
    text-decoration: none;
  }
</style>
