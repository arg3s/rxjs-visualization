import { Component } from '@angular/core';

@Component({
  selector: 'arges-root',
  template: `
    <nav mat-tab-nav-bar [backgroundColor]="'primary'">
      <a mat-tab-link *ngFor="let link of subjectsLinks"
         (click)="activeLink = link.link"
         [active]="activeLink== link.link"
         routerLink="{{link.link}}">
        {{link.description}}
      </a>

      <a mat-tab-link *ngFor="let link of operatorsLinks"
         (click)="activeLink = link.link"
         [active]="activeLink== link.link"
         routerLink="{{link.link}}">
        {{link.description}}
      </a>
    </nav>
    <div class="body">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  activeLink: string;

  subjectsLinks = [{ link: 'subject', description: 'Subject' },
    { link: 'behavior-subject', description: 'BehaviorSubject' },
    { link: 'replay-subject', description: 'ReplaySubject' },
    { link: 'async-subject', description: 'AsyncSubject' }];

  operatorsLinks = [{ link: 'share-replay', description: 'Share Replay' },
    { link: 'combine-latest', description: 'Combine Latest' },
    { link: 'with-latest-from', description: 'With Latest From' },
    { link: 'merge', description: 'Merge' }];
}
