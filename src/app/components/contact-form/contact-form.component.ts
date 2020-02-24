import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient, HttpParams } from '@angular/common/http'

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })
  showErrorState = false

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    if (!this.contactForm.valid) {
      this.showErrorState = true
    } else {
      this.showErrorState = false
      const body = new HttpParams()
        .set('form-name', 'contact')
        .append('name', this.contactForm.value.name)
        .append('email', this.contactForm.value.email)
        .append('phone', this.contactForm.value.phone)
        .append('message', this.contactForm.value.message)
      this.http
        .post('/', body.toString(), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .subscribe(
          () => {},
          err => {
            if (err instanceof ErrorEvent) {
              //client side error
              alert('Something went wrong when sending your message.')
              console.log(err.error.message)
            } else {
              //backend error. If status is 200, then the message successfully sent
              if (err.status === 200) {
                alert('Your message has been sent!')
              } else {
                alert('Something went wrong when sending your message.')
                console.log('Error status:')
                console.log(err.status)
                console.log('Error body:')
                console.log(err.error)
              }
            }
          }
        )
    }
  }
}
