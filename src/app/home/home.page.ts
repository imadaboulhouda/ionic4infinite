import { Component } from '@angular/core';
import { UserService }  from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data=[];
  page=1;
  constructor(private user: UserService) {}

  ngOnInit()
  {
    this.user.data().subscribe((e:DATA)=>{
      this.data = this.data.concat(e.results);
    })
    console.log('Ok');
  }

  doThis(event)
  {
    this.page++;
    if (this.page === 3)
    {
      event.target.disabled  = true;
      event.target.complete();
    }
    this.user.data(this.page).subscribe((e: DATA) => {
      this.data = this.data.concat(e.results);
      event.target.complete();
 
    });
  }

}

interface DATA{
  results:[];
}
