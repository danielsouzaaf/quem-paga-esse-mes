import pagadores from './pagadores'

export default {
  netflix: {
    titulo: 'Netflix',
    linkPagamento: 'https://nubank.com.br/pagar/28imt/k0Xn0XYhv5',
    pagantes: [pagadores.dsa, pagadores.aks, pagadores.bpm, pagadores.jmp],
    mesesPagantes: ['dsa', 'bpm', 'aks', 'jmp', 'dsa', 'bpm', 'aks', 'jmp', 'dsa', 'bpm', 'aks', 'jmp']
  },
  spotify: {
    titulo: 'Spotify',
    linkPagamento: 'https://nubank.com.br/pagar/28imt/riur0vhpNG',
    pagantes: [pagadores.dsa, pagadores.mvb, pagadores.aks, pagadores.lfm, pagadores.meg, pagadores.mlm],
    mesesPagantes: ['dsa', 'mvb', 'aks', 'lfm', 'meg', 'mlm', 'dsa', 'mvb', 'aks', 'lfm', 'meg', 'mlm']
  },
  globoplay: {
    titulo: 'Globoplay',
    linkPagamento: 'https://nubank.com.br/pagar/28imt/LJKNFe35yi',
    pagantes: [pagadores.dsa, pagadores.bpm, pagadores.knr, pagadores.lgc, pagadores.glg],
    mesesPagantes: ['dsa', 'dsa', 'dsa', 'knr', 'bpm', 'lgc', 'glg', 'dsa', 'knr', 'bpm', 'lgc', 'glg']
  }
}
