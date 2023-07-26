import { Component, Input } from '@angular/core';

@Component({
  selector: 'gamepresentation',
  templateUrl: './gamepresentation.component.html',
  styleUrls: ['./gamepresentation.component.css']
})
export class GamepresentationComponent {

  @Input() pagina?: string;

  image: string = "";
  cocImage: string = "https://store.supercell.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgame-badge.3c46828f.png&w=1200&q=100";
  crImage: string = "https://store.supercell.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgame-badge.22045077.png&w=1200&q=100";

  titlu: string = "";
  cocTitlu: string = "CLASH OF CLANS IN THE SUPERCELL STORE";
  crTitlu: string = "CLASH ROYALE IN THE SUPERCELL STORE";

  descriere: string = "";
  cocDescriere: string = "Clash of Clans has made it to the Supercell Store! Look out for our special deals and stock up on passes and bundles.";
  crDescriere: string = "Clash Royale has made it to the Supercell Store! Look out for our special deals and stock up on passes and gems.";
  constructor() {}

  ngOnInit()
  {
    if(this.pagina == "coc")  
    {
      this.image = this.cocImage;
      this.titlu = this.cocTitlu;
      this.descriere = this.cocDescriere;
    }

    if(this.pagina == "cr")
    {
      this.image = this.crImage;
      this.titlu = this.crTitlu;
      this.descriere = this.crDescriere;
    }
  }
  

}
