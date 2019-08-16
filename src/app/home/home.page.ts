import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private noticias:any[]=[
    {
      titulo:'Notas da Atualização 9.16 do TFT',
      imagem:'https://br.leagueoflegends.com/sites/default/files/styles/wide_medium/public/upload/tft_patch_9.16_notes_header.jpg?itok=NNrb_jzC',
      descricao:'Quatro novos Campeões Hextec chegam à Convergência.',
      sai:'https://br.leagueoflegends.com/pt/news/game-updates/patch/notas-da-atualizacao-916-do-tft'
    },
    {
    titulo:'Notas da Atualização 9.15B do TFT',
    imagem:'https://br.leagueoflegends.com/sites/default/files/styles/wide_medium/public/upload/veigar_00_base.jpg?itok=k75s8ca5',
    descricao:'Karthus e Kayle tiram a cabeça das nuvens na nova atualização.',
    sai:'https://br.leagueoflegends.com/pt/news/game-updates/patch/notas-da-atualizacao-915b-do-tft'
  },
  {
    titulo:'Notas da Atualização 9.15 do TFT',
    imagem:'https://br.leagueoflegends.com/sites/default/files/styles/wide_medium/public/upload/kaylemorg_final02.jpg?itok=epqI972Z',
    descricao:'Características defensivas se fortalecem, mas cuidado com os Vastinatas.',
    sai:'https://br.leagueoflegends.com/pt/news/game-updates/patch/notas-da-atualizacao-915-do-teamfight-tactics'
  },
  {
    titulo:'Notas Complementares da Atualização 9.14 do TFT',
    imagem:'https://br.leagueoflegends.com/sites/default/files/styles/wide_medium/public/upload/tft_patch_9.14b_notes_header.jpg?itok=9lsmas8P',
    descricao:'Assassinos e ursos enfraquecidos enquanto Feiticeiros são fortalecidos na última Atualização do TFT.',
    sai:'https://br.leagueoflegends.com/pt/news/game-updates/patch/notas-complementares-da-atualizacao-914-do-tft'
  },
  {
    titulo:'Notas da Atualização 9.14 do Teamfight Tactics',
    imagem:'https://br.leagueoflegends.com/sites/default/files/styles/wide_medium/public/upload/9.14_tft_patch_notes_header.jpg?itok=RZWWuXQh',
    descricao:'Twisted Fate, a temporada beta das ranqueadas e mais inúmeras alterações de balanceamento e correções de bugs estão vindo para a Convergência.',
    sai:'https://br.leagueoflegends.com/pt/news/game-updates/patch/notas-da-atualizacao-914-do-teamfight-tactics'
  },
  {
    titulo:'TeamFight Tactics - Guia De Mecânica de Jogo',
    imagem:'https://br.leagueoflegends.com/sites/default/files/styles/wide_medium/public/upload/header_2_0.jpg?itok=YcaH4yoy',
    descricao:'Situado na fantasiosa e fragmentada Convergência, Teamfight Tactics é um novo modo de jogo no League que te coloca contra sete oponentes em uma guerra de todos contra todos pela supremacia. Crie a equipe suprema, aprimore suas forças e assista a batalha se desenrolar. ',
    sai:'https://br.leagueoflegends.com/pt/news/game-updates/gameplay/teamfight-tactics-guia-de-mecanica-de-jogo?utm_source=web&utm_medium=web&utm_campaign=tft-microsite-2019'
  }
    
  ];
  constructor() {}

}
