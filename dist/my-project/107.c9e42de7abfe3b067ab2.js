"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[107],{2107:(ke,A,r)=>{r.r(A),r.d(A,{NotesModule:()=>Re});var b=r(1841),U=r(3936),f=r(6471),I=r(7082),Z=r(7556),m=r(8583),P=r(552),y=r(7001),s=r(3679);class R{}var e=r(7716),g=r(4655);class S{}let h=(()=>{class n{constructor(t){this.http=t,this.httpOptions={headers:new b.WM({"Content-Type":"application/json"})},this.baseurl="http://localhost:8084/"}getAllPhycision(){return this.http.get(`${this.baseurl}inbox/physicians`)}saveNotes(t){return this.http.post(`${this.baseurl}notes/save`,t)}getRecievedNotes(t){return this.http.get(`${this.baseurl}notes/recieved/${t}`)}getSentNotes(t){return this.http.get(`${this.baseurl}notes/sent/${t}`)}deleteNotes(t){return this.http.delete(`${this.baseurl}notes/delete/${t}`,{responseType:"text"})}sendReply(t){return this.http.put(`${this.baseurl}notes/reply/`,t,{responseType:"text"})}getNonReadCount(t){return this.http.get(`${this.baseurl}notes/nonreadcount/${t}`)}updateRead(t){return this.http.put(`${this.baseurl}/notes/updateread/${t}`,new S)}sendMail(t){return this.http.post(`${this.baseurl}notes/sendMail`,t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(b.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var O=r(8734),u=r(8295),v=r(9983),N=r(1095),T=r(6627);function k(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){return e.CHM(t),e.oxw().clearInput()}),e.TgZ(1,"mat-icon"),e._uU(2,"close"),e.qZA(),e.qZA()}}function Y(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1,"Email Required"),e.qZA())}function J(n,i){if(1&n&&(e.TgZ(0,"div",22),e.YNc(1,Y,2,0,"div",23),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.email.errors.required)}}function Q(n,i){if(1&n&&(e.TgZ(0,"div",20),e.YNc(1,J,2,1,"div",21),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.f.email.touched)}}function D(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1," Email Required "),e.qZA())}function E(n,i){if(1&n&&(e.TgZ(0,"div",22),e.YNc(1,D,2,0,"div",23),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.subject.errors.required)}}function F(n,i){if(1&n&&(e.TgZ(0,"div",20),e.YNc(1,E,2,1,"div",21),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.f.subject.touched)}}function B(n,i){1&n&&(e.TgZ(0,"div"),e._uU(1,"Email Required"),e.qZA())}function G(n,i){if(1&n&&(e.TgZ(0,"div",22),e.YNc(1,B,2,0,"div",23),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.body.errors.required)}}function H(n,i){if(1&n&&(e.TgZ(0,"div",20),e.YNc(1,G,2,1,"div",21),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.f.body.touched)}}let j=(()=>{class n{constructor(t,o,a,d){this.router=t,this.notesSerive=o,this._snackBar=a,this.adminService=d,this.model=new R,this.submitted=!1,this.value=[],this.users=[],this.allPatientButton=!1,this.ActivePatientButton=!1,this.allEmployeeButton=!1,this.activeEmployeebutton=!1,this.dataFetch=!1,this.disabledInput=!1}ngOnInit(){this.emailform=new s.cw({email:new s.NI(null,[s.kI.required]),subject:new s.NI(null,[s.kI.required]),body:new s.NI(null,[s.kI.required])})}get f(){return this.emailform.controls}onSubmit(){if(this.submitted=!0,this.model.multipleTo=[],this.model.subject=this.f.subject.value,this.model.body=this.f.body.value,this.dataFetch)this.model.multipleTo=this.f.email.value;else{const t=this.f.email.value.split(" ");this.model.multipleTo=t}this.notesSerive.sendMail(this.model).subscribe(t=>{this.router.navigate(["admin"]),this._snackBar.open(t.success)})}getAllPatient(){this.adminService.getAllPatientEmail().subscribe(t=>{this.users=t.patients,this.value=this.value.concat(this.users.map(o=>o.email)),this.allPatientButton=!0,this.ActivePatientButton=!0,this.disabledInput=!0,this.dataFetch=!0})}getAllActivePatient(){this.adminService.getAllActivePatientEmail().subscribe(t=>{this.users=t.activePatients,this.value=this.value.concat(this.users.map(o=>o.email)),this.allPatientButton=!0,this.ActivePatientButton=!0,this.disabledInput=!0,this.dataFetch=!0})}getAllEmployee(){this.adminService.getAllEmployeeEmail().subscribe(t=>{this.users=t.staffs,this.value=this.value.concat(this.users.map(o=>o.email)),this.activeEmployeebutton=!0,this.allEmployeeButton=!0,this.disabledInput=!0,this.dataFetch=!0})}getAllActiveEmployee(){this.adminService.getAllActiveEmployeeEmail().subscribe(t=>{this.users=t.activeStaffs,this.value=this.value.concat(this.users.map(o=>o.email)),this.activeEmployeebutton=!0,this.allEmployeeButton=!0,this.disabledInput=!0,this.dataFetch=!0})}clearInput(){this.value=[],this.allPatientButton=!1,this.ActivePatientButton=!1,this.activeEmployeebutton=!1,this.allEmployeeButton=!1,this.disabledInput=!1,this.dataFetch=!1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.F0),e.Y36(h),e.Y36(y.ux),e.Y36(O.w))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-notification"]],decls:42,vars:17,consts:[[1,"maindiv"],[1,"table-bordered"],[1,"container"],[1,"page-desc",3,"hidden"],[1,"row","justify-content-center"],[1,"main-content","col-md-8","mat-elevation-z3"],["type","button",1,"users-button","btn","btn-secondary",3,"disabled","click"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-control-lg","form-label"],["for","colFormLabel",1,"col-sm-2","col-form-label"],["type","text","formControlName","email","id","email","matInput","",1,"form-control","input-border-radius-lg","form-control-lg",3,"disabled","ngClass","ngModel","ngModelChange"],["type","button","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["class","invalid-feedback",4,"ngIf"],[1,"example-full-width"],["type","subject","formControlName","subject","id","subject","matInput","",1,"form-control","input-border-radius-lg","form-control-lg",3,"ngClass"],[1,"textarea"],["formControlName","body","id","body","matInput","","rows","10",1,"form-control","input-border-radius-lg",3,"ngClass"],[1,"btn","btn-success",3,"disabled"],["type","button","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[1,"invalid-feedback"],["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"section",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"h3"),e._uU(7,"Send New Notification"),e.qZA(),e._UZ(8,"br"),e.TgZ(9,"button",6),e.NdJ("click",function(){return o.getAllPatient()}),e._uU(10,"Send To All Patient"),e.qZA(),e._uU(11,"\xa0\xa0 "),e.TgZ(12,"button",6),e.NdJ("click",function(){return o.getAllActivePatient()}),e._uU(13,"Send To All Active Patient"),e.qZA(),e._UZ(14,"hr"),e.TgZ(15,"button",6),e.NdJ("click",function(){return o.getAllEmployee()}),e._uU(16,"Send To All Staff"),e.qZA(),e._uU(17,"\xa0\xa0 "),e.TgZ(18,"button",6),e.NdJ("click",function(){return o.getAllActiveEmployee()}),e._uU(19,"Send To All Active Staff"),e.qZA(),e._UZ(20,"hr"),e.TgZ(21,"form",7),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(22,"div",8),e.TgZ(23,"mat-form-field",9),e.TgZ(24,"label",10),e._uU(25,"To:"),e.qZA(),e.TgZ(26,"input",11),e.NdJ("ngModelChange",function(d){return o.value=d}),e.qZA(),e.YNc(27,k,3,0,"button",12),e.YNc(28,Q,2,1,"div",13),e.qZA(),e.qZA(),e.TgZ(29,"div",8),e.TgZ(30,"mat-form-field",14),e.TgZ(31,"label",10),e._uU(32,"Subject:"),e.qZA(),e._UZ(33,"input",15),e.YNc(34,F,2,1,"div",13),e.qZA(),e.qZA(),e.TgZ(35,"div",8),e.TgZ(36,"mat-form-field",16),e._UZ(37,"textarea",17),e.YNc(38,H,2,1,"div",13),e.qZA(),e.qZA(),e.TgZ(39,"div",8),e.TgZ(40,"button",18),e._uU(41," Send Message "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("hidden",o.submitted),e.xp6(6),e.Q6J("disabled",o.allPatientButton),e.xp6(3),e.Q6J("disabled",o.ActivePatientButton),e.xp6(3),e.Q6J("disabled",o.allEmployeeButton),e.xp6(3),e.Q6J("disabled",o.activeEmployeebutton),e.xp6(3),e.Q6J("formGroup",o.emailform),e.xp6(5),e.Q6J("disabled",o.disabledInput)("ngClass",o.f.email.errors)("ngModel",o.value)("disabled",o.disabledInput),e.xp6(1),e.Q6J("ngIf",o.value),e.xp6(1),e.Q6J("ngIf",o.f.email.errors),e.xp6(5),e.Q6J("ngClass",o.f.subject.errors),e.xp6(1),e.Q6J("ngIf",o.f.subject.errors),e.xp6(3),e.Q6J("ngClass",o.f.body.errors),e.xp6(1),e.Q6J("ngIf",o.f.body.errors),e.xp6(2),e.Q6J("disabled",!o.emailform.valid))},directives:[s._Y,s.JL,s.sg,u.KE,s.Fj,v.Nt,s.JJ,s.u,m.mk,m.O5,N.lW,u.R9,T.Hw],styles:[".ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%]{border:1px solid #42A948}.error[_ngcontent-%COMP%]{color:red}.success[_ngcontent-%COMP%]{color:green}.contact-message[_ngcontent-%COMP%]{text-align:center}.maindiv[_ngcontent-%COMP%]{width:-webkit-max-content;width:max-content;margin:10px auto auto;padding:10px;height:70%;width:70%}mat-form-field[_ngcontent-%COMP%]{width:100%;background-color:snow}.textarea[_ngcontent-%COMP%]{height:50%}.users-button[_ngcontent-%COMP%]{width:200px;height:70px}.main-content[_ngcontent-%COMP%]{background-image:url(email-bg.413fb24836db7a9b331f.jpg);border:solid 2px thistle}"]}),n})();var $=r(346),z=r(7453),L=r(7441),X=r(2458),x=r(2613);function W(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"mat-option",14),e.NdJ("click",function(){const d=e.CHM(t).$implicit;return e.oxw().addValues(d.roleName)}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit;e.Q6J("value",t.userId),e.xp6(1),e.lnq(" ",t.title," ",t.firstName," ",t.lastName," ")}}let q=(()=>{class n{constructor(t,o,a){this.authService=t,this.router=o,this.notesService=a,this.phycision=[],this.desgination=""}ngOnInit(){this.authService.userInfo.subscribe(t=>{this.user=t}),this.loadPhycision(),this.notesform=new s.cw({recieverId:new s.NI(null,[s.kI.required]),resieverdesignation:new s.NI(null,[s.kI.required]),message:new s.NI(null,[s.kI.required,s.kI.maxLength(200)]),urgency:new s.NI(!1)})}get f(){return this.notesform.controls}loadPhycision(){this.notesService.getAllPhycision().subscribe(t=>{this.phycision.splice(0,this.phycision.length),this.phycision.push(...t)})}addValues(t){this.desgination="PHYSICIAN"}onSubmit(){const t=new S,o=new z.n;o.userId=this.f.recieverId.value,t.message=this.f.message.value,t.urgency=this.f.urgency.value,t.sender=this.user,t.receiver=o,this.notesService.saveNotes(t).subscribe(a=>{console.log(a)}),this.notesform.reset()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z.e),e.Y36(g.F0),e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-send-notes"]],decls:31,vars:4,consts:[[1,"container","maindiv"],[1,"example-container"],[3,"formGroup","ngSubmit"],["appearance","fill"],["disableRipple","","matNativeControl","","required","","formControlName","recieverId"],[3,"value","click",4,"ngFor","ngForOf"],["align","end"],["matInput","","disabled","",3,"value"],["appearance","fill",1,"example-full-width"],["matInput","","placeholder","Enter message...","formControlName","message"],["formControlName","urgency"],["value","true"],["value","false",3,"checked"],["type","submit","mat-raised-button","","color","primary"],[3,"value","click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"New Notes"),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(5,"mat-form-field",3),e.TgZ(6,"mat-label"),e._uU(7,"Select Physician"),e.qZA(),e.TgZ(8,"mat-select",4),e._UZ(9,"mat-option"),e.YNc(10,W,2,4,"mat-option",5),e.qZA(),e.TgZ(11,"mat-hint",6),e._uU(12,"Select Physician from dropdown"),e.qZA(),e.qZA(),e.TgZ(13,"mat-form-field",3),e.TgZ(14,"mat-label"),e._uU(15,"Designation"),e.qZA(),e._UZ(16,"input",7),e.qZA(),e.TgZ(17,"mat-form-field",8),e.TgZ(18,"mat-label"),e._uU(19,"Enter Message"),e.qZA(),e._UZ(20,"textarea",9),e.qZA(),e.TgZ(21,"div"),e.TgZ(22,"label"),e._uU(23,"Urgency level: "),e.qZA(),e.TgZ(24,"mat-radio-group",10),e.TgZ(25,"mat-radio-button",11),e._uU(26,"Urgency"),e.qZA(),e.TgZ(27,"mat-radio-button",12),e._uU(28,"Not Urgency"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(29,"button",13),e._uU(30,"Send Note"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("formGroup",o.notesform),e.xp6(6),e.Q6J("ngForOf",o.phycision),e.xp6(6),e.Q6J("value",o.desgination),e.xp6(11),e.Q6J("checked",!0))},directives:[s._Y,s.JL,s.sg,u.KE,u.hX,L.gD,s.Q7,s.JJ,s.u,X.ey,m.sg,u.bx,v.Nt,s.Fj,x.VQ,x.U0,N.lW],styles:[".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:75%}.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-bottom:20px}.example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:5px 0}.example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin:0 12px}.maindiv[_ngcontent-%COMP%]{background-image:url(pexels-photo-4386467.a522df765b4ad684e952.jpeg)}"]}),n})();var C=r(9692),_=r(1494),l=r(2091),p=r(2238);function V(n,i){if(1&n&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Oqu(t)}}let K=(()=>{class n{constructor(t,o,a){this.dialogRef=t,this.note=o,this.notesService=a}ngOnInit(){this.replyform=new s.cw({reply:new s.NI(null,[s.kI.required,s.kI.maxLength(200)])})}get f(){return this.replyform.controls}onSendClick(){(null==this.note.reply||null==this.note.reply)&&(this.note.reply=[]),this.note.reply.push(this.f.reply.value),this.notesService.sendReply(this.note).subscribe(t=>{console.log(t)}),this.replyform.reset()}onDeleteClick(){this.notesService.deleteNotes(this.note.notesid).subscribe(t=>{this.onNoClick()}),this.onNoClick()}onNoClick(){this.dialogRef.close()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.so),e.Y36(p.WI),e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-message-dailog"]],decls:32,vars:7,consts:[[1,"message-dailog"],["mat-dialog-title",""],["mat-dialog-content","",1,"input-full-width"],[2,"font","message-box"],[2,"color","red",3,"hidden"],[2,"color","dimgrey"],[4,"ngFor","ngForOf"],[3,"formGroup","ngSubmit"],["appearance","fill",1,"input-full-width"],["matInput","","placeholder","Enter.....","formControlName","reply"],["type","submit","color","primary","mat-button",""],["mat-dialog-actions",""],["mat-icon-button","","color","accent","mat-button","",3,"click"],["color","warn","mat-button","","mat-dialog-close","","cdkFocusInitial","",2,"float","right"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"h1",1),e._uU(3),e.qZA(),e.TgZ(4,"div"),e.TgZ(5,"div",2),e.TgZ(6,"span"),e._uU(7,"Hi "),e.TgZ(8,"b"),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"p",3),e._uU(11),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"p",4),e._uU(14,"Previous Reply on this Note"),e.qZA(),e.TgZ(15,"div",5),e.YNc(16,V,2,1,"p",6),e.qZA(),e.TgZ(17,"form",7),e.NdJ("ngSubmit",function(){return o.onSendClick()}),e.TgZ(18,"mat-form-field",8),e.TgZ(19,"mat-label"),e._uU(20,"Reply to this note"),e.qZA(),e._UZ(21,"textarea",9),e.qZA(),e.TgZ(22,"button",10),e.TgZ(23,"mat-icon"),e._uU(24,"send"),e.qZA(),e._uU(25,"\xa0 Send"),e.qZA(),e.qZA(),e.qZA(),e._UZ(26,"br"),e.TgZ(27,"div",11),e.TgZ(28,"button",12),e.NdJ("click",function(){return o.onDeleteClick()}),e._uU(29,"Delete"),e.qZA(),e.TgZ(30,"button",13),e._uU(31,"Close"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.AsE(" ",o.note.receiver.firstName,"\xa0 ",o.note.receiver.lastName,"\n"),e.xp6(6),e.Oqu(o.note.sender.firstName),e.xp6(2),e.Oqu(o.note.message),e.xp6(2),e.Q6J("hidden",0==o.note.reply.length),e.xp6(3),e.Q6J("ngForOf",o.note.reply),e.xp6(1),e.Q6J("formGroup",o.replyform))},directives:[p.uh,p.xY,m.sg,s._Y,s.JL,s.sg,u.KE,u.hX,v.Nt,s.Fj,s.JJ,s.u,N.lW,T.Hw,p.H8,p.ZT],styles:[".message-dailog[_ngcontent-%COMP%]{min-width:400px;max-width:500px;width:100%}.input-full-width[_ngcontent-%COMP%]{min-width:90%}"]}),n})();const ee=["input"];function te(n,i){1&n&&(e.TgZ(0,"th",18),e._uU(1," Date "),e.qZA())}function ne(n,i){if(1&n&&(e.TgZ(0,"td",19),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Oqu(e.xi3(2,1,t.date,"EEE, MMM d, y, h:mm:a"))}}function oe(n,i){1&n&&(e.TgZ(0,"th",20),e._uU(1," From "),e.qZA())}function ie(n,i){if(1&n&&(e.TgZ(0,"td",19),e.TgZ(1,"b"),e._uU(2),e.qZA(),e.qZA()),2&n){const t=i.$implicit;e.xp6(2),e.AsE(" ",t.receiver.firstName," ",t.receiver.lastName,"")}}function ae(n,i){1&n&&(e.TgZ(0,"th",21),e._uU(1," Message "),e.qZA())}function se(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"td",19),e._uU(1),e.TgZ(2,"button",22),e.NdJ("click",function(){const d=e.CHM(t).$implicit;return e.oxw().openDialog(d)}),e._uU(3,"Read more"),e.qZA(),e.qZA()}if(2&n){const t=i.$implicit;e.xp6(1),e.hij("",t.message.substr(0,20)," ")}}function re(n,i){1&n&&e._UZ(0,"th",23)}function le(n,i){1&n&&(e.TgZ(0,"mat-icon",25),e._uU(1,"flag"),e.qZA())}function ce(n,i){if(1&n&&(e.TgZ(0,"td",19),e.YNc(1,le,2,0,"mat-icon",24),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!0===t.urgency)}}function de(n,i){1&n&&e._UZ(0,"tr",26)}function ue(n,i){1&n&&e._UZ(0,"tr",27)}function me(n,i){if(1&n&&(e.TgZ(0,"tr",28),e.TgZ(1,"td",29),e._uU(2),e.qZA(),e.qZA()),2&n){e.oxw();const t=e.MAs(4);e.xp6(2),e.hij(' No Notes matching the filter "',t.value,'" ')}}const pe=function(){return[5,10,25,100]};let w=(()=>{class n{constructor(t,o,a,d){this.notesService=t,this.route=o,this.dialog=a,this.authService=d,this.displayedColumns=["date","sender","message","urgency"]}ngOnInit(){this.authService.userInfo.subscribe(t=>{this.user=t}),this.loadNotes()}loadNotes(){this.notesService.getRecievedNotes(this.user.userId).subscribe(t=>{console.log(t),this.dataSource=new l.by(t.notes),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}applyFilter(t){const o=t.target.value;this.dataSource.filter=o.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage(),this.dataSource.filter=o.trim().toLowerCase()}onRowClicked(t){console.log("Row clicked: ",t),this.notesService.updateRead(t).subscribe(o=>{})}openDialog(t){this.dialog.open(K,{data:t}).afterClosed().subscribe(a=>{})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h),e.Y36(g.gz),e.Y36(p.uw),e.Y36(Z.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-recieved-notes"]],viewQuery:function(t,o){if(1&t&&(e.Gf(C.NW,7),e.Gf(_.YE,7),e.Gf(ee,7)),2&t){let a;e.iGM(a=e.CRH())&&(o.paginator=a.first),e.iGM(a=e.CRH())&&(o.sort=a.first),e.iGM(a=e.CRH())&&(o.input=a.first)}},decls:24,vars:5,consts:[["appearance","standard"],["matInput","","placeholder","Search notes",3,"keyup"],["input",""],[1,"table-responsive"],["mat-table","","matSort","",1,"table","table-hover",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","","mat-sort-header","","class","date header",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","sender"],["mat-header-cell","","mat-sort-header","","class","sender header",4,"matHeaderCellDef"],["matColumnDef","message"],["mat-header-cell","","class","message header",4,"matHeaderCellDef"],["matColumnDef","urgency"],["mat-header-cell","","class","header",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",1,"content",2,"float","right",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header","",1,"date","header"],["mat-cell",""],["mat-header-cell","","mat-sort-header","",1,"sender","header"],["mat-header-cell","",1,"message","header"],["mat-raised-button","",1,"dailog-button",3,"click"],["mat-header-cell","",1,"header"],["color","warn",4,"ngIf"],["color","warn"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","2",1,"mat-cell"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-form-field",0),e.TgZ(1,"mat-label"),e._uU(2,"Filter"),e.qZA(),e.TgZ(3,"input",1,2),e.NdJ("keyup",function(d){return o.applyFilter(d)}),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"table",4),e.ynx(7,5),e.YNc(8,te,2,0,"th",6),e.YNc(9,ne,3,4,"td",7),e.BQk(),e.ynx(10,8),e.YNc(11,oe,2,0,"th",9),e.YNc(12,ie,3,2,"td",7),e.BQk(),e.ynx(13,10),e.YNc(14,ae,2,0,"th",11),e.YNc(15,se,4,1,"td",7),e.BQk(),e.ynx(16,12),e.YNc(17,re,1,0,"th",13),e.YNc(18,ce,2,1,"td",7),e.BQk(),e.YNc(19,de,1,0,"tr",14),e.YNc(20,ue,1,0,"tr",15),e.YNc(21,me,3,1,"tr",16),e.qZA(),e.TgZ(22,"div"),e._UZ(23,"mat-paginator",17),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.Q6J("dataSource",o.dataSource),e.xp6(13),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(3),e.Q6J("pageSizeOptions",e.DdM(4,pe)))},directives:[u.KE,u.hX,v.Nt,l.BZ,_.YE,l.w1,l.fO,l.Dz,l.as,l.nj,l.Ee,C.NW,l.ge,_.nU,l.ev,N.lW,m.O5,T.Hw,l.XQ,l.Gk],pipes:[m.uU],styles:['table[_ngcontent-%COMP%]{width:100%;background-color:beige}.content[_ngcontent-%COMP%]{background-color:beige}.mat-form-field[_ngcontent-%COMP%]{font-size:14px}.date[_ngcontent-%COMP%]{width:25%}.message[_ngcontent-%COMP%]{width:40%}.sender[_ngcontent-%COMP%]{width:20%}.dailog-button[_ngcontent-%COMP%]{float:right}.header[_ngcontent-%COMP%]{font-family:"Franklin Gothic Medium","Arial Narrow",Arial,sans-serif;font-size:15px;color:#443f3f}']}),n})();const ge=["input"];function fe(n,i){1&n&&(e.TgZ(0,"th",18),e._uU(1," Date "),e.qZA())}function he(n,i){if(1&n&&(e.TgZ(0,"td",19),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Oqu(e.xi3(2,1,t.date,"EEE, MMM d, y, h:mm:a"))}}function _e(n,i){1&n&&(e.TgZ(0,"th",20),e._uU(1," To "),e.qZA())}function ve(n,i){if(1&n&&(e.TgZ(0,"td",19),e.TgZ(1,"b"),e._uU(2),e.qZA(),e.qZA()),2&n){const t=i.$implicit;e.xp6(2),e.AsE(" ",t.receiver.firstName," ",t.receiver.lastName,"")}}function Ze(n,i){1&n&&(e.TgZ(0,"th",21),e._uU(1," Message "),e.qZA())}function Ne(n,i){if(1&n&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.hij("",t.message," ")}}function Ce(n,i){1&n&&(e.TgZ(0,"th",22),e._uU(1," Reply "),e.qZA())}function be(n,i){if(1&n&&(e.TgZ(0,"td",19),e.TgZ(1,"div",23),e._uU(2),e.qZA(),e.qZA()),2&n){const t=i.$implicit;e.xp6(2),e.Oqu(t.reply)}}function Te(n,i){1&n&&e._UZ(0,"tr",24)}function Ae(n,i){1&n&&e._UZ(0,"tr",25)}function ye(n,i){if(1&n&&(e.TgZ(0,"tr",26),e.TgZ(1,"td",27),e._uU(2),e.qZA(),e.qZA()),2&n){e.oxw();const t=e.MAs(4);e.xp6(2),e.hij(' No Notes matching the filter "',t.value,'" ')}}const Se=function(){return[5,10,25,100]};let M=(()=>{class n{constructor(t,o,a){this.notesService=t,this.route=o,this.dialog=a,this.userId=1,this.displayedColumns=["date","reciever","message","reply"]}ngOnInit(){this.loadNotes()}loadNotes(){this.notesService.getSentNotes(this.userId).subscribe(t=>{this.dataSource=new l.by(t.notes),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}applyFilter(t){const o=t.target.value;this.dataSource.filter=o.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage(),this.dataSource.filter=o.trim().toLowerCase()}onRowClicked(t){console.log("Row clicked: ",t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h),e.Y36(g.gz),e.Y36(p.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sent-notes"]],viewQuery:function(t,o){if(1&t&&(e.Gf(C.NW,7),e.Gf(_.YE,7),e.Gf(ge,7)),2&t){let a;e.iGM(a=e.CRH())&&(o.paginator=a.first),e.iGM(a=e.CRH())&&(o.sort=a.first),e.iGM(a=e.CRH())&&(o.input=a.first)}},decls:24,vars:5,consts:[["appearance","standard"],["matInput","","placeholder","Search notes",3,"keyup"],["input",""],[1,"table-responsive"],["mat-table","","matSort","",1,"table","table-hover",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","","mat-sort-header","","class","date header",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","reciever"],["mat-header-cell","","mat-sort-header","","class","sender header",4,"matHeaderCellDef"],["matColumnDef","message"],["mat-header-cell","","class","message header",4,"matHeaderCellDef"],["matColumnDef","reply"],["mat-header-cell","","class","header",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",1,"content",2,"float","right",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header","",1,"date","header"],["mat-cell",""],["mat-header-cell","","mat-sort-header","",1,"sender","header"],["mat-header-cell","",1,"message","header"],["mat-header-cell","",1,"header"],[2,"color","dimgrey","font-size","large"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","2",1,"mat-cell"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-form-field",0),e.TgZ(1,"mat-label"),e._uU(2,"Filter"),e.qZA(),e.TgZ(3,"input",1,2),e.NdJ("keyup",function(d){return o.applyFilter(d)}),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"table",4),e.ynx(7,5),e.YNc(8,fe,2,0,"th",6),e.YNc(9,he,3,4,"td",7),e.BQk(),e.ynx(10,8),e.YNc(11,_e,2,0,"th",9),e.YNc(12,ve,3,2,"td",7),e.BQk(),e.ynx(13,10),e.YNc(14,Ze,2,0,"th",11),e.YNc(15,Ne,2,1,"td",7),e.BQk(),e.ynx(16,12),e.YNc(17,Ce,2,0,"th",13),e.YNc(18,be,3,1,"td",7),e.BQk(),e.YNc(19,Te,1,0,"tr",14),e.YNc(20,Ae,1,0,"tr",15),e.YNc(21,ye,3,1,"tr",16),e.qZA(),e.TgZ(22,"div"),e._UZ(23,"mat-paginator",17),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.Q6J("dataSource",o.dataSource),e.xp6(13),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(3),e.Q6J("pageSizeOptions",e.DdM(4,Se)))},directives:[u.KE,u.hX,v.Nt,l.BZ,_.YE,l.w1,l.fO,l.Dz,l.as,l.nj,l.Ee,C.NW,l.ge,_.nU,l.ev,l.XQ,l.Gk],pipes:[m.uU],styles:['table[_ngcontent-%COMP%]{width:100%;background-color:beige}.content[_ngcontent-%COMP%]{background-color:beige}.mat-form-field[_ngcontent-%COMP%]{font-size:14px}.date[_ngcontent-%COMP%]{width:25%}.message[_ngcontent-%COMP%]{width:40%}.sender[_ngcontent-%COMP%]{width:20%}.dailog-button[_ngcontent-%COMP%]{float:right}.header[_ngcontent-%COMP%]{font-family:"Franklin Gothic Medium","Arial Narrow",Arial,sans-serif;font-size:15px;color:#443f3f}']}),n})();function xe(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"li"),e.TgZ(1,"a",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().activatatedeRecievedNotes()}),e._UZ(2,"i",11),e.TgZ(3,"span",12),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggleBadgeVisibility()}),e._uU(4," Recieved Notes "),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(3),e.s9C("matBadge",t.nonReadCount),e.Q6J("matBadgeHidden",t.hidden)}}function qe(n,i){1&n&&e._UZ(0,"app-send-notes")}function we(n,i){1&n&&e._UZ(0,"app-recieved-notes")}function Me(n,i){1&n&&e._UZ(0,"app-sent-notes")}let Ue=(()=>{class n{constructor(t,o,a){this.authService=t,this.notesService=o,this.router=a,this.user=null,this.nonReadCount=0,this.activateSendNotes=!0,this.activateSentNotes=!1,this.activateRecievedNotes=!1,this.hidden=!1}ngOnInit(){this.authService.userInfo.subscribe(t=>{this.user=t}),this.getNonReadCount()}activatatedeSendNotes(){this.activateSendNotes=!0,this.activateSentNotes=!1,this.activateRecievedNotes=!1}activatatedeSentNotes(){this.activateSendNotes=!1,this.activateSentNotes=!0,this.activateRecievedNotes=!1}activatatedeRecievedNotes(){this.activateSendNotes=!1,this.activateSentNotes=!1,this.activateRecievedNotes=!0}toggleBadgeVisibility(){this.hidden=!0}getNonReadCount(){this.notesService.getNonReadCount(this.user.userId).subscribe(t=>{this.nonReadCount=t.nonreadcount,0===this.nonReadCount&&(this.hidden=!0)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z.e),e.Y36(h),e.Y36(g.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-notes"]],decls:21,vars:4,consts:[[1,"maindiv","containermt-5","mat-elevation-z5"],[1,"row"],[1,"col-sm-3",2,"background-color","#7386d5"],["id","sidebar"],[1,"sidebar-header"],[1,"list-unstyled","components"],[2,"cursor","pointer",3,"click"],["aria-hidden","true",1,"fa","fa-envelope"],[4,"ngIf"],["aria-hidden","true",1,"fa","fa-share-square"],[1,"col-sm-9","backgroundimage"],["aria-hidden","true",1,"fa","fa-download"],["mat-raised-button","","matBadgeOverlap","false","matBadgeColor","accent",3,"matBadge","matBadgeHidden","click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"nav",3),e.TgZ(4,"div",4),e.TgZ(5,"h3"),e._uU(6,"Notes"),e.qZA(),e.qZA(),e.TgZ(7,"ul",5),e.TgZ(8,"li"),e.TgZ(9,"a",6),e.NdJ("click",function(){return o.activatatedeSendNotes()}),e._UZ(10,"i",7),e._uU(11," send notes "),e.qZA(),e.qZA(),e.YNc(12,xe,5,2,"li",8),e.TgZ(13,"li"),e.TgZ(14,"a",6),e.NdJ("click",function(){return o.activatatedeSentNotes()}),e._UZ(15,"i",9),e._uU(16," Sent Notes "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",10),e.YNc(18,qe,1,0,"app-send-notes",8),e.YNc(19,we,1,0,"app-recieved-notes",8),e.YNc(20,Me,1,0,"app-sent-notes",8),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(12),e.Q6J("ngIf","ADMIN"==o.user.roleName),e.xp6(6),e.Q6J("ngIf",o.activateSendNotes),e.xp6(1),e.Q6J("ngIf",o.activateRecievedNotes),e.xp6(1),e.Q6J("ngIf",o.activateSentNotes))},directives:[m.O5,$.k,q,w,M],styles:["#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px;font-size:1.1em;display:block;border-bottom:1px solid rgb(15,15,15)}#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#7386d5;background:#fff}.maindiv[_ngcontent-%COMP%]{width:80%;margin-top:20px;margin-left:40px}.backgroundimage[_ngcontent-%COMP%]{background-image:url(pexels-photo-532566.c5ee25f69bc649c44ce7.jpeg)}#maindiv[_ngcontent-%COMP%]{height:95%;margin-left:7%;margin-top:5%}"]}),n})();var c=r(6548);const Ie=[{path:"",component:Ue,canActivate:[f.d],data:{role:[c.G.ADMIN,c.G.PHYSICIAN,c.G.NURSE]}},{path:"send-notes",component:q,canActivate:[f.d],data:{role:[c.G.ADMIN,c.G.PHYSICIAN,c.G.NURSE]}},{path:"sent-notes",component:M,canActivate:[f.d],data:{role:[c.G.PHYSICIAN,c.G.NURSE,c.G.ADMIN]}},{path:"recieved-notes",component:w,canActivate:[f.d],data:{role:[c.G.ADMIN,c.G.PHYSICIAN,c.G.NURSE]}},{path:"notification",component:j,canActivate:[f.d],data:{role:[c.G.ADMIN]}}];let Pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Bz.forChild(Ie)],g.Bz]}),n})(),Re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[P.fo,Z.e,I.a,f.d,{provide:y.Ve,useValue:{duration:500}}],imports:[[m.ez,s.UX,U.h,Pe,b.JF,p.Is]]}),n})()}}]);