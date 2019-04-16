import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'monsterzoo';
  
  public monsters: Observable<any>;

  constructor(private store: AngularFirestore){
    this.monsters = store.collection('monsters').valueChanges();
  }

  public addMonster(name, power_level){
    this.store.collection('monsters').add({ name, power_level});
  }

  public delete(monster){
    this.store.collection('monsters').doc(monster.id).delete();
  }
}
