import { ChangeDetectionStrategy, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { HeroForm, HeroFormAbility } from './hero-form.model';

@Component({
  selector: 'toh-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HeroFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => HeroFormComponent),
      multi: true,
    },
  ],
})
export class HeroFormComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
  form: FormGroup;

  get abilities(): FormArray {
    return this.form.get('abilities') as FormArray;
  }

  get value(): HeroForm {
    return this.form.value;
  }

  set value(val: HeroForm) {
    this.form.patchValue(val);
    this.onChange(this.value);
    this.onTouched();
    this.abilities.clear();
    val.abilities?.forEach(ability => this.addAbility(ability));
    this.addAbility();
  }

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
      filter(last => !!last),
      switchMap(last => last.statusChanges.pipe(map(() => last))),
      filter(last => last.dirty),
      map(() => {}),
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.onChange(this.value);
        this.onTouched();
      },
    });
    this.lastAbilityTouched$.pipe(takeUntil(this.destroy$)).subscribe({ next: () => this.addAbility() });
  }

  onRemoveAbility(index: number): void {
    this.abilities.removeAt(index);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(_: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null : { hero: { valid: false } };
  }

  writeValue(obj: any): void {
    if (obj) {
      this.value = {
        name: obj.name ?? null,
        about: obj.about ?? null,
        alterEgo: { firstName: obj.alterEgo?.firstName ?? null, lastName: obj.alterEgo?.lastName ?? null },
        stats: {
          durability: obj.stats?.durability ?? 0,
          energy: obj.stats?.energy ?? 0,
          fighting: obj.stats?.fighting ?? 0,
          intelligence: obj.stats?.intelligence ?? 0,
          speed: obj.stats?.speed ?? 0,
          strength: obj.stats?.strength ?? 0,
        },
        abilities:
          obj.abilities?.map((a: HeroFormAbility) => ({
            name: a?.name ?? null,
            description: a?.description ?? null,
          })) ?? [],
      };
    } else this.form.reset();
  }

  private addAbility(value?: HeroFormAbility): void {
    this.abilities.push(
      this.builder.group({
        name: [value?.name ?? null, [Validators.minLength(3), Validators.maxLength(50)]],
        description: [value?.description ?? null, [Validators.minLength(50), Validators.maxLength(255)]],
      }),
    );
  }

  private onChange = (value: HeroForm) => {};
  private onTouched = () => {};
}
