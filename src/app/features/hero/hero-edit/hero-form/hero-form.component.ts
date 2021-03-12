import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { HeroForm } from './hero-form.model';

@Component({
  selector: 'toh-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  @Output() valueChange = new EventEmitter<HeroForm>();

  private destroy$ = new Subject<any>();
  private lastAbilityTouched$: Observable<void>;

  constructor(private builder: FormBuilder) {
    this.form = builder.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      about: [null, [Validators.required, Validators.minLength(50), Validators.maxLength(255)]],
      alterEgo: builder.group({
        firstName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
        lastName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      }),
      stats: builder.group({
        durability: [0],
        energy: [0],
        fighting: [0],
        intelligence: [0],
        speed: [0],
        strength: [0],
      }),
      abilities: builder.array([]),
    });
    this.lastAbilityTouched$ = this.abilities.valueChanges.pipe(
      map(() => this.abilities.at(this.abilities.length - 1)),
      switchMap(group => group.statusChanges.pipe(map(() => group.touched))),
      map(() => {}),
    );
  }

  get abilities(): FormArray {
    return this.form.get('abilities') as FormArray;
  }

  @Input()
  set value(val: HeroForm | null) {
    this.form.patchValue(val ?? {});
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.addAbility();
    this.lastAbilityTouched$.pipe(takeUntil(this.destroy$)).subscribe(() => this.addAbility());
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => this.valueChange.emit(value));
  }

  onRemoveAbility(index: number): void {
    this.abilities.removeAt(index);
  }

  private addAbility(): void {
    this.abilities.push(
      this.builder.group({
        name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        description: [null, [Validators.required, Validators.minLength(50), Validators.maxLength(255)]],
      }),
    );
  }
}
