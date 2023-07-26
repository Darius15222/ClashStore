import { Component, Input } from '@angular/core';

@Component({
  selector: 'first-image',
  templateUrl: './first-image.component.html',
  styleUrls: ['./first-image.component.css']
})
export class FirstImageComponent {

  @Input() pagina?: string;

  cocImage: string = "https://store.supercell.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-desktop.bd7fd2e2.png&w=828&q=75";
  crImage: string = "https://store.supercell.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-desktop.a1484fc3.png&w=1920&q=75";

  constructor() {}

  ngOnInit()
  {
    if(this.pagina == "coc")
      this.imageSource = this.cocImage;
    
    if(this.pagina == "cr")
      this.imageSource = this.crImage;
  }
  imageSource: string = "";


}
