"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[574],{9574:(Me,v,s)=>{s.r(v),s.d(v,{PatientModule:()=>ye});var c=s(8583),d=s(4655),N=s(7453),o=s(3679);class D{}var g=s(1024),p=s(2238);class M{}var e=s(7716),h=s(4293);function E(r,i){if(1&r&&(e.TgZ(0,"option"),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.hij(" ",t.allergyId," ")}}function b(r,i){if(1&r&&(e.TgZ(0,"option"),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.hij(" ",t.allergyName," ")}}function P(r,i){if(1&r&&(e.TgZ(0,"option"),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.hij(" ",t.allergyType," ")}}let x=(()=>{class r{constructor(t,n,l,a){this.formBuilder=t,this.router=n,this.patientService=l,this.dialog=a,this.form=new o.cw({}),this.obj=new M}ngOnInit(){this.form=this.formBuilder.group({allergyId:["",o.kI.required],allergyName:["",o.kI.required],allergyType:["",o.kI.required],allergyDesc:["",o.kI.required],patientId:["",o.kI.required]}),this.patientId=this.patientService.patientIdToAddAllergy,this.patientService.getAllergy().subscribe(t=>{console.log(t),this.allergy_idlist=t}),this.patientService.getAllergyName().subscribe(t=>{console.log(t),this.allergy_namelist=t}),this.patientService.getAllergyType().subscribe(t=>{console.log(t),this.allergy_typelist=t})}onClose(){this.dialog.close(),this.form.reset()}onSubmit(){this.obj.allergyId=this.form.value.allergyId,this.obj.allergyName=this.form.value.allergyName,this.obj.allergyType=this.form.value.allergyType,this.obj.allergyDesc=this.form.value.allergyDesc,this.obj.patientId=this.patientId,console.log(this.obj),this.patientService.saveAllergy(this.obj),this.onClose()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(o.qu),e.Y36(d.F0),e.Y36(h.e),e.Y36(p.so))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-add-allergy-dialog"]],decls:22,vars:4,consts:[[1,"heading"],[3,"formGroup","submit"],["list","allergyIdList","formControlName","allergyId","placeholder","select Allergy Id",1,"form-control"],["id","allergyIdList"],[4,"ngFor","ngForOf"],["list","allergyNameList","formControlName","allergyName","placeholder","Select Allergy Name",1,"form-control"],["id","allergyNameList"],["list","allergyTypeList","formControlName","allergyType","placeholder","Select Allergy Type",1,"form-control"],["id","allergyTypeList"],[1,"row"],[1,"col","text-center"],["type","submit",1,"btn","btn-success"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"p",0),e._uU(1,"Add Allergy"),e.qZA(),e.TgZ(2,"form",1),e.NdJ("submit",function(){return n.onSubmit()}),e._UZ(3,"input",2),e.TgZ(4,"datalist",3),e.YNc(5,E,2,1,"option",4),e.qZA(),e._UZ(6,"br"),e._UZ(7,"input",5),e.TgZ(8,"datalist",6),e.YNc(9,b,2,1,"option",4),e.qZA(),e._UZ(10,"br"),e._UZ(11,"input",7),e.TgZ(12,"datalist",8),e.YNc(13,P,2,1,"option",4),e.qZA(),e._UZ(14,"br"),e.TgZ(15,"div",9),e.TgZ(16,"div",10),e.TgZ(17,"button",11),e._uU(18,"Save"),e.qZA(),e._uU(19,"\xa0 "),e.TgZ(20,"button",12),e.NdJ("click",function(){return n.onClose()}),e._uU(21," Close "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(3),e.Q6J("ngForOf",n.allergy_idlist),e.xp6(4),e.Q6J("ngForOf",n.allergy_idlist),e.xp6(4),e.Q6J("ngForOf",n.allergy_idlist))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,c.sg,o.YN,o.Kr],styles:[".heading[_ngcontent-%COMP%]{color:#1a41c0;size:4px;font-size:20px;text-align:center}form[_ngcontent-%COMP%]{text-align:center}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:center}"]}),r})();var _=s(5939),f=s(2613),u=s(8295),I=s(9983),Z=s(7441),q=s(2458),A=s(6627);function U(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorFirstName())}}function R(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorLastName())}}function O(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorBirthDate())}}function L(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorGender())}}function J(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorRace())}}function Q(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorEthnicity())}}function w(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorLanguages())}}function F(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorEmail())}}function B(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorContactNo())}}function S(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorAddress())}}function Y(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorEmergencyContactFirstName())}}function k(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorEmergencyContactLastName())}}function H(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorEmergencyContactEmail())}}function j(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorEmergencyContactContactNo())}}function G(r,i){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.errorEmergencyContactAddress())}}function z(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td",54),e._uU(2),e.qZA(),e.TgZ(3,"td",54),e._uU(4),e.qZA(),e.TgZ(5,"td",54),e._uU(6),e.qZA(),e.TgZ(7,"td",54),e._uU(8),e.qZA(),e.TgZ(9,"td",54),e.TgZ(10,"mat-icon",55),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(3).deleteAllergy(a.id)}),e._uU(11,"delete"),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=i.$implicit;e.xp6(2),e.Oqu(t.allergyId),e.xp6(2),e.Oqu(t.allergyName),e.xp6(2),e.Oqu(t.allergyType),e.xp6(2),e.Oqu(t.allergyDesc)}}function K(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"span"),e.TgZ(1,"div",47),e.TgZ(2,"div",48),e.TgZ(3,"div",49),e.TgZ(4,"button",50),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).addAllergyPopUp()}),e._uU(5," Add New Allergy "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"table",51),e.TgZ(8,"thead"),e.TgZ(9,"tr"),e.TgZ(10,"th",52),e._uU(11,"Allergy ID"),e.qZA(),e.TgZ(12,"th",52),e._uU(13,"Allergy Name"),e.qZA(),e.TgZ(14,"th",52),e._uU(15,"Allergy Type"),e.qZA(),e.TgZ(16,"th",52),e._uU(17,"Description"),e.qZA(),e.TgZ(18,"th",52),e._uU(19,"Action"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"tbody"),e.YNc(21,z,12,4,"tr",53),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=e.oxw(2);e.xp6(21),e.Q6J("ngForOf",t.allergyList)}}function V(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"span"),e.TgZ(1,"mat-tab",45),e._UZ(2,"br"),e.TgZ(3,"p",2),e._uU(4,"ALLERGY DETAILS"),e.qZA(),e.TgZ(5,"h2"),e._uU(6,"Patient has any known allergies?"),e.qZA(),e.TgZ(7,"mat-radio-group"),e.TgZ(8,"mat-radio-button",46),e.NdJ("change",function(){return e.CHM(t),e.oxw().isDisableAllergy=!0})("click",function(){return e.CHM(t),e.oxw().allergyFunction()}),e._uU(9,"Yes"),e.qZA(),e.TgZ(10,"mat-radio-button",41),e.NdJ("change",function(){return e.CHM(t),e.oxw().isDisableAllergy=!1}),e._uU(11,"No"),e.qZA(),e.qZA(),e._UZ(12,"br"),e._UZ(13,"br"),e.YNc(14,K,22,1,"span",12),e.qZA(),e.qZA()}if(2&r){const t=e.oxw();e.xp6(10),e.Q6J("checked",!0),e.xp6(4),e.Q6J("ngIf",t.isDisableAllergy)}}let $=(()=>{class r{constructor(t,n,l,a,C,De){this.formBuilder=n,this.patientService=l,this.router=a,this.activatedroute=C,this.dialog=De,this.address="ketannnnnnnnnn",this.address2="",this.form=new o.cw({}),this.selected="no",this.isPopupOpened=!0,this.reactiveForm=new o.cw({}),this.isDisableAllergy=!1,this.isDisableAllergyTab=!1,this.checked=!1,this.allergy=!0,this.isDisabled=!1,this.formSubmitAttempt=!1,this.patient=new N.n,this.emergencyContact=new D,this.selectedLink="No",this.displayedColumns=["1","2","3","4","5"],this.listAllergies=[],this.toppings=t.group({}),this.checked&&(this.address2=this.address)}ngOnInit(){this.patientId=this.activatedroute.snapshot.paramMap.get("id"),this.patientService.patientIdToAddAllergy=this.patientId,this.getAllAllergiesOfPatient(this.patientId),this.loadPatient(this.patientId),this.reactiveForm=this.formBuilder.group({allergyId:[" "],allergyName:[" "],allergyType:[""],allergyDesc:[""]}),this.patientService.getAllergy().subscribe(t=>{console.log(t),this.allergy_idlist=t}),this.patientService.getAllergyName().subscribe(t=>{this.allergy_namelist=t}),this.patientService.getAllergyType().subscribe(t=>{this.allergy_typelist=t}),this.reactiveForm=this.formBuilder.group({allergy_fatal:[]}),this.form=new o.cw({id:new o.NI(null,null),title:new o.NI(null,[o.kI.required]),firstName:new o.NI(null,[o.kI.required,o.kI.minLength(3)]),lastName:new o.NI(null,[o.kI.required,o.kI.minLength(3)]),birthDate:new o.NI(null,[o.kI.required]),age:new o.NI(null,[o.kI.required,o.kI.minLength(3)]),gender:new o.NI(null,[o.kI.required,o.kI.minLength(3)]),race:new o.NI(null,[o.kI.required,o.kI.minLength(3)]),ethnicity:new o.NI(null,[o.kI.required,o.kI.minLength(3)]),langKnown:new o.NI(null,[o.kI.required,o.kI.minLength(3)]),email:new o.NI(null,[o.kI.required,o.kI.email]),contactNo:new o.NI(null,[o.kI.required,o.kI.minLength(7)]),address:new o.NI(null,[o.kI.required,o.kI.minLength(10)]),emgrFname:new o.NI(null,[o.kI.required,o.kI.minLength(3)]),emgrLname:new o.NI(null,[o.kI.required,o.kI.minLength(3)]),emgrRelation:new o.NI(null,[o.kI.required,o.kI.minLength(3)]),emgrEmail:new o.NI(null,[o.kI.required,o.kI.email]),emgrPhnumber:new o.NI(null,[o.kI.required,o.kI.minLength(7)]),emgrAddress:new o.NI(null,[o.kI.required,o.kI.minLength(10)])})}addAllergyPopUp(){const t=new p.vA;t.disableClose=!0,t.autoFocus=!0,t.width="350px",t.height="350px",t.position={},this.isPopupOpened=!0,this.dialog.open(x,t).afterClosed().subscribe(l=>{this.isPopupOpened=!1,this.getAllAllergiesOfPatient(this.patientId)})}getAllAllergiesOfPatient(t){this.patientService.getAllAllergiesOfPatient(t).subscribe(n=>{this.allergyList=n})}fetchAllAllergyIds(){this.patientService.fetchAllAllergyIds().subscribe(t=>{this.allergyIds=t})}loadPatient(t){this.patientService.fetchPatient(t).subscribe(n=>{console.log(n),this.patient=n},n=>console.log(n))}ageCalculator(){console.log(" ageCalculator method called");const t=new Date(this.age),n=Math.abs(Date.now()-t.getTime());this.showAge=Math.floor(n/864e5/365),console.log("age is "+this.showAge)}changeFunction(){console.log("checked")}isSelected(t){return!!this.selectedLink&&this.selectedLink===t}isoptionSelected(t){return!!this.selected&&this.selected===t}onSubmit(){const t=new N.n;t.id=this.form.value.id,t.title=this.form.value.title,t.firstName=this.form.value.firstName,t.lastName=this.form.value.lastName,t.birthDate=this.form.value.birthDate,t.age=this.form.value.age,t.gender=this.form.value.gender,t.race=this.form.value.race,t.ethnicity=this.form.value.ethnicity,t.langKnown=this.form.value.langKnown,t.email=this.form.value.email,t.contactNo=this.form.value.contactNo,t.address=this.form.value.address,t.emgrTitle=this.form.value.emgrTitle,t.emgrFname=this.form.value.emgrFname,t.emgrLname=this.form.value.emgrLname,t.emgrEmail=this.form.value.emgrEmail,t.emgrPhnumber=this.form.value.emgrPhnumber,t.emgrRelation=this.form.value.emgrRelation,t.emgrAddress=this.form.value.emgrAddress,t.emgrCity=this.form.value.emgrCity,t.emgrPincode=this.form.value.emgrPincode,t.emgrState=this.form.value.emgrState,t.emgrCountry=this.form.value.emgrCountry,t.allergies=this.listAllergies,console.log("All data : "+t),console.log(t),confirm("Are you sure?")&&(this.patientService.updatePatientDetails(t),this.router.navigate(["/patient/landingPage"]))}allergyFunction(){this.getAllAllergiesOfPatient(this.patientId)}errorTitle(){var t;return(null===(t=this.form.controls.title.errors)||void 0===t?void 0:t.required)?g.B.TITLE_REQUIRED:""}errorFirstName(){var t,n;return(null===(t=this.form.controls.firstName.errors)||void 0===t?void 0:t.required)?g.B.FIRSTNAME_REQUIRED:(null===(n=this.form.controls.firstName.errors)||void 0===n?void 0:n.minlength)?g.B.ABBREVIATION_NOT_REQUIRED:""}errorEmergencyContactFirstName(){var t,n;return(null===(t=this.form.controls.emgrFname.errors)||void 0===t?void 0:t.required)?g.B.FIRSTNAME_REQUIRED:(null===(n=this.form.controls.emgrFname.errors)||void 0===n?void 0:n.minlength)?g.B.ABBREVIATION_NOT_REQUIRED:""}errorEmergencyContactLastName(){var t,n;return(null===(t=this.form.controls.emgrLname.errors)||void 0===t?void 0:t.required)?g.B.LASTNAME_REQUIRED:(null===(n=this.form.controls.emgrLname.errors)||void 0===n?void 0:n.minlength)?g.B.ABBREVIATION_NOT_REQUIRED:""}errorEmergencyContactEmail(){var t,n;return(null===(t=this.form.controls.emgrEmail.errors)||void 0===t?void 0:t.required)||(null===(n=this.form.controls.emgrEmail.errors)||void 0===n?void 0:n.email)?g.B.EMAIL_REQUIRED:""}errorEmergencyContactContactNo(){var t,n;return(null===(t=this.form.controls.emgrContactNo.errors)||void 0===t?void 0:t.required)?g.B.TELEPHONE_NUMBER_REQIRED:(null===(n=this.form.controls.emgrContactNo.errors)||void 0===n?void 0:n.minlength)?g.B.TELEPHONE_NUMBER_NOT_LESS_THAN_7:""}errorEmergencyContactAddress(){var t,n;return(null===(t=this.form.controls.emgrAddress.errors)||void 0===t?void 0:t.required)||(null===(n=this.form.controls.emgrAddress.errors)||void 0===n?void 0:n.minlength)?g.B.ADDRESS_REQUIRED:""}errorLastName(){var t,n;return(null===(t=this.form.controls.lastName.errors)||void 0===t?void 0:t.required)?g.B.LASTNAME_REQUIRED:(null===(n=this.form.controls.lastName.errors)||void 0===n?void 0:n.minlength)?g.B.ABBREVIATION_NOT_REQUIRED:""}errorBirthDate(){var t,n;return(null===(t=this.form.controls.birthDate.errors)||void 0===t?void 0:t.required)?g.B.VALID_DATE_REQUITED:(null===(n=this.form.controls.birthDate.errors)||void 0===n?void 0:n.futureDate)?g.B.VALID_BIRTH_DATE_REQUIRED:""}errorGender(){var t;return(null===(t=this.form.controls.gender.errors)||void 0===t?void 0:t.required)?g.B.GENDER_REQUIRED:""}errorEmail(){var t,n;return(null===(t=this.form.controls.email.errors)||void 0===t?void 0:t.required)||(null===(n=this.form.controls.email.errors)||void 0===n?void 0:n.email)?g.B.EMAIL_REQUIRED:""}errorRace(){var t,n;return(null===(t=this.form.controls.race.errors)||void 0===t?void 0:t.required)?g.B.RACE_REQUIRED:(null===(n=this.form.controls.race.errors)||void 0===n?void 0:n.minlength)?g.B.ABBREVIATION_NOT_REQUIRED:""}errorEthnicity(){var t,n;return(null===(t=this.form.controls.ethnicity.errors)||void 0===t?void 0:t.required)?g.B.ETHNICITY_REQUIRED:(null===(n=this.form.controls.ethnicity.errors)||void 0===n?void 0:n.minlength)?g.B.ABBREVIATION_NOT_REQUIRED:""}errorLanguages(){var t,n;return(null===(t=this.form.controls.langKnown.errors)||void 0===t?void 0:t.required)?g.B.LANGUAGE_REQUIRED:(null===(n=this.form.controls.langKnown.errors)||void 0===n?void 0:n.minlength)?g.B.ABBREVIATION_NOT_REQUIRED:""}errorContactNo(){var t,n;return(null===(t=this.form.controls.contactNo.errors)||void 0===t?void 0:t.required)?g.B.TELEPHONE_NUMBER_REQIRED:(null===(n=this.form.controls.contactNo.errors)||void 0===n?void 0:n.minlength)?g.B.TELEPHONE_NUMBER_NOT_LESS_THAN_7:""}errorAddress(){var t,n;return(null===(t=this.form.controls.address.errors)||void 0===t?void 0:t.required)||(null===(n=this.form.controls.address.errors)||void 0===n?void 0:n.minlength)?g.B.ADDRESS_REQUIRED:""}isFieldInvalid(t){var n,l,a;return!(null===(n=this.form.get(t))||void 0===n?void 0:n.valid)&&(null===(l=this.form.get(t))||void 0===l?void 0:l.touched)||(null===(a=this.form.get(t))||void 0===a?void 0:a.untouched)&&this.formSubmitAttempt}onChangeId(t){console.log("inside onchange : id =aa"),this.patientService.getAllergyById("aa").subscribe(n=>{console.log(n)})}deleteAllergy(t){this.patientService.deleteAllergy(t),this.getAllAllergiesOfPatient(this.patientId)}setOption(t){this.selected=t}addAllergy(){console.log("add allergies");let t={allergyName:this.reactiveForm.get("allergyName").value,allergyType:this.reactiveForm.get("allergyType").value,allergyFatal:this.reactiveForm.get("allergyFatal").value,allergyDesc:this.reactiveForm.get("allergyDesc").value};this.listAllergies.push(t),console.log("listallergies"+this.listAllergies)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(o.qu),e.Y36(o.qu),e.Y36(h.e),e.Y36(d.F0),e.Y36(d.gz),e.Y36(p.uw))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-patient-demographics"]],decls:131,vars:38,consts:[[3,"formGroup","ngSubmit"],["label","PATIENT REGISTRATION"],[1,"heading"],["cellspacing","0",1,"example-full-width"],["hidden","true","formControlName","id",3,"ngModel","ngModelChange"],["aria-label","Select an option","formControlName","title",3,"ngModel","ngModelChange"],["value","Mr."],["value","Mrs."],["value","Ms."],["value","Dr."],[1,"example-full-width"],["matInput","","placeholder","First Name","formControlName","firstName",3,"ngModel","ngModelChange"],[4,"ngIf"],["matInput","","placeholder","Last Name","formControlName","lastName",3,"ngModel","ngModelChange"],["type","date","matInput","","placeholder","Date of Birth","formControlName","birthDate",3,"ngModel","ngModelChange","change"],["matInput","","placeholder","Age","formControlName","age",3,"value","ngModel","ngModelChange"],["aria-label","Select an option","formControlName","gender",3,"ngModel","ngModelChange"],["value","Male"],["value","Female"],["value","Other"],["matInput","","placeholder","Race","maxlength","50","formControlName","race",3,"ngModel","ngModelChange"],["matInput","","placeholder","Ethnicity","formControlName","ethnicity",3,"ngModel","ngModelChange"],["matInput","","placeholder","Language Known","maxlength","50","formControlName","langKnown",3,"ngModel","ngModelChange"],["matInput","","placeholder","Email","formControlName","email",3,"ngModel","ngModelChange"],["matInput","","placeholder","Contact Number","formControlName","contactNo",3,"ngModel","ngModelChange"],["matInput","","placeholder","Home Address","formControlName","address",3,"ngModel","ngModelChange"],["label","EMERGENCY CONTACT DETAILS"],["matInput","","placeholder","First Name","formControlName","emgrFname",3,"ngModel","ngModelChange"],["matInput","","placeholder","Last Name","formControlName","emgrLname",3,"ngModel","ngModelChange"],["appearance","fill"],["formControlName","emgrRelation",3,"ngModel","ngModelChange"],["value","Father"],["value","Mother"],["value","Sibling"],["value","Spouse"],["value","Brother"],["value","Friend"],["matInput","","placeholder","Email","formControlName","emgrEmail",3,"ngModel","ngModelChange"],["matInput","","placeholder","Contact Number","formControlName","emgrPhnumber",3,"ngModel","ngModelChange"],["matInput","","placeholder","Address","formControlName","emgrAddress",3,"ngModel","ngModelChange"],["value","true","color","primary",3,"change"],["value","false","color","warn",3,"checked","change"],[1,"myButtons"],["type","submit",1,"btn","btn-success",2,"margin-right","16px"],["type","reset",1,"btn","btn-danger",2,"margin-right","16px"],["label","ALLERGY"],["value","true","color","primary",3,"change","click"],[1,"container-fluid"],[1,"row"],[1,"col-12"],["type","button",1,"btn","btn-primary",3,"click"],[1,"table","table-striped","table-bordered"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"deleteButton",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(1,"mat-tab-group"),e.TgZ(2,"mat-tab",1),e._UZ(3,"br"),e.TgZ(4,"p",2),e._uU(5,"PATIENT REGISTRATION"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"table",3),e.TgZ(8,"tr"),e.TgZ(9,"input",4),e.NdJ("ngModelChange",function(a){return n.patient.id=a}),e.qZA(),e.TgZ(10,"td"),e.TgZ(11,"mat-radio-group",5),e.NdJ("ngModelChange",function(a){return n.patient.title=a}),e.TgZ(12,"mat-radio-button",6),e._uU(13,"Mr."),e.qZA(),e.TgZ(14,"mat-radio-button",7),e._uU(15,"Mrs."),e.qZA(),e.TgZ(16,"mat-radio-button",8),e._uU(17,"Ms."),e.qZA(),e.TgZ(18,"mat-radio-button",9),e._uU(19,"Dr."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"td"),e.TgZ(21,"mat-form-field",10),e.TgZ(22,"input",11),e.NdJ("ngModelChange",function(a){return n.patient.firstName=a}),e.qZA(),e.YNc(23,U,2,1,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(24,"td"),e.TgZ(25,"mat-form-field",10),e.TgZ(26,"input",13),e.NdJ("ngModelChange",function(a){return n.patient.lastName=a}),e.qZA(),e.YNc(27,R,2,1,"mat-error",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(28,"tr"),e.TgZ(29,"td"),e.TgZ(30,"mat-form-field",10),e.TgZ(31,"input",14),e.NdJ("ngModelChange",function(a){return n.patient.birthDate=a})("change",function(){return n.ageCalculator()}),e.qZA(),e.YNc(32,O,2,1,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(33,"td"),e.TgZ(34,"mat-form-field",10),e.TgZ(35,"input",15),e.NdJ("ngModelChange",function(a){return n.patient.age=a}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(36,"td"),e.TgZ(37,"mat-radio-group",16),e.NdJ("ngModelChange",function(a){return n.patient.gender=a}),e.TgZ(38,"mat-radio-button",17),e._uU(39,"Male"),e.qZA(),e.TgZ(40,"mat-radio-button",18),e._uU(41,"Female"),e.qZA(),e.TgZ(42,"mat-radio-button",19),e._uU(43,"Other"),e.qZA(),e.YNc(44,L,2,1,"mat-error",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(45,"tr"),e.TgZ(46,"td"),e.TgZ(47,"mat-form-field",10),e.TgZ(48,"input",20),e.NdJ("ngModelChange",function(a){return n.patient.race=a}),e.qZA(),e.YNc(49,J,2,1,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(50,"td"),e.TgZ(51,"mat-form-field",10),e.TgZ(52,"input",21),e.NdJ("ngModelChange",function(a){return n.patient.ethnicity=a}),e.qZA(),e.YNc(53,Q,2,1,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(54,"td"),e.TgZ(55,"mat-form-field",10),e.TgZ(56,"input",22),e.NdJ("ngModelChange",function(a){return n.patient.langKnown=a}),e.qZA(),e.YNc(57,w,2,1,"mat-error",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(58,"tr"),e.TgZ(59,"td"),e.TgZ(60,"mat-form-field",10),e.TgZ(61,"input",23),e.NdJ("ngModelChange",function(a){return n.patient.email=a}),e.qZA(),e.YNc(62,F,2,1,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(63,"td"),e.TgZ(64,"mat-form-field",10),e.TgZ(65,"input",24),e.NdJ("ngModelChange",function(a){return n.patient.contactNo=a}),e.qZA(),e.YNc(66,B,2,1,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(67,"td"),e.TgZ(68,"mat-form-field",10),e.TgZ(69,"textarea",25),e.NdJ("ngModelChange",function(a){return n.patient.address=a}),e.qZA(),e.YNc(70,S,2,1,"mat-error",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(71,"mat-tab",26),e._UZ(72,"br"),e.TgZ(73,"p",2),e._uU(74,"EMERGENCY CONTACT DETAILS"),e.qZA(),e._UZ(75,"br"),e.TgZ(76,"table",3),e.TgZ(77,"tr"),e.TgZ(78,"td"),e.TgZ(79,"mat-form-field",10),e.TgZ(80,"input",27),e.NdJ("ngModelChange",function(a){return n.patient.emgrFname=a}),e.qZA(),e.YNc(81,Y,2,1,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(82,"td"),e.TgZ(83,"mat-form-field",10),e.TgZ(84,"input",28),e.NdJ("ngModelChange",function(a){return n.patient.emgrLname=a}),e.qZA(),e.YNc(85,k,2,1,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(86,"td"),e.TgZ(87,"mat-form-field",29),e.TgZ(88,"mat-label"),e._uU(89,"Relationship"),e.qZA(),e.TgZ(90,"mat-select",30),e.NdJ("ngModelChange",function(a){return n.patient.emgrRelation=a}),e.TgZ(91,"mat-option"),e._uU(92,"None"),e.qZA(),e.TgZ(93,"mat-option",31),e._uU(94,"Father"),e.qZA(),e.TgZ(95,"mat-option",32),e._uU(96,"Mother"),e.qZA(),e.TgZ(97,"mat-option",33),e._uU(98,"Sibling"),e.qZA(),e.TgZ(99,"mat-option",34),e._uU(100,"Spouse"),e.qZA(),e.TgZ(101,"mat-option",35),e._uU(102,"Brother"),e.qZA(),e.TgZ(103,"mat-option",36),e._uU(104,"Friend"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(105,"tr"),e.TgZ(106,"td"),e.TgZ(107,"mat-form-field",10),e.TgZ(108,"input",37),e.NdJ("ngModelChange",function(a){return n.patient.emgrEmail=a}),e.qZA(),e.YNc(109,H,2,1,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(110,"td"),e.TgZ(111,"mat-form-field",10),e.TgZ(112,"input",38),e.NdJ("ngModelChange",function(a){return n.patient.emgrPhnumber=a}),e.qZA(),e.YNc(113,j,2,1,"mat-error",12),e.qZA(),e.qZA(),e.TgZ(114,"td"),e.TgZ(115,"mat-form-field",10),e.TgZ(116,"textarea",39),e.NdJ("ngModelChange",function(a){return n.patient.emgrAddress=a}),e.qZA(),e.YNc(117,G,2,1,"mat-error",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(118,"h2"),e._uU(119,"Do you need access to patient portal?"),e.qZA(),e.TgZ(120,"mat-radio-group"),e.TgZ(121,"mat-radio-button",40),e.NdJ("change",function(){return n.isDisableAllergyTab=!0}),e._uU(122,"Yes"),e.qZA(),e.TgZ(123,"mat-radio-button",41),e.NdJ("change",function(){return n.isDisableAllergyTab=!1}),e._uU(124,"No"),e.qZA(),e.qZA(),e.qZA(),e.YNc(125,V,15,2,"span",12),e.qZA(),e.TgZ(126,"div",42),e.TgZ(127,"button",43),e._uU(128," SUBMIT "),e.qZA(),e.TgZ(129,"button",44),e._uU(130," Clear "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",n.form),e.xp6(9),e.Q6J("ngModel",n.patient.id),e.xp6(2),e.Q6J("ngModel",n.patient.title),e.xp6(11),e.Q6J("ngModel",n.patient.firstName),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("firstName")),e.xp6(3),e.Q6J("ngModel",n.patient.lastName),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("lastName")),e.xp6(4),e.Q6J("ngModel",n.patient.birthDate),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("birthDate")),e.xp6(3),e.s9C("value",n.showAge),e.Q6J("ngModel",n.patient.age),e.xp6(2),e.Q6J("ngModel",n.patient.gender),e.xp6(7),e.Q6J("ngIf",n.isFieldInvalid("gender")),e.xp6(4),e.Q6J("ngModel",n.patient.race),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("race")),e.xp6(3),e.Q6J("ngModel",n.patient.ethnicity),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("ethnicity")),e.xp6(3),e.Q6J("ngModel",n.patient.langKnown),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("langKnown")),e.xp6(4),e.Q6J("ngModel",n.patient.email),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("email")),e.xp6(3),e.Q6J("ngModel",n.patient.contactNo),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("contactNo")),e.xp6(3),e.Q6J("ngModel",n.patient.address),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("address")),e.xp6(10),e.Q6J("ngModel",n.patient.emgrFname),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("emgrFname")),e.xp6(3),e.Q6J("ngModel",n.patient.emgrLname),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("emgrLname")),e.xp6(5),e.Q6J("ngModel",n.patient.emgrRelation),e.xp6(18),e.Q6J("ngModel",n.patient.emgrEmail),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("emgrEmail")),e.xp6(3),e.Q6J("ngModel",n.patient.emgrPhnumber),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("emgrPhnumber")),e.xp6(3),e.Q6J("ngModel",n.patient.emgrAddress),e.xp6(1),e.Q6J("ngIf",n.isFieldInvalid("emgrAddress")),e.xp6(6),e.Q6J("checked",!0),e.xp6(2),e.Q6J("ngIf",n.isDisableAllergyTab))},directives:[o._Y,o.JL,o.sg,_.SP,_.uX,o.Fj,o.JJ,o.u,f.VQ,f.U0,u.KE,I.Nt,c.O5,o.nD,u.hX,Z.gD,q.ey,u.TO,c.sg,A.Hw],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}td[_ngcontent-%COMP%]{padding-right:16px;width:2px}.classEmergency[_ngcontent-%COMP%]{margin-left:20%}.top-padding[_ngcontent-%COMP%]{padding-top:3px}.margin-left[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]:not(:first-child){margin-left:10px}.form-container[_ngcontent-%COMP%]{margin:80px}.patient-form[_ngcontent-%COMP%]{width:40%}.radioButton[_ngcontent-%COMP%]{text-align:center}mat-tab-group[_ngcontent-%COMP%]{text-align:center}mat-error[_ngcontent-%COMP%]{size:1px}.heading[_ngcontent-%COMP%]{color:#1a41c0;size:4px;font-size:20px}mat-card[_ngcontent-%COMP%]{max-width:80%;margin:1em auto;background-color:#fff}.mat-card[_ngcontent-%COMP%]{width:500px;display:block;margin-left:auto;margin-right:auto;text-align:center;padding-top:20px}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.myButtons[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{font-size:small;text-align:center}.deleteButton[_ngcontent-%COMP%]{cursor:pointer}"],changeDetection:0}),r})();var T=s(9692),m=s(2091),y=s(1095);function X(r,i){1&r&&(e.TgZ(0,"th",13),e._uU(1,"Patient ID"),e.qZA())}function W(r,i){if(1&r&&(e.TgZ(0,"td",14),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.Oqu(t.id)}}function ee(r,i){1&r&&(e.TgZ(0,"th",13),e._uU(1,"First Name"),e.qZA())}function te(r,i){if(1&r&&(e.TgZ(0,"td",14),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.Oqu(t.firstName)}}function ne(r,i){1&r&&(e.TgZ(0,"th",13),e._uU(1,"Last Name"),e.qZA())}function re(r,i){if(1&r&&(e.TgZ(0,"td",14),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.Oqu(t.lastName)}}function oe(r,i){1&r&&(e.TgZ(0,"th",13),e._uU(1,"Email"),e.qZA())}function ie(r,i){if(1&r&&(e.TgZ(0,"td",14),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.Oqu(t.email)}}function ae(r,i){1&r&&(e.TgZ(0,"th",13),e._uU(1,"Action"),e.qZA())}function le(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"td",15),e.TgZ(1,"button",16),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw().editData(a.id)}),e.TgZ(2,"mat-icon"),e._uU(3,"edit"),e.qZA(),e.qZA(),e.qZA()}}function se(r,i){1&r&&e._UZ(0,"tr",17)}function ge(r,i){1&r&&e._UZ(0,"tr",18)}const me=function(){return[5,10,20]};const ce=[{path:"patientList",component:(()=>{class r{constructor(t,n){this.patientService=t,this.router=n,this.PATIENT_DATA=[],this.displayedColumns=["patient ID","First Name","Last Name","Email","Action"]}ngOnInit(){this.patientService.getAllPatient().subscribe(t=>{this.dataSource=new m.by(t),console.log(this.dataSource)}),console.log("patient data :"+this.PATIENT_DATA)}ngAfterViewInit(){this.dataSource.paginator=this.paginator}editData(t){console.log(t),this.router.navigate(["/patient/patientDemographics/"+t])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(h.e),e.Y36(d.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-patient-list"]],viewQuery:function(t,n){if(1&t&&e.Gf(T.NW,5),2&t){let l;e.iGM(l=e.CRH())&&(n.paginator=l.first)}},decls:23,vars:5,consts:[[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","patient ID"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","First Name"],["matColumnDef","Last Name"],["matColumnDef","Email"],["matColumnDef","Action"],["mat-cell","","class","action-link",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"action-link"],["mat-icon-button","","matTooltip","Click to Edit",1,"iconbutton",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,n){1&t&&(e.TgZ(0,"h2"),e._uU(1,"PATIENT LIST"),e.qZA(),e._UZ(2,"br"),e.TgZ(3,"div",0),e.TgZ(4,"table",1),e.ynx(5,2),e.YNc(6,X,2,0,"th",3),e.YNc(7,W,2,1,"td",4),e.BQk(),e.ynx(8,5),e.YNc(9,ee,2,0,"th",3),e.YNc(10,te,2,1,"td",4),e.BQk(),e.ynx(11,6),e.YNc(12,ne,2,0,"th",3),e.YNc(13,re,2,1,"td",4),e.BQk(),e.ynx(14,7),e.YNc(15,oe,2,0,"th",3),e.YNc(16,ie,2,1,"td",4),e.BQk(),e.ynx(17,8),e.YNc(18,ae,2,0,"th",3),e.YNc(19,le,4,0,"td",9),e.BQk(),e.YNc(20,se,1,0,"tr",10),e.YNc(21,ge,1,0,"tr",11),e.qZA(),e._UZ(22,"mat-paginator",12),e.qZA()),2&t&&(e.xp6(4),e.Q6J("dataSource",n.dataSource),e.xp6(16),e.Q6J("matHeaderRowDef",n.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(4,me)))},directives:[m.BZ,m.w1,m.fO,m.Dz,m.as,m.nj,T.NW,m.ge,m.ev,y.lW,A.Hw,m.XQ,m.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}h2[_ngcontent-%COMP%]{text-align:center}"]}),r})()},{path:"patientDemographics/:id",component:$}];let ue=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[d.Bz.forChild(ce)],d.Bz]}),r})();var pe=s(2522),he=s(3017),_e=s(1769),fe=s(1554),Ze=s(8341),Ae=s(1494),Te=s(3738),Ce=s(4929),ve=s(9243),Ne=s(7539),Ie=s(3220),qe=s(1841);let ye=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.ez,ue,qe.JF,pe.g0,he.SJ,y.ot,A.Ps,_e.t,fe.Bb,Ae.JX,T.TU,m.p0,u.lN,I.c,Z.LD,Te.QW,_.Nh,Ce.N6,ve.Cl,f.Fk,Ie.FA,q.XK,Ze.Hi,o.u5,Z.LD,Ne.p9,o.UX]]}),r})()}}]);