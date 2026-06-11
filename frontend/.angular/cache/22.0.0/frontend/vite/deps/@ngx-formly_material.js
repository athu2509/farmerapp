import {
  MAT_INPUT_VALUE_ACCESSOR,
  MatInput,
  MatInputModule
} from "./chunk-XR4V4B3U.js";
import {
  FieldType,
  FieldWrapper,
  FormlyModule,
  LegacyFormlyAttributes,
  LegacyFormlyValidationMessage,
  defineHiddenProp,
  observe
} from "./chunk-SKYJJWMC.js";
import {
  MatOptgroup,
  MatOption,
  MatPseudoCheckbox,
  MatPseudoCheckboxModule,
  MatSelect,
  MatSelectModule
} from "./chunk-G3GMECNZ.js";
import {
  UniqueSelectionDispatcher
} from "./chunk-DXDI3XQW.js";
import "./chunk-PMDCYKME.js";
import {
  MatFormFieldModule
} from "./chunk-TFBZCTKD.js";
import {
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-BT42DQIS.js";
import "./chunk-ALD4YUBN.js";
import {
  MatRipple,
  MatRippleModule,
  _StructuralStylesLoader
} from "./chunk-6WQ2XT6Z.js";
import "./chunk-CABFQQZ5.js";
import {
  FocusMonitor,
  _IdGenerator,
  _animationsDisabled
} from "./chunk-JMBDXKRT.js";
import "./chunk-AIEYJCOW.js";
import "./chunk-X466PT7O.js";
import "./chunk-RW5PVW4X.js";
import "./chunk-NDV363T5.js";
import "./chunk-JUQZRFTT.js";
import "./chunk-GWBU7KI5.js";
import {
  CdkTextareaAutosize
} from "./chunk-JKLN57ZK.js";
import {
  _CdkPrivateStyleLoader
} from "./chunk-7MOTNJ4E.js";
import "./chunk-LJBM4ZXK.js";
import "./chunk-GUGIMSVJ.js";
import "./chunk-XU7FPM5T.js";
import "./chunk-J7LWRTDH.js";
import "./chunk-DUYAR64Z.js";
import {
  DefaultValueAccessor,
  FormControlDirective,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator
} from "./chunk-LNAMDIP7.js";
import {
  AsyncPipe,
  CommonModule,
  NgTemplateOutlet
} from "./chunk-4MXVRIX3.js";
import "./chunk-WWJ3HC46.js";
import {
  BidiModule
} from "./chunk-EX7ANTYC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NO_ERRORS_SCHEMA,
  NgModule,
  NgZone,
  Output,
  Pipe,
  Renderer2,
  Service,
  Type,
  Version,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdefineService,
  ɵɵdirectiveInject,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-B2SFKEE4.js";
import {
  BehaviorSubject,
  Observable,
  Subject,
  __spreadProps,
  __spreadValues,
  filter,
  map,
  tap
} from "./chunk-3EKC2WDX.js";

// node_modules/@ngx-formly/material/fesm2022/ngx-formly-material-form-field.mjs
var _c0 = (a0) => ({
  field: a0
});
var _c1 = (a0) => ({
  content: a0
});
function FormlyWrapperFormField_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtext(1, "*");
    ɵɵelementEnd();
  }
}
function FormlyWrapperFormField_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-label");
    ɵɵtext(1);
    ɵɵconditionalCreate(2, FormlyWrapperFormField_Conditional_3_Conditional_2_Template, 2, 0, "span", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.props.label, " ");
    ɵɵadvance();
    ɵɵconditional(ctx_r0.props.required && ctx_r0.props.hideRequiredMarker !== true ? 2 : -1);
  }
}
function FormlyWrapperFormField_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.props.textPrefix)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r0.field));
  }
}
function FormlyWrapperFormField_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.props.prefix)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r0.field));
  }
}
function FormlyWrapperFormField_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.props.textSuffix)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r0.field));
  }
}
function FormlyWrapperFormField_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.props.suffix)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r0.field));
  }
}
function FormlyWrapperFormField_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-hint");
    ɵɵelementContainer(1, 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const stringOrTemplate_r2 = ɵɵreference(13);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", stringOrTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx));
  }
}
function FormlyWrapperFormField_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-hint", 8);
    ɵɵelementContainer(1, 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const stringOrTemplate_r2 = ɵɵreference(13);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", stringOrTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx));
  }
}
function FormlyWrapperFormField_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const content_r3 = ɵɵnextContext().content;
    ɵɵadvance();
    ɵɵtextInterpolate(content_r3);
  }
}
function FormlyWrapperFormField_ng_template_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 10);
  }
  if (rf & 2) {
    const content_r3 = ɵɵnextContext().content;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", content_r3)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r0.field));
  }
}
function FormlyWrapperFormField_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, FormlyWrapperFormField_ng_template_12_Conditional_0_Template, 2, 1, "ng-container")(1, FormlyWrapperFormField_ng_template_12_Conditional_1_Template, 1, 4, "ng-container", 10);
  }
  if (rf & 2) {
    const content_r3 = ctx.content;
    ɵɵconditional(!content_r3.createEmbeddedView ? 0 : 1);
  }
}
var _c2 = ["matPrefix"];
var _c3 = ["matTextPrefix"];
var _c4 = ["matSuffix"];
var _c5 = ["matTextSuffix"];
var FormlyWrapperFormField = class _FormlyWrapperFormField extends FieldWrapper {
  constructor(renderer, elementRef, focusMonitor) {
    super();
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.focusMonitor = focusMonitor;
  }
  ngOnInit() {
    defineHiddenProp(this.field, "_formField", this.formField);
    this.focusMonitor.monitor(this.elementRef, true).subscribe((origin) => {
      if (!origin && this.field.focus) {
        this.field.focus = false;
      }
    });
  }
  ngAfterViewInit() {
    if (this.formField.appearance !== "outline" && this.props.hideFieldUnderline === true) {
      const underlineElement = this.formField._elementRef.nativeElement.querySelector(".mat-form-field-underline");
      underlineElement && this.renderer.removeChild(underlineElement.parentNode, underlineElement);
    }
  }
  ngOnDestroy() {
    delete this.field._formField;
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
  static {
    this.ɵfac = function FormlyWrapperFormField_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormlyWrapperFormField)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusMonitor));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormlyWrapperFormField,
      selectors: [["formly-wrapper-mat-form-field"]],
      viewQuery: function FormlyWrapperFormField_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(MatFormField, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formField = _t.first);
        }
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 14,
      vars: 13,
      consts: [["fieldComponent", ""], ["stringOrTemplate", ""], [3, "hideRequiredMarker", "floatLabel", "appearance", "subscriptSizing", "color"], ["matTextPrefix", "", 3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["matPrefix", "", 3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["matTextSuffix", "", 3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["matSuffix", "", 3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "field"], ["align", "end"], ["aria-hidden", "true", 1, "mat-form-field-required-marker", "mat-mdc-form-field-required-marker"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function FormlyWrapperFormField_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "mat-form-field", 2);
          ɵɵelementContainer(1, null, 0);
          ɵɵconditionalCreate(3, FormlyWrapperFormField_Conditional_3_Template, 3, 2, "mat-label");
          ɵɵconditionalCreate(4, FormlyWrapperFormField_Conditional_4_Template, 1, 4, "ng-container", 3);
          ɵɵconditionalCreate(5, FormlyWrapperFormField_Conditional_5_Template, 1, 4, "ng-container", 4);
          ɵɵconditionalCreate(6, FormlyWrapperFormField_Conditional_6_Template, 1, 4, "ng-container", 5);
          ɵɵconditionalCreate(7, FormlyWrapperFormField_Conditional_7_Template, 1, 4, "ng-container", 6);
          ɵɵelementStart(8, "mat-error");
          ɵɵelement(9, "formly-validation-message", 7);
          ɵɵelementEnd();
          ɵɵconditionalCreate(10, FormlyWrapperFormField_Conditional_10_Template, 2, 4, "mat-hint");
          ɵɵconditionalCreate(11, FormlyWrapperFormField_Conditional_11_Template, 2, 4, "mat-hint", 8);
          ɵɵelementEnd();
          ɵɵtemplate(12, FormlyWrapperFormField_ng_template_12_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          let tmp_13_0;
          let tmp_14_0;
          ɵɵproperty("hideRequiredMarker", true)("floatLabel", ctx.props.floatLabel)("appearance", ctx.props.appearance)("subscriptSizing", ctx.props.subscriptSizing)("color", ctx.props.color ?? "primary");
          ɵɵadvance(3);
          ɵɵconditional(ctx.props.label && ctx.props.hideLabel !== true ? 3 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.props.textPrefix ? 4 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.props.prefix ? 5 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.props.textSuffix ? 6 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.props.suffix ? 7 : -1);
          ɵɵadvance(2);
          ɵɵproperty("field", ctx.field);
          ɵɵadvance();
          ɵɵconditional((tmp_13_0 = ctx.props.description || ctx.props.hintStart) ? 10 : -1, tmp_13_0);
          ɵɵadvance();
          ɵɵconditional((tmp_14_0 = ctx.props.hintEnd) ? 11 : -1, tmp_14_0);
        }
      },
      dependencies: [NgTemplateOutlet, MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, LegacyFormlyValidationMessage],
      styles: ["formly-wrapper-mat-form-field .mat-mdc-form-field,formly-wrapper-mat-form-field .mat-form-field{width:100%}\n"],
      encapsulation: 2,
      changeDetection: 1
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyWrapperFormField, [{
    type: Component,
    args: [{
      selector: "formly-wrapper-mat-form-field",
      template: `
    <!-- fix https://github.com/angular/material2/pull/7083 by setting width to 100% -->
    <mat-form-field
      [hideRequiredMarker]="true"
      [floatLabel]="props.floatLabel"
      [appearance]="props.appearance"
      [subscriptSizing]="props.subscriptSizing"
      [color]="props.color ?? 'primary'"
    >
      <ng-container #fieldComponent></ng-container>
      @if (props.label && props.hideLabel !== true) {
        <mat-label>
          {{ props.label }}
          @if (props.required && props.hideRequiredMarker !== true) {
            <span aria-hidden="true" class="mat-form-field-required-marker mat-mdc-form-field-required-marker">*</span>
          }
        </mat-label>
      }

      @if (props.textPrefix) {
        <ng-container
          matTextPrefix
          [ngTemplateOutlet]="props.textPrefix"
          [ngTemplateOutletContext]="{ field: field }"
        ></ng-container>
      }

      @if (props.prefix) {
        <ng-container
          matPrefix
          [ngTemplateOutlet]="props.prefix"
          [ngTemplateOutletContext]="{ field: field }"
        ></ng-container>
      }

      @if (props.textSuffix) {
        <ng-container
          matTextSuffix
          [ngTemplateOutlet]="props.textSuffix"
          [ngTemplateOutletContext]="{ field: field }"
        ></ng-container>
      }

      @if (props.suffix) {
        <ng-container
          matSuffix
          [ngTemplateOutlet]="props.suffix"
          [ngTemplateOutletContext]="{ field: field }"
        ></ng-container>
      }

      <mat-error>
        <formly-validation-message [field]="field"></formly-validation-message>
      </mat-error>

      @if (props.description || props.hintStart; as hint) {
        <mat-hint>
          <ng-container [ngTemplateOutlet]="stringOrTemplate" [ngTemplateOutletContext]="{ content: hint }">
          </ng-container>
        </mat-hint>
      }

      @if (props.hintEnd; as hintEnd) {
        <mat-hint align="end">
          <ng-container [ngTemplateOutlet]="stringOrTemplate" [ngTemplateOutletContext]="{ content: hintEnd }">
          </ng-container>
        </mat-hint>
      }
    </mat-form-field>

    <ng-template #stringOrTemplate let-content="content">
      @if (!content.createEmbeddedView) {
        <ng-container>{{ content }}</ng-container>
      } @else {
        <ng-container [ngTemplateOutlet]="content" [ngTemplateOutletContext]="{ field: field }"></ng-container>
      }
    </ng-template>
  `,
      encapsulation: ViewEncapsulation.None,
      styles: ["formly-wrapper-mat-form-field .mat-mdc-form-field,formly-wrapper-mat-form-field .mat-form-field{width:100%}\n"]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: FocusMonitor
  }], {
    formField: [{
      type: ViewChild,
      args: [MatFormField, {
        static: true
      }]
    }]
  });
})();
function withFormlyFormField() {
  return {
    wrappers: [{
      name: "form-field",
      component: FormlyWrapperFormField
    }]
  };
}
var FormlyMatFormFieldModule = class _FormlyMatFormFieldModule {
  static {
    this.ɵfac = function FormlyMatFormFieldModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormlyMatFormFieldModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FormlyMatFormFieldModule,
      declarations: [FormlyWrapperFormField],
      imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, FormlyModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, FormlyModule.forChild(withFormlyFormField())]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyMatFormFieldModule, [{
    type: NgModule,
    args: [{
      declarations: [FormlyWrapperFormField],
      imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, FormlyModule.forChild(withFormlyFormField())],
      schemas: [NO_ERRORS_SCHEMA]
    }]
  }], null, null);
})();
var FieldType2 = class _FieldType extends FieldType {
  constructor() {
    super(...arguments);
    this.errorStateMatcher = {
      isErrorState: () => this.field && this.showError
    };
    this.stateChanges = new Subject();
    this._errorState = false;
    this._focused = false;
  }
  set matPrefix(prefix) {
    if (prefix) {
      this.props.prefix = prefix;
    }
  }
  set matTextPrefix(textPrefix) {
    if (textPrefix) {
      this.props.textPrefix = textPrefix;
    }
  }
  set matSuffix(suffix) {
    if (suffix) {
      this.props.suffix = suffix;
    }
  }
  set matTextSuffix(textSuffix) {
    if (textSuffix) {
      this.props.textSuffix = textSuffix;
    }
  }
  set _controls(controls) {
    this.attachControl(controls.length === 1 ? controls.first : this);
  }
  ngOnDestroy() {
    delete this.formField?._control;
    this.stateChanges.complete();
  }
  setDescribedByIds(_ids) {
  }
  onContainerClick(_event) {
    this.field.focus = true;
    this.stateChanges.next();
  }
  get errorState() {
    const showError = this.options.showError(this);
    if (showError !== this._errorState) {
      this._errorState = showError;
      this.stateChanges.next();
    }
    return showError;
  }
  get controlType() {
    if (this.props.type) {
      return this.props.type;
    }
    const type = this.field.type;
    return type instanceof Type ? type.prototype.constructor.name : type;
  }
  get focused() {
    const focused = !!this.field.focus && !this.disabled;
    if (focused !== this._focused) {
      this._focused = focused;
      this.stateChanges.next();
    }
    return focused;
  }
  get disabled() {
    return !!this.props.disabled;
  }
  get required() {
    return !!this.props.required;
  }
  get placeholder() {
    return this.props.placeholder || "";
  }
  get shouldPlaceholderFloat() {
    return this.shouldLabelFloat;
  }
  get value() {
    return this.formControl?.value;
  }
  set value(value) {
    this.formControl?.patchValue(value);
  }
  get ngControl() {
    return this.formControl;
  }
  get empty() {
    return this.value == null || this.value === "";
  }
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  get formField() {
    return this.field?.["_formField"];
  }
  attachControl(control) {
    if (this.formField && control !== this.formField._control) {
      this.formField._control = control;
      const ngControl = control?.ngControl;
      if (ngControl?.valueAccessor?.hasOwnProperty("_formField")) {
        ngControl.valueAccessor["_formField"] = this.formField;
      }
      if (ngControl?.valueAccessor?.hasOwnProperty("_parentFormField")) {
        ngControl.valueAccessor["_parentFormField"] = this.formField;
      }
      ["prefix", "suffix", "textPrefix", "textSuffix"].forEach((type) => observe(this.field, ["props", type], ({
        currentValue
      }) => currentValue && Promise.resolve().then(() => {
        this.options.detectChanges(this.field);
      })));
      const setDescribedByIds = control.setDescribedByIds.bind(control);
      control.setDescribedByIds = (ids) => {
        setTimeout(() => setDescribedByIds(ids));
      };
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵFieldType_BaseFactory;
      return function FieldType_Factory(__ngFactoryType__) {
        return (ɵFieldType_BaseFactory || (ɵFieldType_BaseFactory = ɵɵgetInheritedFactory(_FieldType)))(__ngFactoryType__ || _FieldType);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FieldType,
      viewQuery: function FieldType_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c2, 5)(_c3, 5)(_c4, 5)(_c5, 5)(MatFormFieldControl, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.matPrefix = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.matTextPrefix = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.matSuffix = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.matTextSuffix = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._controls = _t);
        }
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldType2, [{
    type: Directive
  }], null, {
    matPrefix: [{
      type: ViewChild,
      args: ["matPrefix"]
    }],
    matTextPrefix: [{
      type: ViewChild,
      args: ["matTextPrefix"]
    }],
    matSuffix: [{
      type: ViewChild,
      args: ["matSuffix"]
    }],
    matTextSuffix: [{
      type: ViewChild,
      args: ["matTextSuffix"]
    }],
    _controls: [{
      type: ViewChildren,
      args: [MatFormFieldControl]
    }]
  });
})();

