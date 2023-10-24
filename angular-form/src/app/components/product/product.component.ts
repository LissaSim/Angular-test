import {Component} from "@angular/core";
import { FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class  ProductComponent{
  password: string = '';
  passwordChecked: boolean = false;
  passwordStrength: string = '';

  checkPassword(form: any) {
    const password =  this.password,
      categories = {
       lowercase : "qwertyuiopasdfghjklzxcvbnm",
       uppercase : "QWERTYUIOPLKJHGFDSAZXCVBNM",
       digits : "0123456789",
       specials : "!@#$%^&*()_-+=\|/.,:;[]{}",
    }

    let rating = 0,
    text = "";

    for (let i = 0; i < password.length; i++) {
      for (let category of Object.keys(categories)) {
        if (!rating && category.includes(password[i])) {
          rating++;
        }
      }
    }

    if (password.length < 6) {
      text = rating < 3 ? 'Easy' : 'Medium';
    } else if (password.length >= 8) {
      text = rating < 3 ? 'Medium' : 'Hard';
    } else {
      text = rating === 1 ? 'Easy' : 'Medium';
    }

    this.passwordStrength = text;
    this.passwordChecked = true;
  }

}
