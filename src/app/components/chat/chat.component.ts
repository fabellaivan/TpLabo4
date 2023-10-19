import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/services/msg-service';
import { UsrAuthService } from 'src/app/services/usr-auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  newMsj: string = "";
  viewChat = false;
  userLogeado: any;
  chats:any = [];

  constructor( private usrService: UsrAuthService,private msgService: MsgService) { }//Donde injecto al servicio msgService da el  R3InjectorError(HomeModule)

  ngOnInit(): void {

    this.usrService.getUserLoggedIn().subscribe((user) => {
      this.userLogeado = user
    });

    this.msgService.getMensajes().subscribe((msg) => {
      this.chats = msg;
     this.scrollTheLastElementByClName();
    });

  }
  
  ngOnDestroy() {
    this.msgService.closeMsg();
  }

  sendMsg() {
    if(this.newMsj){
      this.msgService.savMsg(this.userLogeado.uid, this.newMsj);
    }
 
  }
  closeOpenChat(trueFalse: boolean){
    this.viewChat = trueFalse;
    this.scrollTheLastElementByClName();

  }
  scrollTheLastElementByClName() {

    setTimeout(() => {
      let e = document.getElementsByClassName('send' || 'recept');
      if (e.length > 0) {
  
        let ultimo: any = e[e.length - 1];
        let topPos = ultimo.offsetTop;
  
        let containerMsg = document.getElementById('containerMsg');
        if (containerMsg) {
          containerMsg.scrollTop = topPos;   
        }
      }
    }, 100);
    this.newMsj = "";

  }
  

}