// node_modules/@ngx-formly/material/fesm2022/ngx-formly-material-input.mjs
function FormlyFieldInput_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 0);
    ɵɵcontrolCreate();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r0.id)("name", ctx_r0.field.name)("type", ctx_r0.type || "text")("readonly", ctx_r0.props.readonly)("required", ctx_r0.required)("errorStateMatcher", ctx_r0.errorStateMatcher)("formControl", ctx_r0.formControl)("formlyAttributes", ctx_r0.field)("tabIndex", ctx_r0.props.tabindex)("placeholder", ctx_r0.props.placeholder);
    ɵɵcontrol();
  }
}
function FormlyFieldInput_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 1);
    ɵɵcontrolCreate();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r0.id)("name", ctx_r0.field.name)("readonly", ctx_r0.props.readonly)("required", ctx_r0.required)("errorStateMatcher", ctx_r0.errorStateMatcher)("formControl", ctx_r0.formControl)("formlyAttributes", ctx_r0.field)("tabIndex", ctx_r0.props.tabindex)("placeholder", ctx_r0.props.placeholder);
    ɵɵcontrol();
  }
}
var FormlyFieldInput = class _FormlyFieldInput extends FieldType2 {
  get type() {
    return this.props.type || "text";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵFormlyFieldInput_BaseFactory;
      return function FormlyFieldInput_Factory(__ngFactoryType__) {
        return (ɵFormlyFieldInput_BaseFactory || (ɵFormlyFieldInput_BaseFactory = ɵɵgetInheritedFactory(_FormlyFieldInput)))(__ngFactoryType__ || _FormlyFieldInput);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormlyFieldInput,
      selectors: [["formly-field-mat-input"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 1,
      consts: [["matInput", "", 3, "id", "name", "type", "readonly", "required", "errorStateMatcher", "formControl", "formlyAttributes", "tabIndex", "placeholder"], ["matInput", "", "type", "number", 3, "id", "name", "readonly", "required", "errorStateMatcher", "formControl", "formlyAttributes", "tabIndex", "placeholder"]],
      template: function FormlyFieldInput_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, FormlyFieldInput_Conditional_0_Template, 1, 10, "input", 0)(1, FormlyFieldInput_Conditional_1_Template, 1, 9, "input", 1);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.type !== "number" ? 0 : 1);
        }
      },
      dependencies: [DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, FormControlDirective, MatInput, LegacyFormlyAttributes],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyFieldInput, [{
    type: Component,
    args: [{
      selector: "formly-field-mat-input",
      template: `
    @if (type !== 'number') {
      <input
        matInput
        [id]="id"
        [name]="field.name"
        [type]="type || 'text'"
        [readonly]="props.readonly"
        [required]="required"
        [errorStateMatcher]="errorStateMatcher"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [tabIndex]="props.tabindex"
        [placeholder]="props.placeholder"
      />
    } @else {
      <input
        matInput
        [id]="id"
        [name]="field.name"
        type="number"
        [readonly]="props.readonly"
        [required]="required"
        [errorStateMatcher]="errorStateMatcher"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [tabIndex]="props.tabindex"
        [placeholder]="props.placeholder"
      />
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
function withFormlyFieldInput() {
  return {
    types: [{
      name: "input",
      component: FormlyFieldInput,
      wrappers: ["form-field"]
    }, {
      name: "string",
      extends: "input"
    }, {
      name: "number",
      extends: "input",
      defaultOptions: {
        props: {
          type: "number"
        }
      }
    }, {
      name: "integer",
      extends: "input",
      defaultOptions: {
        props: {
          type: "number"
        }
      }
    }]
  };
}
var FormlyMatInputModule = class _FormlyMatInputModule {
  static {
    this.ɵfac = function FormlyMatInputModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormlyMatInputModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FormlyMatInputModule,
      declarations: [FormlyFieldInput],
      imports: [CommonModule, ReactiveFormsModule, MatInputModule, FormlyMatFormFieldModule, FormlyModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ReactiveFormsModule, MatInputModule, FormlyMatFormFieldModule, FormlyModule.forChild(withFormlyFieldInput())]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyMatInputModule, [{
    type: NgModule,
    args: [{
      declarations: [FormlyFieldInput],
      imports: [CommonModule, ReactiveFormsModule, MatInputModule, FormlyMatFormFieldModule, FormlyModule.forChild(withFormlyFieldInput())]
    }]
  }], null, null);
})();

// node_modules/@ngx-formly/material/fesm2022/ngx-formly-material-textarea.mjs
var FormlyFieldTextArea = class _FormlyFieldTextArea extends FieldType2 {
  constructor() {
    super(...arguments);
    this.defaultOptions = {
      props: {
        cols: 1,
        rows: 1
      }
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵFormlyFieldTextArea_BaseFactory;
      return function FormlyFieldTextArea_Factory(__ngFactoryType__) {
        return (ɵFormlyFieldTextArea_BaseFactory || (ɵFormlyFieldTextArea_BaseFactory = ɵɵgetInheritedFactory(_FormlyFieldTextArea)))(__ngFactoryType__ || _FormlyFieldTextArea);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormlyFieldTextArea,
      selectors: [["formly-field-mat-textarea"]],
      standalone: false,
      features: [ɵɵProvidersFeature([
        // fix for https://github.com/ngx-formly/ngx-formly/issues/1688
        // rely on formControl value instead of elementRef which return empty value in Firefox.
        {
          provide: MAT_INPUT_VALUE_ACCESSOR,
          useExisting: _FormlyFieldTextArea
        }
      ]), ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 16,
      consts: [["matInput", "", 3, "id", "name", "readonly", "required", "formControl", "errorStateMatcher", "cols", "rows", "formlyAttributes", "placeholder", "tabindex", "cdkTextareaAutosize", "cdkAutosizeMinRows", "cdkAutosizeMaxRows"]],
      template: function FormlyFieldTextArea_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "textarea", 0);
          ɵɵcontrolCreate();
        }
        if (rf & 2) {
          ɵɵclassProp("cdk-textarea-autosize", ctx.props.autosize);
          ɵɵproperty("id", ctx.id)("name", ctx.field.name)("readonly", ctx.props.readonly)("required", ctx.required)("formControl", ctx.formControl)("errorStateMatcher", ctx.errorStateMatcher)("cols", ctx.props.cols)("rows", ctx.props.rows)("formlyAttributes", ctx.field)("placeholder", ctx.props.placeholder)("tabindex", ctx.props.tabindex)("cdkTextareaAutosize", ctx.props.autosize)("cdkAutosizeMinRows", ctx.props.autosizeMinRows)("cdkAutosizeMaxRows", ctx.props.autosizeMaxRows);
          ɵɵcontrol();
        }
      },
      dependencies: [DefaultValueAccessor, NgControlStatus, RequiredValidator, FormControlDirective, MatInput, CdkTextareaAutosize, LegacyFormlyAttributes],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyFieldTextArea, [{
    type: Component,
    args: [{
      selector: "formly-field-mat-textarea",
      template: `
    <textarea
      matInput
      [id]="id"
      [name]="field.name"
      [readonly]="props.readonly"
      [required]="required"
      [formControl]="formControl"
      [errorStateMatcher]="errorStateMatcher"
      [cols]="props.cols"
      [rows]="props.rows"
      [formlyAttributes]="field"
      [placeholder]="props.placeholder"
      [tabindex]="props.tabindex"
      [cdkTextareaAutosize]="props.autosize"
      [cdkAutosizeMinRows]="props.autosizeMinRows"
      [cdkAutosizeMaxRows]="props.autosizeMaxRows"
      [class.cdk-textarea-autosize]="props.autosize"
    ></textarea>
  `,
      providers: [
        // fix for https://github.com/ngx-formly/ngx-formly/issues/1688
        // rely on formControl value instead of elementRef which return empty value in Firefox.
        {
          provide: MAT_INPUT_VALUE_ACCESSOR,
          useExisting: FormlyFieldTextArea
        }
      ],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
function withFormlyFieldTextArea() {
  return {
    types: [{
      name: "textarea",
      component: FormlyFieldTextArea,
      wrappers: ["form-field"]
    }]
  };
}
var FormlyMatTextAreaModule = class _FormlyMatTextAreaModule {
  static {
    this.ɵfac = function FormlyMatTextAreaModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormlyMatTextAreaModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FormlyMatTextAreaModule,
      declarations: [FormlyFieldTextArea],
      imports: [CommonModule, ReactiveFormsModule, MatInputModule, FormlyMatFormFieldModule, FormlyModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ReactiveFormsModule, MatInputModule, FormlyMatFormFieldModule, FormlyModule.forChild(withFormlyFieldTextArea())]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyMatTextAreaModule, [{
    type: NgModule,
    args: [{
      declarations: [FormlyFieldTextArea],
      imports: [CommonModule, ReactiveFormsModule, MatInputModule, FormlyMatFormFieldModule, FormlyModule.forChild(withFormlyFieldTextArea())]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/_internal-form-field-chunk.mjs
var _c02 = ["*"];
var _MatInternalFormField = class __MatInternalFormField {
  labelPosition = "after";
  static ɵfac = function _MatInternalFormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatInternalFormField)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: __MatInternalFormField,
    selectors: [["div", "mat-internal-form-field", ""]],
    hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
    hostVars: 2,
    hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("mdc-form-field--align-end", ctx.labelPosition === "before");
      }
    },
    inputs: {
      labelPosition: "labelPosition"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function _MatInternalFormField_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    styles: [".mat-internal-form-field {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n.mat-internal-form-field > label {\n  margin-left: 0;\n  margin-right: auto;\n  padding-left: 4px;\n  padding-right: 0;\n  order: 0;\n}\n[dir=rtl] .mat-internal-form-field > label {\n  margin-left: auto;\n  margin-right: 0;\n  padding-left: 0;\n  padding-right: 4px;\n}\n\n.mdc-form-field--align-end > label {\n  margin-left: auto;\n  margin-right: 0;\n  padding-left: 0;\n  padding-right: 4px;\n  order: -1;\n}\n[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {\n  margin-left: 0;\n  margin-right: auto;\n  padding-left: 4px;\n  padding-right: 0;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n.mat-internal-form-field > label {\n  margin-left: 0;\n  margin-right: auto;\n  padding-left: 4px;\n  padding-right: 0;\n  order: 0;\n}\n[dir=rtl] .mat-internal-form-field > label {\n  margin-left: auto;\n  margin-right: 0;\n  padding-left: 0;\n  padding-right: 4px;\n}\n\n.mdc-form-field--align-end > label {\n  margin-left: auto;\n  margin-right: 0;\n  padding-left: 0;\n  padding-right: 4px;\n  order: -1;\n}\n[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {\n  margin-left: 0;\n  margin-right: auto;\n  padding-left: 4px;\n  padding-right: 0;\n}\n"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/radio.mjs
var _c03 = ["input"];
var _c12 = ["formField"];
var _c22 = ["*"];
var MatRadioChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatRadioGroup),
  multi: true
};
var MAT_RADIO_GROUP = new InjectionToken("MatRadioGroup");
var MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken("mat-radio-default-options", {
  providedIn: "root",
  factory: () => ({
    color: "accent",
    disabledInteractive: false
  })
});
var MatRadioGroup = class _MatRadioGroup {
  _changeDetector = inject(ChangeDetectorRef);
  _value = null;
  _name = inject(_IdGenerator).getId("mat-radio-group-");
  _selected = null;
  _isInitialized = false;
  _labelPosition = "after";
  _disabled = false;
  _required = false;
  _buttonChanges;
  _controlValueAccessorChangeFn = () => {
  };
  onTouched = () => {
  };
  change = new EventEmitter();
  _radios;
  color;
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === "before" ? "before" : "after";
    this._markRadiosForCheck();
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markRadiosForCheck();
  }
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = value;
    this._markRadiosForCheck();
  }
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markRadiosForCheck();
  }
  _disabledInteractive = false;
  ngAfterContentInit() {
    this._isInitialized = true;
    this._buttonChanges = this._radios.changes.subscribe(() => {
      if (this.selected && !this._radios.find((radio) => radio === this.selected)) {
        this._selected = null;
      }
    });
  }
  ngOnDestroy() {
    this._buttonChanges?.unsubscribe();
  }
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach((radio) => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  _updateSelectedRadioFromValue() {
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach((radio) => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach((radio) => radio._markForCheck());
    }
  }
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
  static ɵfac = function MatRadioGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioGroup)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatRadioGroup,
    selectors: [["mat-radio-group"]],
    contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, MatRadioButton, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._radios = _t);
      }
    },
    hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
    inputs: {
      color: "color",
      name: "name",
      labelPosition: "labelPosition",
      value: "value",
      selected: "selected",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matRadioGroup"],
    features: [ɵɵProvidersFeature([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
      provide: MAT_RADIO_GROUP,
      useExisting: _MatRadioGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioGroup, [{
    type: Directive,
    args: [{
      selector: "mat-radio-group",
      exportAs: "matRadioGroup",
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        "role": "radiogroup",
        "class": "mat-mdc-radio-group"
      }
    }]
  }], null, {
    change: [{
      type: Output
    }],
    _radios: [{
      type: ContentChildren,
      args: [forwardRef(() => MatRadioButton), {
        descendants: true
      }]
    }],
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatRadioButton = class _MatRadioButton {
  _elementRef = inject(ElementRef);
  _changeDetector = inject(ChangeDetectorRef);
  _focusMonitor = inject(FocusMonitor);
  _radioDispatcher = inject(UniqueSelectionDispatcher);
  _defaultOptions = inject(MAT_RADIO_DEFAULT_OPTIONS, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _uniqueId = inject(_IdGenerator).getId("mat-radio-");
  _cleanupClick;
  id = this._uniqueId;
  name;
  ariaLabel;
  ariaLabelledby;
  ariaDescribedby;
  disableRipple = false;
  tabIndex = 0;
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (this._checked !== value) {
      this._checked = value;
      if (value && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
        this.radioGroup.selected = null;
      }
      if (value) {
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || "after";
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  _labelPosition;
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled(value);
  }
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    if (value !== this._required) {
      this._changeDetector.markForCheck();
    }
    this._required = value;
  }
  get color() {
    return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || "accent";
  }
  set color(newValue) {
    this._color = newValue;
  }
  _color;
  get disabledInteractive() {
    return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  change = new EventEmitter();
  radioGroup;
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  _checked = false;
  _disabled = false;
  _required = false;
  _value = null;
  _removeUniqueSelectionListener = () => {
  };
  _previousTabIndex;
  _inputElement;
  _rippleTrigger;
  _noopAnimations = _animationsDisabled();
  _injector = inject(Injector);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const radioGroup = inject(MAT_RADIO_GROUP, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this.radioGroup = radioGroup;
    this._disabledInteractive = this._defaultOptions?.disabledInteractive ?? false;
    if (tabIndex) {
      this.tabIndex = numberAttribute(tabIndex, 0);
    }
  }
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  _markForCheck() {
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      this.name = this.radioGroup.name;
    }
    this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
    this._ngZone.runOutsideAngular(() => {
      this._cleanupClick = this._renderer.listen(this._inputElement.nativeElement, "click", this._onInputClick);
    });
  }
  ngOnDestroy() {
    this._cleanupClick?.();
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  _onInputInteraction(event) {
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  _onTouchTargetClick(event) {
    this._onInputInteraction(event);
    if (!this.disabled || this.disabledInteractive) {
      this._inputElement?.nativeElement.focus();
    }
  }
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  _onInputClick = (event) => {
    if (this.disabled && this.disabledInteractive) {
      event.preventDefault();
    }
  };
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute("tabindex", value + "");
        this._previousTabIndex = value;
        afterNextRender(() => {
          queueMicrotask(() => {
            if (group && group.selected && group.selected !== this && document.activeElement === input) {
              group.selected?._inputElement.nativeElement.focus();
              if (document.activeElement === input) {
                this._inputElement.nativeElement.blur();
              }
            }
          });
        }, {
          injector: this._injector
        });
      }
    }
  }
  static ɵfac = function MatRadioButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioButton)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatRadioButton,
    selectors: [["mat-radio-button"]],
    viewQuery: function MatRadioButton_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c03, 5)(_c12, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._inputElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._rippleTrigger = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-radio-button"],
    hostVars: 19,
    hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("focus", function MatRadioButton_focus_HostBindingHandler() {
          return ctx._inputElement.nativeElement.focus();
        });
      }
      if (rf & 2) {
        ɵɵattribute("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        ɵɵclassProp("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("mat-mdc-radio-disabled", ctx.disabled)("mat-mdc-radio-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      id: "id",
      name: "name",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      value: "value",
      labelPosition: "labelPosition",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matRadioButton"],
    ngContentSelectors: _c22,
    decls: 13,
    vars: 17,
    consts: [["formField", ""], ["input", ""], ["mat-internal-form-field", "", 3, "labelPosition"], [1, "mdc-radio"], ["aria-hidden", "true", 1, "mat-mdc-radio-touch-target", 3, "click"], ["type", "radio", "aria-invalid", "false", 1, "mdc-radio__native-control", 3, "change", "id", "checked", "disabled", "required"], ["aria-hidden", "true", 1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", "aria-hidden", "true", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mdc-label", 3, "for"]],
    template: function MatRadioButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
        ɵɵlistener("click", function MatRadioButton_Template_div_click_3_listener($event) {
          return ctx._onTouchTargetClick($event);
        });
        ɵɵelementEnd();
        ɵɵelementStart(4, "input", 5, 1);
        ɵɵlistener("change", function MatRadioButton_Template_input_change_4_listener($event) {
          return ctx._onInputInteraction($event);
        });
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 6);
        ɵɵelement(7, "div", 7)(8, "div", 8);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 9);
        ɵɵelement(10, "div", 10);
        ɵɵelementEnd()();
        ɵɵelementStart(11, "label", 11);
        ɵɵprojection(12);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("labelPosition", ctx.labelPosition);
        ɵɵadvance(2);
        ɵɵclassProp("mdc-radio--disabled", ctx.disabled);
        ɵɵadvance(2);
        ɵɵproperty("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
        ɵɵattribute("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        ɵɵadvance(5);
        ɵɵproperty("matRippleTrigger", ctx._rippleTrigger.nativeElement)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
        ɵɵadvance(2);
        ɵɵproperty("for", ctx.inputId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mat-mdc-radio-button {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-radio-button .mdc-radio {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  will-change: opacity, transform, border-color, color;\n  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {\n  opacity: 0.04;\n  transform: scale(1);\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__background {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n}\n.mat-mdc-radio-button .mdc-radio__background::before {\n  position: absolute;\n  transform: scale(0, 0);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: "";\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  width: var(--mat-radio-state-layer-size, 40px);\n  height: var(--mat-radio-state-layer-size, 40px);\n  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-radio-button .mdc-radio__outer-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-radio-button .mdc-radio__inner-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  border-radius: 50%;\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n@media (forced-colors: active) {\n  .mat-mdc-radio-button .mdc-radio__inner-circle {\n    background-color: CanvasText !important;\n  }\n}\n.mat-mdc-radio-button .mdc-radio__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--mat-radio-state-layer-size, 40px);\n  height: var(--mat-radio-state-layer-size, 40px);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {\n  transform: scale(1);\n  opacity: 0.12;\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {\n  cursor: default;\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  transform: scale(0.5);\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {\n  pointer-events: auto;\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {\n  transition: none !important;\n}\n.mat-mdc-radio-button label {\n  cursor: pointer;\n}\n.mat-mdc-radio-button label:empty {\n  display: none;\n}\n.mat-mdc-radio-button .mdc-radio__background::before {\n  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,\n.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {\n  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {\n  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mat-internal-form-field {\n  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-radio-button .mdc-radio--disabled + label {\n  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-radio-button .mat-radio-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: 50%;\n}\n.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {\n  opacity: 0.14;\n}\n.mat-mdc-radio-button .mat-radio-ripple::before {\n  border-radius: 50%;\n}\n.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {\n  content: "";\n}\n\n.mat-mdc-radio-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-radio-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-radio-touch-target-size, 48px);\n  width: var(--mat-radio-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n  display: var(--mat-radio-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-radio-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioButton, [{
    type: Component,
    args: [{
      selector: "mat-radio-button",
      host: {
        "class": "mat-mdc-radio-button",
        "[attr.id]": "id",
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.mat-mdc-radio-checked]": "checked",
        "[class.mat-mdc-radio-disabled]": "disabled",
        "[class.mat-mdc-radio-disabled-interactive]": "disabledInteractive",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null",
        "(focus)": "_inputElement.nativeElement.focus()"
      },
      exportAs: "matRadioButton",
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple, _MatInternalFormField],
      template: '<div mat-internal-form-field [labelPosition]="labelPosition" #formField>\n  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">\n    <!-- Render this element first so the input is on top. -->\n    <div\n      class="mat-mdc-radio-touch-target"\n      (click)="_onTouchTargetClick($event)"\n      aria-hidden="true"></div>\n    <!--\n      Note that we set `aria-invalid="false"` on the input, because otherwise some screen readers\n      will read out "required, invalid data" for each radio button that hasn\'t been checked.\n      An alternate approach is to use `aria-required` instead of `required`, however we have an\n      internal check which enforces that elements marked as `aria-required` also have the `required`\n      attribute which ends up re-introducing the issue for us.\n    -->\n    <input #input class="mdc-radio__native-control" type="radio"\n           [id]="inputId"\n           [checked]="checked"\n           [disabled]="disabled && !disabledInteractive"\n           [attr.name]="name"\n           [attr.value]="value"\n           [required]="required"\n           aria-invalid="false"\n           [attr.aria-label]="ariaLabel"\n           [attr.aria-labelledby]="ariaLabelledby"\n           [attr.aria-describedby]="ariaDescribedby"\n           [attr.aria-disabled]="disabled && disabledInteractive ? \'true\' : null"\n           (change)="_onInputInteraction($event)">\n    <div class="mdc-radio__background" aria-hidden="true">\n      <div class="mdc-radio__outer-circle"></div>\n      <div class="mdc-radio__inner-circle"></div>\n    </div>\n    <div mat-ripple class="mat-radio-ripple mat-focus-indicator"\n         [matRippleTrigger]="_rippleTrigger.nativeElement"\n         [matRippleDisabled]="_isRippleDisabled()"\n         [matRippleCentered]="true"\n         aria-hidden="true">\n      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>\n    </div>\n  </div>\n  <label class="mdc-label" [for]="inputId">\n    <ng-content></ng-content>\n  </label>\n</div>\n',
      styles: ['.mat-mdc-radio-button {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-radio-button .mdc-radio {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  will-change: opacity, transform, border-color, color;\n  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {\n  opacity: 0.04;\n  transform: scale(1);\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__background {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n}\n.mat-mdc-radio-button .mdc-radio__background::before {\n  position: absolute;\n  transform: scale(0, 0);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: "";\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  width: var(--mat-radio-state-layer-size, 40px);\n  height: var(--mat-radio-state-layer-size, 40px);\n  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);\n}\n.mat-mdc-radio-button .mdc-radio__outer-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-radio-button .mdc-radio__inner-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  border-radius: 50%;\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n@media (forced-colors: active) {\n  .mat-mdc-radio-button .mdc-radio__inner-circle {\n    background-color: CanvasText !important;\n  }\n}\n.mat-mdc-radio-button .mdc-radio__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--mat-radio-state-layer-size, 40px);\n  height: var(--mat-radio-state-layer-size, 40px);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {\n  transform: scale(1);\n  opacity: 0.12;\n  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {\n  cursor: default;\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));\n}\n.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {\n  transform: scale(0.5);\n  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {\n  pointer-events: auto;\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {\n  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));\n  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);\n}\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,\n.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {\n  transition: none !important;\n}\n.mat-mdc-radio-button label {\n  cursor: pointer;\n}\n.mat-mdc-radio-button label:empty {\n  display: none;\n}\n.mat-mdc-radio-button .mdc-radio__background::before {\n  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,\n.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {\n  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));\n}\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,\n.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {\n  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button .mat-internal-form-field {\n  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-radio-button .mdc-radio--disabled + label {\n  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-radio-button .mat-radio-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: 50%;\n}\n.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {\n  opacity: 0.14;\n}\n.mat-mdc-radio-button .mat-radio-ripple::before {\n  border-radius: 50%;\n}\n.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {\n  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {\n  content: "";\n}\n\n.mat-mdc-radio-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-radio-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-radio-touch-target-size, 48px);\n  width: var(--mat-radio-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n  display: var(--mat-radio-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-radio-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n']
    }]
  }], () => [], {
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _rippleTrigger: [{
      type: ViewChild,
      args: ["formField", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var MatRadioModule = class _MatRadioModule {
  static ɵfac = function MatRadioModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatRadioModule,
    imports: [MatRippleModule, MatRadioGroup, MatRadioButton],
    exports: [BidiModule, MatRadioGroup, MatRadioButton]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [MatRippleModule, MatRadioButton, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatRadioGroup, MatRadioButton],
      exports: [BidiModule, MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();

// node_modules/@ngx-formly/core/fesm2022/ngx-formly-core-select.mjs
var FormlySelectOptionsPipe = class _FormlySelectOptionsPipe {
  transform(options, field) {
    if (!(options instanceof Observable)) {
      options = this.observableOf(options, field);
    } else {
      this.dispose();
    }
    return options.pipe(map((value) => this.transformOptions(value, field)));
  }
  ngOnDestroy() {
    this.dispose();
  }
  transformOptions(options, field) {
    const to = this.transformSelectProps(field);
    const opts = [];
    const groups = {};
    options?.forEach((option) => {
      const o = this.transformOption(option, to);
      if (o.group) {
        const id = groups[o.label];
        if (id === void 0) {
          groups[o.label] = opts.push(o) - 1;
        } else {
          o.group.forEach((o2) => opts[id].group.push(o2));
        }
      } else {
        opts.push(o);
      }
    });
    return opts;
  }
  transformOption(option, props) {
    const group = props.groupProp(option);
    if (Array.isArray(group)) {
      return {
        label: props.labelProp(option),
        group: group.map((opt) => this.transformOption(opt, props))
      };
    }
    option = {
      label: props.labelProp(option),
      value: props.valueProp(option),
      disabled: !!props.disabledProp(option)
    };
    if (group) {
      return {
        label: group,
        group: [option]
      };
    }
    return option;
  }
  transformSelectProps(field) {
    const props = field?.props || field?.templateOptions || {};
    const selectPropFn = (prop) => typeof prop === "function" ? prop : (o) => o[prop];
    return {
      groupProp: selectPropFn(props.groupProp || "group"),
      labelProp: selectPropFn(props.labelProp || "label"),
      valueProp: selectPropFn(props.valueProp || "value"),
      disabledProp: selectPropFn(props.disabledProp || "disabled")
    };
  }
  dispose() {
    if (this._options) {
      this._options.complete();
      this._options = null;
    }
    if (this._subscription) {
      this._subscription.unsubscribe();
      this._subscription = null;
    }
  }
  observableOf(options, f) {
    this.dispose();
    if (f && f.options && f.options.fieldChanges) {
      this._subscription = f.options.fieldChanges.pipe(filter(({
        property,
        type,
        field
      }) => {
        return type === "expressionChanges" && (property.indexOf("templateOptions.options") === 0 || property.indexOf("props.options") === 0) && field === f && Array.isArray(field.props.options) && !!this._options;
      }), tap(() => this._options.next(f.props.options))).subscribe();
    }
    this._options = new BehaviorSubject(options);
    return this._options.asObservable();
  }
  static {
    this.ɵfac = function FormlySelectOptionsPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormlySelectOptionsPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "formlySelectOptions",
      type: _FormlySelectOptionsPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlySelectOptionsPipe, [{
    type: Pipe,
    args: [{
      name: "formlySelectOptions",
      standalone: true
    }]
  }], null, null);
})();
var LegacyFormlySelectOptionsPipe = class _LegacyFormlySelectOptionsPipe extends FormlySelectOptionsPipe {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵLegacyFormlySelectOptionsPipe_BaseFactory;
      return function LegacyFormlySelectOptionsPipe_Factory(__ngFactoryType__) {
        return (ɵLegacyFormlySelectOptionsPipe_BaseFactory || (ɵLegacyFormlySelectOptionsPipe_BaseFactory = ɵɵgetInheritedFactory(_LegacyFormlySelectOptionsPipe)))(__ngFactoryType__ || _LegacyFormlySelectOptionsPipe);
      };
    })();
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "formlySelectOptions",
      type: _LegacyFormlySelectOptionsPipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LegacyFormlySelectOptionsPipe, [{
    type: Pipe,
    args: [{
      name: "formlySelectOptions",
      standalone: false
    }]
  }], null, null);
})();
var FormlySelectModule = class _FormlySelectModule {
  static {
    this.ɵfac = function FormlySelectModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormlySelectModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FormlySelectModule,
      declarations: [LegacyFormlySelectOptionsPipe],
      exports: [LegacyFormlySelectOptionsPipe]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlySelectModule, [{
    type: NgModule,
    args: [{
      declarations: [LegacyFormlySelectOptionsPipe],
      exports: [LegacyFormlySelectOptionsPipe]
    }]
  }], null, null);
})();

// node_modules/@ngx-formly/material/fesm2022/ngx-formly-material-radio.mjs
function FormlyFieldRadio_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-button", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ɵ$index_3_r2 = ctx.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r2.id + "_" + ɵ$index_3_r2)("color", ctx_r2.props.color)("labelPosition", ctx_r2.props.labelPosition)("disabled", option_r1.disabled)("value", option_r1.value);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", option_r1.label, " ");
  }
}
var FormlyFieldRadio = class _FormlyFieldRadio extends FieldType2 {
  constructor() {
    super(...arguments);
    this.defaultOptions = {
      props: {
        hideFieldUnderline: true,
        floatLabel: "always",
        tabindex: -1
      }
    };
  }
  ngAfterViewInit() {
    this.focusObserver = observe(this.field, ["focus"], ({
      currentValue
    }) => {
      if (this.props.tabindex === -1 && currentValue && this.radioGroup._radios.length > 0) {
        setTimeout(() => {
          const radio = this.radioGroup.selected ? this.radioGroup.selected : this.radioGroup._radios.first;
          radio.focus();
        });
      }
    });
  }
  // TODO: find a solution to prevent scroll on focus
  onContainerClick() {
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.focusObserver && this.focusObserver.unsubscribe();
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵFormlyFieldRadio_BaseFactory;
      return function FormlyFieldRadio_Factory(__ngFactoryType__) {
        return (ɵFormlyFieldRadio_BaseFactory || (ɵFormlyFieldRadio_BaseFactory = ɵɵgetInheritedFactory(_FormlyFieldRadio)))(__ngFactoryType__ || _FormlyFieldRadio);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormlyFieldRadio,
      selectors: [["formly-field-mat-radio"]],
      viewQuery: function FormlyFieldRadio_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(MatRadioGroup, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.radioGroup = _t.first);
        }
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 5,
      vars: 9,
      consts: [[3, "formControl", "formlyAttributes", "required", "tabindex"], [3, "id", "color", "labelPosition", "disabled", "value"]],
      template: function FormlyFieldRadio_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "mat-radio-group", 0);
          ɵɵrepeaterCreate(1, FormlyFieldRadio_For_2_Template, 2, 6, "mat-radio-button", 1, ɵɵrepeaterTrackByIndex);
          ɵɵpipe(3, "formlySelectOptions");
          ɵɵpipe(4, "async");
          ɵɵelementEnd();
          ɵɵcontrolCreate();
        }
        if (rf & 2) {
          ɵɵproperty("formControl", ctx.formControl)("formlyAttributes", ctx.field)("required", ctx.required)("tabindex", ctx.props.tabindex);
          ɵɵcontrol();
          ɵɵadvance();
          ɵɵrepeater(ɵɵpipeBind1(4, 7, ɵɵpipeBind2(3, 4, ctx.props.options, ctx.field)));
        }
      },
      dependencies: [NgControlStatus, RequiredValidator, FormControlDirective, MatRadioGroup, MatRadioButton, LegacyFormlyAttributes, AsyncPipe, LegacyFormlySelectOptionsPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyFieldRadio, [{
    type: Component,
    args: [{
      selector: "formly-field-mat-radio",
      template: `
    <mat-radio-group
      [formControl]="formControl"
      [formlyAttributes]="field"
      [required]="required"
      [tabindex]="props.tabindex"
    >
      @for (option of props.options | formlySelectOptions: field | async; track $index; let i = $index) {
        <mat-radio-button
          [id]="id + '_' + i"
          [color]="props.color"
          [labelPosition]="props.labelPosition"
          [disabled]="option.disabled"
          [value]="option.value"
        >
          {{ option.label }}
        </mat-radio-button>
      }
    </mat-radio-group>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    radioGroup: [{
      type: ViewChild,
      args: [MatRadioGroup, {
        static: true
      }]
    }]
  });
})();
function withFormlyFieldRadio() {
  return {
    types: [{
      name: "radio",
      component: FormlyFieldRadio,
      wrappers: ["form-field"]
    }]
  };
}
var FormlyMatRadioModule = class _FormlyMatRadioModule {
  static {
    this.ɵfac = function FormlyMatRadioModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormlyMatRadioModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FormlyMatRadioModule,
      declarations: [FormlyFieldRadio],
      imports: [CommonModule, ReactiveFormsModule, MatRadioModule, FormlyMatFormFieldModule, FormlySelectModule, FormlyModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ReactiveFormsModule, MatRadioModule, FormlyMatFormFieldModule, FormlySelectModule, FormlyModule.forChild(withFormlyFieldRadio())]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyMatRadioModule, [{
    type: NgModule,
    args: [{
      declarations: [FormlyFieldRadio],
      imports: [CommonModule, ReactiveFormsModule, MatRadioModule, FormlyMatFormFieldModule, FormlySelectModule, FormlyModule.forChild(withFormlyFieldRadio())]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c04 = ["input"];
var _c13 = ["label"];
var _c23 = ["*"];
var checkboxDefaults = {
  color: "accent",
  clickAction: "check-indeterminate",
  disabledInteractive: false
};
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: () => checkboxDefaults
});
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var MatCheckboxChange = class {
  source;
  checked;
};
var MatCheckbox = class _MatCheckbox {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _animationsDisabled = _animationsDisabled();
  _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
    optional: true
  });
  focus() {
    this._inputElement.nativeElement.focus();
  }
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  _animationClasses = {
    uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
    uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
    checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
    checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
    indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
    indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
  };
  ariaLabel = "";
  ariaLabelledby = null;
  ariaDescribedby;
  ariaExpanded;
  ariaControls;
  ariaOwns;
  _uniqueId;
  id;
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  required = false;
  labelPosition = "after";
  name = null;
  change = new EventEmitter();
  indeterminateChange = new EventEmitter();
  value;
  disableRipple = false;
  _inputElement;
  _labelElement;
  tabIndex;
  color;
  disabledInteractive;
  _onTouched = () => {
  };
  _currentAnimationClass = "";
  _currentCheckState = TransitionCheckState.Init;
  _controlValueAccessorChangeFn = () => {
  };
  _validatorChangeFn = () => {
  };
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this._options = this._options || checkboxDefaults;
    this.color = this._options.color || checkboxDefaults.color;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
    this.disabledInteractive = this._options?.disabledInteractive ?? false;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this.indeterminate);
  }
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _checked = false;
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _disabled = false;
  get indeterminate() {
    return this._indeterminate();
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate();
    this._indeterminate.set(value);
    if (changed) {
      if (value) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(value);
    }
    this._syncIndeterminate(value);
  }
  _indeterminate = signal(false, ...ngDevMode ? [{
    debugName: "_indeterminate"
  }] : []);
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  writeValue(value) {
    this.checked = !!value;
  }
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate.set(false);
          this.indeterminateChange.emit(false);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationsDisabled) {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
  static ɵfac = function MatCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckbox)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatCheckbox,
    selectors: [["mat-checkbox"]],
    viewQuery: function MatCheckbox_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c04, 5)(_c13, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._inputElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._labelElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-checkbox"],
    hostVars: 16,
    hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵdomProperty("id", ctx.id);
        ɵɵattribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
        ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
        ɵɵclassProp("_mat-animation-noopable", ctx._animationsDisabled)("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      ariaExpanded: [2, "aria-expanded", "ariaExpanded", booleanAttribute],
      ariaControls: [0, "aria-controls", "ariaControls"],
      ariaOwns: [0, "aria-owns", "ariaOwns"],
      id: "id",
      required: [2, "required", "required", booleanAttribute],
      labelPosition: "labelPosition",
      name: "name",
      value: "value",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
      color: "color",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
      checked: [2, "checked", "checked", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
    },
    outputs: {
      change: "change",
      indeterminateChange: "indeterminateChange"
    },
    exportAs: ["matCheckbox"],
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatCheckbox),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatCheckbox,
      multi: true
    }]), ɵɵNgOnChangesFeature],
    ngContentSelectors: _c23,
    decls: 15,
    vars: 23,
    consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], ["aria-hidden", "true", 1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], ["aria-hidden", "true", 1, "mdc-checkbox__ripple"], ["aria-hidden", "true", 1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", "aria-hidden", "true", 1, "mat-mdc-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
    template: function MatCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 3);
        ɵɵlistener("click", function MatCheckbox_Template_div_click_0_listener($event) {
          return ctx._preventBubblingFromLabel($event);
        });
        ɵɵelementStart(1, "div", 4, 0)(3, "div", 5);
        ɵɵlistener("click", function MatCheckbox_Template_div_click_3_listener() {
          return ctx._onTouchTargetClick();
        });
        ɵɵelementEnd();
        ɵɵelementStart(4, "input", 6, 1);
        ɵɵlistener("blur", function MatCheckbox_Template_input_blur_4_listener() {
          return ctx._onBlur();
        })("click", function MatCheckbox_Template_input_click_4_listener() {
          return ctx._onInputClick();
        })("change", function MatCheckbox_Template_input_change_4_listener($event) {
          return ctx._onInteractionEvent($event);
        });
        ɵɵelementEnd();
        ɵɵelement(6, "div", 7);
        ɵɵelementStart(7, "div", 8);
        ɵɵnamespaceSVG();
        ɵɵelementStart(8, "svg", 9);
        ɵɵelement(9, "path", 10);
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelement(10, "div", 11);
        ɵɵelementEnd();
        ɵɵelement(11, "div", 12);
        ɵɵelementEnd();
        ɵɵelementStart(12, "label", 13, 2);
        ɵɵprojection(14);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        const checkbox_r1 = ɵɵreference(2);
        ɵɵproperty("labelPosition", ctx.labelPosition);
        ɵɵadvance(4);
        ɵɵclassProp("mdc-checkbox--selected", ctx.checked);
        ɵɵproperty("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
        ɵɵattribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-controls", ctx.ariaControls)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("aria-expanded", ctx.ariaExpanded)("aria-owns", ctx.ariaOwns)("name", ctx.name)("value", ctx.value);
        ɵɵadvance(7);
        ɵɵproperty("matRippleTrigger", checkbox_r1)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        ɵɵadvance();
        ɵɵproperty("for", ctx.inputId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 18px;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n}\n.mdc-checkbox:hover > .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--mat-checkbox-state-layer-size, 40px);\n  height: var(--mat-checkbox-state-layer-size, 40px);\n  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n}\n\n.mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox__background {\n  display: inline-flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 18px;\n  height: 18px;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));\n  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n}\n\n.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,\n.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));\n  background-color: transparent;\n}\n\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n\n.mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__checkmark {\n    color: CanvasText;\n  }\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n    color: GrayText;\n  }\n}\n\n.mdc-checkbox__checkmark-path {\n  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n\n.mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  transform: scaleX(0) rotate(0deg);\n  border-width: 1px;\n  border-style: solid;\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__mixedmark {\n    margin: 0 1px;\n  }\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation-duration: 180ms;\n  animation-timing-function: linear;\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;\n  transition: none;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(-45deg);\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%, 50% {\n    stroke-dashoffset: 29.7833385;\n  }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%, 68.2% {\n    transform: scaleX(0);\n  }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.7833385;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    animation-timing-function: linear;\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%, 100% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n.mat-mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-checkbox label {\n  cursor: pointer;\n}\n.mat-mdc-checkbox .mat-internal-form-field {\n  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {\n  cursor: default;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {\n  cursor: default;\n  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {\n    color: GrayText;\n  }\n}\n.mat-mdc-checkbox label:empty {\n  display: none;\n}\n.mat-mdc-checkbox .mdc-checkbox__ripple {\n  opacity: 0;\n}\n\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple,\n.mdc-checkbox__ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),\n.mdc-checkbox__ripple:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-mdc-checkbox-ripple .mat-ripple-element {\n  opacity: 0.1;\n}\n\n.mat-mdc-checkbox-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-checkbox-touch-target-size, 48px);\n  width: var(--mat-checkbox-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n  display: var(--mat-checkbox-touch-target-display, block);\n}\n\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {\n  border-radius: 50%;\n}\n\n.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {\n  content: "";\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatCheckbox),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div
      class="mat-mdc-checkbox-touch-target"
      (click)="_onTouchTargetClick()"
      aria-hidden="true"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple" aria-hidden="true"></div>
    <div class="mdc-checkbox__background" aria-hidden="true">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator"
      mat-ripple
      aria-hidden="true"
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  flex: 0 0 18px;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom;\n  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n}\n.mdc-checkbox:hover > .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {\n  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {\n  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {\n  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n}\n.mdc-checkbox .mdc-checkbox__native-control {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n  z-index: 1;\n  width: var(--mat-checkbox-state-layer-size, 40px);\n  height: var(--mat-checkbox-state-layer-size, 40px);\n  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);\n}\n\n.mdc-checkbox--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-checkbox__background {\n  display: inline-flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 18px;\n  height: 18px;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));\n  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);\n}\n\n.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,\n.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));\n  background-color: transparent;\n}\n\n.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));\n  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));\n}\n\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,\n  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {\n    border-color: GrayText;\n  }\n}\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: transparent;\n}\n\n.mdc-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__checkmark {\n    color: CanvasText;\n  }\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {\n    color: GrayText;\n  }\n}\n\n.mdc-checkbox__checkmark-path {\n  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.7833385;\n  stroke-dasharray: 29.7833385;\n}\n\n.mdc-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  transform: scaleX(0) rotate(0deg);\n  border-width: 1px;\n  border-style: solid;\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox__mixedmark {\n    margin: 0 1px;\n  }\n}\n\n.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));\n}\n@media (forced-colors: active) {\n  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {\n    border-color: GrayText;\n  }\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation-duration: 180ms;\n  animation-timing-function: linear;\n}\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {\n  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;\n  transition: none;\n}\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;\n  transition: none;\n}\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;\n  transition: none;\n}\n\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;\n  transition: none;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 1;\n}\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(-45deg);\n}\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%, 50% {\n    stroke-dashoffset: 29.7833385;\n  }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%, 68.2% {\n    transform: scaleX(0);\n  }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.7833385;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(360deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    transform: rotate(-45deg);\n    opacity: 0;\n  }\n  to {\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);\n    transform: rotate(0deg);\n    opacity: 1;\n  }\n  to {\n    transform: rotate(315deg);\n    opacity: 0;\n  }\n}\n@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    animation-timing-function: linear;\n    transform: scaleX(1);\n    opacity: 1;\n  }\n  32.8%, 100% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n}\n.mat-mdc-checkbox {\n  display: inline-block;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,\n.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-checkbox label {\n  cursor: pointer;\n}\n.mat-mdc-checkbox .mat-internal-form-field {\n  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {\n  cursor: default;\n}\n.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {\n  cursor: default;\n  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {\n    color: GrayText;\n  }\n}\n.mat-mdc-checkbox label:empty {\n  display: none;\n}\n.mat-mdc-checkbox .mdc-checkbox__ripple {\n  opacity: 0;\n}\n\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple,\n.mdc-checkbox__ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),\n.mdc-checkbox__ripple:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-mdc-checkbox-ripple .mat-ripple-element {\n  opacity: 0.1;\n}\n\n.mat-mdc-checkbox-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-checkbox-touch-target-size, 48px);\n  width: var(--mat-checkbox-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n  display: var(--mat-checkbox-touch-target-display, block);\n}\n\n.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {\n  border-radius: 50%;\n}\n\n.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {\n  content: "";\n}\n']
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    ariaExpanded: [{
      type: Input,
      args: [{
        alias: "aria-expanded",
        transform: booleanAttribute
      }]
    }],
    ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }],
    ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? void 0 : numberAttribute(value)
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatCheckboxModule = class _MatCheckboxModule {
  static ɵfac = function MatCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckboxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatCheckboxModule,
    imports: [MatCheckbox],
    exports: [MatCheckbox, BidiModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [MatCheckbox, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox],
      exports: [MatCheckbox, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@ngx-formly/material/fesm2022/ngx-formly-material-checkbox.mjs
function FormlyFieldCheckbox_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵtext(1, "*");
    ɵɵelementEnd();
  }
}
var FormlyFieldCheckbox = class _FormlyFieldCheckbox extends FieldType2 {
  constructor(renderer, focusMonitor) {
    super();
    this.renderer = renderer;
    this.focusMonitor = focusMonitor;
    this.defaultOptions = {
      props: {
        hideFieldUnderline: true,
        indeterminate: true,
        floatLabel: "always",
        hideLabel: true,
        color: "accent"
        // workaround for https://github.com/angular/components/issues/18465
      }
    };
  }
  onContainerClick(event) {
    this.checkbox.focus();
    super.onContainerClick(event);
  }
  ngAfterViewInit() {
    if (this.checkbox) {
      this.focusMonitor.monitor(this.checkbox._inputElement, true).subscribe((focusOrigin) => {
        this.field.focus = !!focusOrigin;
        this.stateChanges.next();
        if (focusOrigin) {
          this.props.focus && this.props.focus(this.field);
        } else {
          this.props.blur && this.props.blur(this.field);
        }
      });
    }
  }
  ngAfterViewChecked() {
    if (this.required !== this._required && this.checkbox && this.checkbox._inputElement) {
      this._required = this.required;
      const inputElement = this.checkbox._inputElement.nativeElement;
      if (this.required) {
        this.renderer.setAttribute(inputElement, "required", "required");
      } else {
        this.renderer.removeAttribute(inputElement, "required");
      }
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.checkbox) {
      this.focusMonitor.stopMonitoring(this.checkbox._inputElement);
    }
  }
  static {
    this.ɵfac = function FormlyFieldCheckbox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormlyFieldCheckbox)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(FocusMonitor));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormlyFieldCheckbox,
      selectors: [["formly-field-mat-checkbox"]],
      viewQuery: function FormlyFieldCheckbox_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(MatCheckbox, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.checkbox = _t.first);
        }
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 10,
      consts: [[3, "formControl", "id", "name", "formlyAttributes", "tabIndex", "indeterminate", "color", "labelPosition"], ["aria-hidden", "true", 1, "mat-form-field-required-marker", "mat-mdc-form-field-required-marker"]],
      template: function FormlyFieldCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "mat-checkbox", 0);
          ɵɵtext(1);
          ɵɵconditionalCreate(2, FormlyFieldCheckbox_Conditional_2_Template, 2, 0, "span", 1);
          ɵɵelementEnd();
          ɵɵcontrolCreate();
        }
        if (rf & 2) {
          ɵɵproperty("formControl", ctx.formControl)("id", ctx.id)("name", ctx.field.name)("formlyAttributes", ctx.field)("tabIndex", ctx.props.tabindex)("indeterminate", ctx.props.indeterminate && ctx.formControl.value == null)("color", ctx.props.color)("labelPosition", ctx.props.labelPosition);
          ɵɵcontrol();
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.props.label, " ");
          ɵɵadvance();
          ɵɵconditional(ctx.props.required && ctx.props.hideRequiredMarker !== true ? 2 : -1);
        }
      },
      dependencies: [NgControlStatus, FormControlDirective, MatCheckbox, LegacyFormlyAttributes],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyFieldCheckbox, [{
    type: Component,
    args: [{
      selector: "formly-field-mat-checkbox",
      template: `
    <mat-checkbox
      [formControl]="formControl"
      [id]="id"
      [name]="field.name"
      [formlyAttributes]="field"
      [tabIndex]="props.tabindex"
      [indeterminate]="props.indeterminate && formControl.value == null"
      [color]="props.color"
      [labelPosition]="props.labelPosition"
    >
      {{ props.label }}
      @if (props.required && props.hideRequiredMarker !== true) {
        <span aria-hidden="true" class="mat-form-field-required-marker mat-mdc-form-field-required-marker">*</span>
      }
    </mat-checkbox>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: FocusMonitor
  }], {
    checkbox: [{
      type: ViewChild,
      args: [MatCheckbox, {
        static: true
      }]
    }]
  });
})();
function withFormlyFieldCheckbox() {
  return {
    types: [{
      name: "checkbox",
      component: FormlyFieldCheckbox,
      wrappers: ["form-field"]
    }, {
      name: "boolean",
      extends: "checkbox"
    }]
  };
}
var FormlyMatCheckboxModule = class _FormlyMatCheckboxModule {
  static {
    this.ɵfac = function FormlyMatCheckboxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormlyMatCheckboxModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FormlyMatCheckboxModule,
      declarations: [FormlyFieldCheckbox],
      imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule, FormlyMatFormFieldModule, FormlyModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule, FormlyMatFormFieldModule, FormlyModule.forChild(withFormlyFieldCheckbox())]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyMatCheckboxModule, [{
    type: NgModule,
    args: [{
      declarations: [FormlyFieldCheckbox],
      imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule, FormlyMatFormFieldModule, FormlyModule.forChild(withFormlyFieldCheckbox())]
    }]
  }], null, null);
})();

// node_modules/@ngx-formly/material/fesm2022/ngx-formly-material-multicheckbox.mjs
function FormlyFieldMultiCheckbox_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 1);
    ɵɵlistener("change", function FormlyFieldMultiCheckbox_For_1_Template_mat_checkbox_change_0_listener($event) {
      const option_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onChange(option_r2.value, $event.checked));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ɵ$index_1_r4 = ctx.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r2.id + "_" + ɵ$index_1_r4)("formlyAttributes", ctx_r2.field)("tabIndex", ctx_r2.props.tabindex)("color", ctx_r2.props.color)("labelPosition", ctx_r2.props.labelPosition)("checked", ctx_r2.isChecked(option_r2))("disabled", ctx_r2.formControl.disabled || option_r2.disabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", option_r2.label, " ");
  }
}
var FormlyFieldMultiCheckbox = class _FormlyFieldMultiCheckbox extends FieldType2 {
  constructor() {
    super(...arguments);
    this.defaultOptions = {
      props: {
        hideFieldUnderline: true,
        floatLabel: "always",
        color: "accent"
        // workaround for https://github.com/angular/components/issues/18465
      }
    };
  }
  onChange(value, checked) {
    this.formControl.markAsDirty();
    if (this.props.type === "array") {
      this.formControl.patchValue(checked ? [...this.formControl.value || [], value] : [...this.formControl.value || []].filter((o) => o !== value));
    } else {
      this.formControl.patchValue(__spreadProps(__spreadValues({}, this.formControl.value), {
        [value]: checked
      }));
    }
    this.formControl.markAsTouched();
  }
  // TODO: find a solution to prevent scroll on focus
  onContainerClick() {
  }
  isChecked(option) {
    const value = this.formControl.value;
    return value && (this.props.type === "array" ? value.indexOf(option.value) !== -1 : value[option.value]);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵFormlyFieldMultiCheckbox_BaseFactory;
      return function FormlyFieldMultiCheckbox_Factory(__ngFactoryType__) {
        return (ɵFormlyFieldMultiCheckbox_BaseFactory || (ɵFormlyFieldMultiCheckbox_BaseFactory = ɵɵgetInheritedFactory(_FormlyFieldMultiCheckbox)))(__ngFactoryType__ || _FormlyFieldMultiCheckbox);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormlyFieldMultiCheckbox,
      selectors: [["formly-field-mat-multicheckbox"]],
      viewQuery: function FormlyFieldMultiCheckbox_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(MatCheckbox, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.checkboxes = _t);
        }
      },
      hostVars: 1,
      hostBindings: function FormlyFieldMultiCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.id);
        }
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 5,
      consts: [[3, "id", "formlyAttributes", "tabIndex", "color", "labelPosition", "checked", "disabled"], [3, "change", "id", "formlyAttributes", "tabIndex", "color", "labelPosition", "checked", "disabled"]],
      template: function FormlyFieldMultiCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, FormlyFieldMultiCheckbox_For_1_Template, 2, 8, "mat-checkbox", 0, ɵɵrepeaterTrackByIndex);
          ɵɵpipe(2, "formlySelectOptions");
          ɵɵpipe(3, "async");
        }
        if (rf & 2) {
          ɵɵrepeater(ɵɵpipeBind1(3, 3, ɵɵpipeBind2(2, 0, ctx.props.options, ctx.field)));
        }
      },
      dependencies: [MatCheckbox, LegacyFormlyAttributes, AsyncPipe, LegacyFormlySelectOptionsPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyFieldMultiCheckbox, [{
    type: Component,
    args: [{
      selector: "formly-field-mat-multicheckbox",
      template: `
    @for (option of props.options | formlySelectOptions: field | async; track $index; let i = $index) {
      <mat-checkbox
        [id]="id + '_' + i"
        [formlyAttributes]="field"
        [tabIndex]="props.tabindex"
        [color]="props.color"
        [labelPosition]="props.labelPosition"
        [checked]="isChecked(option)"
        [disabled]="formControl.disabled || option.disabled"
        (change)="onChange(option.value, $event.checked)"
      >
        {{ option.label }}
      </mat-checkbox>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[id]": "id"
      }
    }]
  }], null, {
    checkboxes: [{
      type: ViewChildren,
      args: [MatCheckbox]
    }]
  });
})();
function withFormlyFieldMultiCheckbox() {
  return {
    types: [{
      name: "multicheckbox",
      component: FormlyFieldMultiCheckbox,
      wrappers: ["form-field"]
    }]
  };
}
var FormlyMatMultiCheckboxModule = class _FormlyMatMultiCheckboxModule {
  static {
    this.ɵfac = function FormlyMatMultiCheckboxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormlyMatMultiCheckboxModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FormlyMatMultiCheckboxModule,
      declarations: [FormlyFieldMultiCheckbox],
      imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule, FormlyMatFormFieldModule, FormlySelectModule, FormlyModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule, FormlyMatFormFieldModule, FormlySelectModule, FormlyModule.forChild(withFormlyFieldMultiCheckbox())]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyMatMultiCheckboxModule, [{
    type: NgModule,
    args: [{
      declarations: [FormlyFieldMultiCheckbox],
      imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule, FormlyMatFormFieldModule, FormlySelectModule, FormlyModule.forChild(withFormlyFieldMultiCheckbox())]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/_date-formats-chunk.mjs
var MAT_DATE_LOCALE = new InjectionToken("MAT_DATE_LOCALE", {
  providedIn: "root",
  factory: () => inject(LOCALE_ID)
});
var NOT_IMPLEMENTED = "Method not implemented";
var DateAdapter = class {
  locale;
  _localeChanges = new Subject();
  localeChanges = this._localeChanges;
  setTime(target, hours, minutes, seconds) {
    throw new Error(NOT_IMPLEMENTED);
  }
  getHours(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  getMinutes(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  getSeconds(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  parseTime(value, parseFormat) {
    throw new Error(NOT_IMPLEMENTED);
  }
  addSeconds(date, amount) {
    throw new Error(NOT_IMPLEMENTED);
  }
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  compareTime(first, second) {
    return this.getHours(first) - this.getHours(second) || this.getMinutes(first) - this.getMinutes(second) || this.getSeconds(first) - this.getSeconds(second);
  }
  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  sameTime(first, second) {
    if (first && second) {
      const firstValid = this.isValid(first);
      const secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareTime(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
};
var MAT_DATE_FORMATS = new InjectionToken("mat-date-formats");

// node_modules/@angular/material/fesm2022/_line-chunk.mjs
var MatLine = class _MatLine {
  static ɵfac = function MatLine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatLine)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatLine,
    selectors: [["", "mat-line", ""], ["", "matLine", ""]],
    hostAttrs: [1, "mat-line"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLine, [{
    type: Directive,
    args: [{
      selector: "[mat-line], [matLine]",
      host: {
        "class": "mat-line"
      }
    }]
  }], null, null);
})();
var MatLineModule = class _MatLineModule {
  static ɵfac = function MatLineModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatLineModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatLineModule,
    imports: [MatLine],
    exports: [MatLine, BidiModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLineModule, [{
    type: NgModule,
    args: [{
      imports: [MatLine],
      exports: [MatLine, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/core.mjs
var VERSION = new Version("22.0.0");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
var TIME_REGEX = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
  _matDateLocale = inject(MAT_DATE_LOCALE, {
    optional: true
  });
  constructor() {
    super();
    const matDateLocale = inject(MAT_DATE_LOCALE, {
      optional: true
    });
    if (matDateLocale !== void 0) {
      this._matDateLocale = matDateLocale;
    }
    super.setLocale(this._matDateLocale);
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style,
      timeZone: "utc"
    });
    return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
  }
  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: "numeric",
      timeZone: "utc"
    });
    return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getDayOfWeekNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style,
      timeZone: "utc"
    });
    return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: "numeric",
      timeZone: "utc"
    });
    return this._format(dtf, date);
  }
  getFirstDayOfWeek() {
    if (typeof Intl !== "undefined" && Intl.Locale) {
      const locale = new Intl.Locale(this.locale);
      const firstDay = (locale.getWeekInfo?.() || locale.weekInfo)?.firstDay ?? 0;
      return firstDay === 7 ? 0 : firstDay;
    }
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value, parseFormat) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
      timeZone: "utc"
    }));
    return this._format(dtf, date);
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  setTime(target, hours, minutes, seconds) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!inRange(hours, 0, 23)) {
        throw Error(`Invalid hours "${hours}". Hours value must be between 0 and 23.`);
      }
      if (!inRange(minutes, 0, 59)) {
        throw Error(`Invalid minutes "${minutes}". Minutes value must be between 0 and 59.`);
      }
      if (!inRange(seconds, 0, 59)) {
        throw Error(`Invalid seconds "${seconds}". Seconds value must be between 0 and 59.`);
      }
    }
    const clone = this.clone(target);
    clone.setHours(hours, minutes, seconds, 0);
    return clone;
  }
  getHours(date) {
    return date.getHours();
  }
  getMinutes(date) {
    return date.getMinutes();
  }
  getSeconds(date) {
    return date.getSeconds();
  }
  parseTime(userValue, parseFormat) {
    if (typeof userValue !== "string") {
      return userValue instanceof Date ? new Date(userValue.getTime()) : null;
    }
    const value = userValue.trim();
    if (value.length === 0) {
      return null;
    }
    let result = this._parseTimeString(value);
    if (result === null) {
      const withoutExtras = value.replace(/[^0-9:(AM|PM)]/gi, "").trim();
      if (withoutExtras.length > 0) {
        result = this._parseTimeString(withoutExtras);
      }
    }
    return result || this.invalid();
  }
  addSeconds(date, amount) {
    return new Date(date.getTime() + amount * 1e3);
  }
  _createDateWithOverflow(year, month, date) {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
  _parseTimeString(value) {
    const parsed = value.toUpperCase().match(TIME_REGEX);
    if (parsed) {
      let hours = parseInt(parsed[1]);
      const minutes = parseInt(parsed[2]);
      let seconds = parsed[3] == null ? void 0 : parseInt(parsed[3]);
      const amPm = parsed[4];
      if (hours === 12) {
        hours = amPm === "AM" ? 0 : hours;
      } else if (amPm === "PM") {
        hours += 12;
      }
      if (inRange(hours, 0, 23) && inRange(minutes, 0, 59) && (seconds == null || inRange(seconds, 0, 59))) {
        return this.setTime(this.today(), hours, minutes, seconds || 0);
      }
    }
    return null;
  }
  static ɵfac = function NativeDateAdapter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeDateAdapter)();
  };
  static ɵprov = ɵɵdefineService({
    token: _NativeDateAdapter,
    factory: _NativeDateAdapter.ɵfac,
    autoProvided: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateAdapter, [{
    type: Service,
    args: [{
      autoProvided: false
    }]
  }], () => [], null);
})();
function inRange(value, min, max) {
  return !isNaN(value) && value >= min && value <= max;
}
var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null,
    timeInput: null
  },
  display: {
    dateInput: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    timeInput: {
      hour: "numeric",
      minute: "numeric"
    },
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    },
    timeOptionLabel: {
      hour: "numeric",
      minute: "numeric"
    }
  }
};
var NativeDateModule = class _NativeDateModule {
  static ɵfac = function NativeDateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeDateModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NativeDateModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [{
      provide: DateAdapter,
      useClass: NativeDateAdapter
    }]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();
var MatNativeDateModule = class _MatNativeDateModule {
  static ɵfac = function MatNativeDateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatNativeDateModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatNativeDateModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [provideNativeDateAdapter()]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [provideNativeDateAdapter()]
    }]
  }], null, null);
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
}

