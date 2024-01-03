import {Injectable} from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})

export class UIHelper {
  public scrollToTop(): void {
    // tslint:disable-next-line:variable-name
    const _topInterval = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20);
      } else {
          window.clearInterval(_topInterval);
      }
    }, 16);
  }

  public successSave(toastr: ToastrService, title: string, msg: string): void {
    toastr.success(msg, title);
    this.scrollToTop();
  }

  public getEditorConfig() {
    return {
      editable: true,
      spellcheck: true,
      height: '10rem',
      minHeight: '5rem',
      placeholder: 'Enter text here...',
      translate: 'no',
      uploadUrl: 'v1/images', // if needed
      customClasses: [ // optional
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ]
    };
  }
}
