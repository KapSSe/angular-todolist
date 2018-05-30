import { trigger, state, transition, style, animate } from '@angular/animations';

export const fade = trigger('fade', [
    state('void', style({opacity: 0, transform: 'translateY(-30px)'})),
    transition('void <=> *', [
      animate(400)
    ]),
]);
