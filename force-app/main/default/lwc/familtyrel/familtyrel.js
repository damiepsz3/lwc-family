import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Contact.Home_Brother_Stepbrother__c',
    'Contact.Home_Father__c',
    'Contact.Home_Grandfather__c',
    'Contact.Home_Mother__c',
    'Contact.Home_Other__c',
    'Contact.Home_Other_Relationship__c',
    'Contact.Home_Sister_Stepsister__c',
    'Contact.Home_Stepfather__c',
    'Contact.Home_Stepmother__c',
];

export default class Familtyrel extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    contact;

    get brothers() {
        const bro = this.contact.data.fields.Home_Brother_Stepbrother__c.value
        if (bro) return bro 
        return 0;
    }

    get father() {
        const dad = this.contact.data.fields.Home_Father__c.value;
        if(dad) return dad
        return 0;
    }

    get grandFather() {
        const gF = this.contact.data.fields.Home_Grandfather__c.value;
        if(gF) return gF;
        return 0
    }

    get mother() {
        const mom = this.contact.data.fields.Home_Mother__c.value;
        if(mom) return mom;
        return 0
    }
    
    get other() {
        const other = this.contact.data.fields.Home_Other__c.value;
        if(other) return other
        return 0
    }

    get otherRel() {
        const otherRel = this.contact.data.fields.Home_Other_Relationship__c.value;
        if (otherRel) return otherRel
        return 0
        
    }

    get sisters() {
        const sisters = this.contact.data.fields.Home_Sister_Stepsister__c.value;
        if (sisters) return sisters
        return 0
    }

    get stepDad() {
        const stepDad = this.contact.data.fields.Home_Stepfather__c.value;
        if (stepDad) return stepDad
        return 0
    }

    get stepMom() {
        const stepMom = this.contact.data.fields.Home_Stepmother__c.value;
        if(stepMom) return stepMom
        return 0;
    }

}