// node_modules/@ngx-formly/material/fesm2022/ngx-formly-material-select.mjs
var _c05 = (a0) => ({
  selectOptions: a0
});
function FormlyFieldSelect_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-option", 2);
    ɵɵlistener("click", function FormlyFieldSelect_ng_template_0_Template_mat_option_click_0_listener() {
      const selectOptions_r2 = ɵɵrestoreView(_r1).selectOptions;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.toggleSelectAll(selectOptions_r2));
    });
    ɵɵelement(1, "mat-pseudo-checkbox", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const selectOptions_r2 = ctx.selectOptions;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("state", ctx_r2.getSelectAllState(selectOptions_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.props.selectAllOption, " ");
  }
}
function FormlyFieldSelect_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    const selectOptions_r4 = ɵɵnextContext();
    ɵɵnextContext();
    const selectAll_r5 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", selectAll_r5)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c05, selectOptions_r4));
  }
}
function FormlyFieldSelect_Conditional_3_For_2_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    ɵɵproperty("value", child_r6.value)("disabled", child_r6.disabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", child_r6.label, " ");
  }
}
function FormlyFieldSelect_Conditional_3_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-optgroup", 5);
    ɵɵrepeaterCreate(1, FormlyFieldSelect_Conditional_3_For_2_Conditional_0_For_2_Template, 2, 3, "mat-option", 6, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext().$implicit;
    ɵɵproperty("label", item_r7.label);
    ɵɵadvance();
    ɵɵrepeater(item_r7.group);
  }
}
function FormlyFieldSelect_Conditional_3_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ɵɵnextContext().$implicit;
    ɵɵproperty("value", item_r7.value)("disabled", item_r7.disabled);
    ɵɵadvance();
    ɵɵtextInterpolate(item_r7.label);
  }
}
function FormlyFieldSelect_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, FormlyFieldSelect_Conditional_3_For_2_Conditional_0_Template, 3, 1, "mat-optgroup", 5)(1, FormlyFieldSelect_Conditional_3_For_2_Conditional_1_Template, 2, 3, "mat-option", 6);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    ɵɵconditional(item_r7.group ? 0 : 1);
  }
}
function FormlyFieldSelect_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, FormlyFieldSelect_Conditional_3_Conditional_0_Template, 1, 4, "ng-container", 4);
    ɵɵrepeaterCreate(1, FormlyFieldSelect_Conditional_3_For_2_Template, 2, 1, null, null, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(ctx_r2.props.multiple && ctx_r2.props.selectAllOption ? 0 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx);
  }
}
var FormlyFieldSelect = class _FormlyFieldSelect extends FieldType2 {
  constructor() {
    super(...arguments);
    this.defaultOptions = {
      props: {
        compareWith(o1, o2) {
          return o1 === o2;
        }
      }
    };
  }
  set select(select) {
    observe(select, ["_parentFormField", "_textField"], ({
      currentValue
    }) => {
      if (currentValue) {
        select._preferredOverlayOrigin = select._parentFormField.getConnectedOverlayOrigin();
      }
    });
  }
  getSelectAllState(options) {
    if (this.empty || this.value.length === 0) {
      return null;
    }
    return this.value.length !== this.getSelectAllValue(options).length ? "indeterminate" : "checked";
  }
  toggleSelectAll(options) {
    const selectAllValue = this.getSelectAllValue(options);
    this.formControl.markAsDirty();
    this.formControl.setValue(!this.value || this.value.length !== selectAllValue.length ? selectAllValue : []);
  }
  change($event) {
    this.props.change?.(this.field, $event);
  }
  _getAriaLabelledby() {
    if (this.props.attributes?.["aria-labelledby"]) {
      return this.props.attributes["aria-labelledby"];
    }
    return this.formField?._labelId;
  }
  _getAriaLabel() {
    return this.props.attributes?.["aria-label"];
  }
  getSelectAllValue(options) {
    if (!this.selectAllValue || options !== this.selectAllValue.options) {
      const flatOptions = [];
      options.forEach((o) => o.group ? flatOptions.push(...o.group) : flatOptions.push(o));
      this.selectAllValue = {
        options,
        value: flatOptions.filter((o) => !o.disabled).map((o) => o.value)
      };
    }
    return this.selectAllValue.value;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵFormlyFieldSelect_BaseFactory;
      return function FormlyFieldSelect_Factory(__ngFactoryType__) {
        return (ɵFormlyFieldSelect_BaseFactory || (ɵFormlyFieldSelect_BaseFactory = ɵɵgetInheritedFactory(_FormlyFieldSelect)))(__ngFactoryType__ || _FormlyFieldSelect);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormlyFieldSelect,
      selectors: [["formly-field-mat-select"]],
      viewQuery: function FormlyFieldSelect_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(MatSelect, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.select = _t.first);
        }
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 6,
      vars: 20,
      consts: [["selectAll", ""], [3, "selectionChange", "id", "formControl", "formlyAttributes", "placeholder", "tabIndex", "required", "compareWith", "multiple", "errorStateMatcher", "aria-label", "aria-labelledby", "disableOptionCentering", "typeaheadDebounceInterval", "panelClass"], [3, "click"], [1, "mat-option-pseudo-checkbox", 3, "state"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "label"], [3, "value", "disabled"]],
      template: function FormlyFieldSelect_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, FormlyFieldSelect_ng_template_0_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementStart(2, "mat-select", 1);
          ɵɵlistener("selectionChange", function FormlyFieldSelect_Template_mat_select_selectionChange_2_listener($event) {
            return ctx.change($event);
          });
          ɵɵconditionalCreate(3, FormlyFieldSelect_Conditional_3_Template, 3, 1);
          ɵɵpipe(4, "formlySelectOptions");
          ɵɵpipe(5, "async");
          ɵɵelementEnd();
          ɵɵcontrolCreate();
        }
        if (rf & 2) {
          let tmp_16_0;
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.id)("formControl", ctx.formControl)("formlyAttributes", ctx.field)("placeholder", ctx.props.placeholder)("tabIndex", ctx.props.tabindex)("required", ctx.required)("compareWith", ctx.props.compareWith)("multiple", ctx.props.multiple)("errorStateMatcher", ctx.errorStateMatcher);
          ɵɵariaProperty("aria-label", ctx._getAriaLabel())("aria-labelledby", ctx._getAriaLabelledby());
          ɵɵproperty("disableOptionCentering", ctx.props.disableOptionCentering)("typeaheadDebounceInterval", ctx.props.typeaheadDebounceInterval)("panelClass", ctx.props.panelClass);
          ɵɵcontrol();
          ɵɵadvance();
          ɵɵconditional((tmp_16_0 = ɵɵpipeBind1(5, 18, ɵɵpipeBind2(4, 15, ctx.props.options, ctx.field))) ? 3 : -1, tmp_16_0);
        }
      },
      dependencies: [NgTemplateOutlet, NgControlStatus, RequiredValidator, FormControlDirective, MatSelect, MatOption, MatOptgroup, MatPseudoCheckbox, LegacyFormlyAttributes, AsyncPipe, LegacyFormlySelectOptionsPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyFieldSelect, [{
    type: Component,
    args: [{
      selector: "formly-field-mat-select",
      template: `
    <ng-template #selectAll let-selectOptions="selectOptions">
      <mat-option (click)="toggleSelectAll(selectOptions)">
        <mat-pseudo-checkbox class="mat-option-pseudo-checkbox" [state]="getSelectAllState(selectOptions)">
        </mat-pseudo-checkbox>
        {{ props.selectAllOption }}
      </mat-option>
    </ng-template>

    <mat-select
      [id]="id"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [placeholder]="props.placeholder"
      [tabIndex]="props.tabindex"
      [required]="required"
      [compareWith]="props.compareWith"
      [multiple]="props.multiple"
      (selectionChange)="change($event)"
      [errorStateMatcher]="errorStateMatcher"
      [aria-label]="_getAriaLabel()"
      [aria-labelledby]="_getAriaLabelledby()"
      [disableOptionCentering]="props.disableOptionCentering"
      [typeaheadDebounceInterval]="props.typeaheadDebounceInterval"
      [panelClass]="props.panelClass"
    >
      @if (props.options | formlySelectOptions: field | async; as selectOptions) {
        @if (props.multiple && props.selectAllOption) {
          <ng-container [ngTemplateOutlet]="selectAll" [ngTemplateOutletContext]="{ selectOptions: selectOptions }">
          </ng-container>
        }
        @for (item of selectOptions; track $index) {
          @if (item.group) {
            <mat-optgroup [label]="item.label">
              @for (child of item.group; track $index) {
                <mat-option [value]="child.value" [disabled]="child.disabled">
                  {{ child.label }}
                </mat-option>
              }
            </mat-optgroup>
          } @else {
            <mat-option [value]="item.value" [disabled]="item.disabled">{{ item.label }}</mat-option>
          }
        }
      }
    </mat-select>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    select: [{
      type: ViewChild,
      args: [MatSelect, {
        static: true
      }]
    }]
  });
})();
function withFormlyFieldSelect() {
  return {
    types: [{
      name: "select",
      component: FormlyFieldSelect,
      wrappers: ["form-field"]
    }, {
      name: "enum",
      extends: "select"
    }]
  };
}
var FormlyMatSelectModule = class _FormlyMatSelectModule {
  static {
    this.ɵfac = function FormlyMatSelectModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormlyMatSelectModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FormlyMatSelectModule,
      declarations: [FormlyFieldSelect],
      imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatPseudoCheckboxModule, FormlyMatFormFieldModule, FormlySelectModule, FormlyModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatPseudoCheckboxModule, FormlyMatFormFieldModule, FormlySelectModule, FormlyModule.forChild(withFormlyFieldSelect())]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyMatSelectModule, [{
    type: NgModule,
    args: [{
      declarations: [FormlyFieldSelect],
      imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatPseudoCheckboxModule, FormlyMatFormFieldModule, FormlySelectModule, FormlyModule.forChild(withFormlyFieldSelect())]
    }]
  }], null, null);
})();

// node_modules/@ngx-formly/material/fesm2022/ngx-formly-material.mjs
function withFormlyMaterial() {
  return [withFormlyFormField(), withFormlyFieldInput(), withFormlyFieldTextArea(), withFormlyFieldRadio(), withFormlyFieldCheckbox(), withFormlyFieldMultiCheckbox(), withFormlyFieldSelect()];
}
var FormlyMaterialModule = class _FormlyMaterialModule {
  static {
    this.ɵfac = function FormlyMaterialModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormlyMaterialModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FormlyMaterialModule,
      imports: [FormlyMatFormFieldModule, FormlyMatInputModule, FormlyMatTextAreaModule, FormlyMatRadioModule, FormlyMatCheckboxModule, FormlyMatMultiCheckboxModule, FormlyMatSelectModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [FormlyMatFormFieldModule, FormlyMatInputModule, FormlyMatTextAreaModule, FormlyMatRadioModule, FormlyMatCheckboxModule, FormlyMatMultiCheckboxModule, FormlyMatSelectModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormlyMaterialModule, [{
    type: NgModule,
    args: [{
      imports: [FormlyMatFormFieldModule, FormlyMatInputModule, FormlyMatTextAreaModule, FormlyMatRadioModule, FormlyMatCheckboxModule, FormlyMatMultiCheckboxModule, FormlyMatSelectModule]
    }]
  }], null, null);
})();
export {
  FieldType2 as FieldType,
  FormlyMaterialModule,
  withFormlyMaterial
};
//# sourceMappingURL=@ngx-formly_material.js.map
