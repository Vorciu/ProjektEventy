import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'kontakt.html',
  styleUrls: ['kontakt.css']
})
export class kontaktComponent implements OnInit {

  name;
  email;
  message;

  constructor() {}

  ngOnInit() {}

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  }

  
  
}
