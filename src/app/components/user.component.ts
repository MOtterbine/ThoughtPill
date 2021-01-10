import { Component } from '@angular/core';
/*import { ParentComponent } from './Parent.component';
import { SiblingComponent } from './Sibling.component';
*/

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./pages/pages.less']
})

export class UserComponent{
  title = "Hangin' High...";
  name = "Mike";
  email = "mike@jam.com";
   address = {
      street: "100 Main Street",
      city: "New York",
      state: "NJ"
   }
}

