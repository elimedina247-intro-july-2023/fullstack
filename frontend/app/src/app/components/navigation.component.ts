import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

 

@Component({
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    template: `
<nav class="tabs tabs-boxed">
<a [routerLinkActive]="['tab-active']" routerLink="dashboard" class="tab tab-lg">Dashboard</a> 
<a [routerLinkActive]="['tab-active']" routerLink="about" class="tab tab-lg">About</a> 
</nav>`,
    selector: 'app-navigation'
})
export class NavigationComponent {

 

}