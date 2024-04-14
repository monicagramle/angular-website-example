import { Component, Input } from '@angular/core';
import { Plan } from '../models/plan.model';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-pricing-block',
    templateUrl: './pricing-block.component.html',
    standalone: true,
    imports: [NgFor]
})
export class PricingBlockComponent {
	@Input() plan: Plan;
}
