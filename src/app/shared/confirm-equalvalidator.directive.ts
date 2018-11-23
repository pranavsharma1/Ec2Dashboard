import {Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';
import {Directive, Input, Attribute} from '@angular/core';

@Directive({
  selector:'[appConfirmEqualvalidator]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualvalidatorDirective,
    multi: true
  }]
})

export class ConfirmEqualvalidatorDirective implements Validator{
  @Input() appConfirmEqualvalidator:string;

  validate(control: AbstractControl): {[key:string]: any} | null{
    const controlToCompare = control.parent.get(this.appConfirmEqualvalidator);
    if(controlToCompare && controlToCompare.value !== control.value){
      return {
        'notEqual': true
      };
    }
    return null;
  }
}
