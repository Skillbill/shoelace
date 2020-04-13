/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SlAlert {
        /**
          * Set to true to make the alert closable.
         */
        "closable": boolean;
        /**
          * Set to true to close the alert.
         */
        "closed": boolean;
        /**
          * The type of alert to draw.
         */
        "type": string;
    }
    interface SlButton {
        /**
          * Set to true to draw the button with a caret for use with dropdowns, popovers, etc.
         */
        "caret": boolean;
        /**
          * Set to true to draw a circle button.
         */
        "circle": boolean;
        /**
          * Set to true to disable the button.
         */
        "disabled": boolean;
        /**
          * Set to true to draw the button in a loading state.
         */
        "loading": boolean;
        /**
          * Set to true to draw a pill-style button with rounded edges.
         */
        "pill": boolean;
        /**
          * Removes focus from the button.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the button.
         */
        "setFocus": () => Promise<void>;
        /**
          * The button's size.
         */
        "size": "small" | "medium" | "large";
        /**
          * The button's type.
         */
        "type": "default" | "primary" | "success" | "info" | "warning" | "danger" | "text";
    }
    interface SlCheckbox {
        /**
          * Set to true to draw the checkbox in a checked state.
         */
        "checked": boolean;
        /**
          * Set to true to disable the checkbox.
         */
        "disabled": boolean;
        /**
          * Set to true to draw the checkbox in an indeterminate state.
         */
        "indeterminate": boolean;
        /**
          * A native input's name attribute.
         */
        "name": string;
        /**
          * Removes focus from the checkbox.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the checkbox.
         */
        "setFocus": () => Promise<void>;
        /**
          * The native input's value attribute.
         */
        "value": string;
    }
    interface SlDropdown {
        "close": () => Promise<void>;
        "open": () => Promise<void>;
        /**
          * The preferred placement of the dropdown menu. Note that the actual placement may vary as needed to keep the menu inside of the viewport.
         */
        "placement": "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end";
        /**
          * The positioning strategy used for displaying the menu. If the menu is clipped by a containing element's overflow, setting this to `fixed` usually resolves it. Note that `fixed` is less performant than `absolute`, so avoid using the former when possible.
         */
        "position": "fixed" | "absolute";
    }
    interface SlDropdownDivider {
    }
    interface SlDropdownItem {
        /**
          * Set to true to draw the dropdown item in an active state.
         */
        "active": boolean;
        /**
          * Set to true to draw the item in a checked state.
         */
        "checked": boolean;
        /**
          * Set to true to draw the dropdown item in a disabled state.
         */
        "disabled": boolean;
    }
    interface SlIcon {
        /**
          * An alternative description to use for accessibility. If omitted, the name or src will be used to generate it.
         */
        "label": string;
        /**
          * The name of the icon to draw.
         */
        "name": string;
        /**
          * An external URL of an SVG file.
         */
        "src": string;
        /**
          * Sets the stroke width in supported icons.
         */
        "strokeWidth": string;
    }
    interface SlInput {
        /**
          * The input's autocaptialize attribute.
         */
        "autocapitalize": string;
        /**
          * The input's autocomplete attribute.
         */
        "autocomplete": string;
        /**
          * The input's autocorrect attribute.
         */
        "autocorrect": string;
        /**
          * The input's autofocus attribute.
         */
        "autofocus": boolean;
        /**
          * Set to true to add a clear button when the input is populated.
         */
        "clearable": boolean;
        /**
          * Set to true to disable the input.
         */
        "disabled": boolean;
        /**
          * The input's inputmode attribute.
         */
        "inputmode": "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        /**
          * The input's max attribute.
         */
        "max": number;
        /**
          * The input's maxlength attribute.
         */
        "maxlength": number;
        /**
          * The input's min attribute.
         */
        "min": number;
        /**
          * The input's minlength attribute.
         */
        "minlength": number;
        /**
          * The input's name attribute.
         */
        "name": string;
        /**
          * The input's pattern attribute.
         */
        "pattern": string;
        /**
          * The input's placeholder text.
         */
        "placeholder": string;
        /**
          * Set to true for a readonly input.
         */
        "readonly": boolean;
        /**
          * Removes focus from the input.
         */
        "removeFocus": () => Promise<void>;
        /**
          * The input's required attribute.
         */
        "required": boolean;
        /**
          * Sets focus on the input.
         */
        "setFocus": () => Promise<void>;
        /**
          * The input's size, one of `small`, `medium`, or `large`.
         */
        "size": string;
        /**
          * The input's step attribute.
         */
        "step": number;
        /**
          * Set to true to add a password toggle button for password inputs.
         */
        "togglePassword": boolean;
        /**
          * The input's type, one of `text`, `number`, `email`, etc.
         */
        "type": "email" | "number" | "password" | "search" | "tel" | "text" | "url";
        /**
          * The input's value attribute.
         */
        "value": string;
    }
    interface SlProgressBar {
        /**
          * The height of the progress bar in pixels.
         */
        "height": number;
        /**
          * The progress bar's percentage, 0 to 100.
         */
        "percentage": number;
    }
    interface SlProgressRing {
        /**
          * The diameter of the progress ring in pixels.
         */
        "diameter": number;
        /**
          * The current progress percentage, 0 - 100.
         */
        "percentage": number;
        /**
          * The stroke width of the progress ring in pixels.
         */
        "stroke": number;
    }
    interface SlRadio {
        /**
          * Set to true to draw the radio in a checked state.
         */
        "checked": boolean;
        /**
          * Set to true to disable the radio.
         */
        "disabled": boolean;
        /**
          * A native input's name attribute.
         */
        "name": string;
        /**
          * Removes focus from the radio.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the radio.
         */
        "setFocus": () => Promise<void>;
        /**
          * The native input's value attribute.
         */
        "value": string;
    }
    interface SlRange {
        /**
          * Set to true to disable the input.
         */
        "disabled": boolean;
        /**
          * The input's max attribute.
         */
        "max": number;
        /**
          * The input's min attribute.
         */
        "min": number;
        /**
          * The input's name attribute.
         */
        "name": string;
        /**
          * Removes focus from the input.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the input.
         */
        "setFocus": () => Promise<void>;
        /**
          * The input's step attribute.
         */
        "step": number;
        /**
          * The tooltip's position.
         */
        "tooltip": "top" | "bottom" | "off";
        /**
          * A function used to format the tooltip's value.
         */
        "tooltipFormatter": (value: number) => string;
        /**
          * The input's value attribute.
         */
        "value": number;
    }
    interface SlSpinner {
        /**
          * The spinner's size.
         */
        "diameter": number;
        "stroke": number;
    }
    interface SlSwitch {
        /**
          * Set to true to draw the switch in a checked state.
         */
        "checked": boolean;
        /**
          * Set to true to disable the switch.
         */
        "disabled": boolean;
        /**
          * A native input's name attribute.
         */
        "name": string;
        /**
          * Removes focus from the switch.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus on the switch.
         */
        "setFocus": () => Promise<void>;
        /**
          * The native input's value attribute.
         */
        "value": string;
    }
    interface SlTab {
        /**
          * Set to true to draw the tab in an active state.
         */
        "active": boolean;
        /**
          * Set to true to draw the tab in a disabled state.
         */
        "disabled": boolean;
        /**
          * The name of the tab panel the tab will be synced to. The panel must exist in the same `<sl-tabs>` element.
         */
        "panel": string;
        /**
          * Removes focus from the tab.
         */
        "removeFocus": () => Promise<void>;
        /**
          * Sets focus to the tab.
         */
        "setFocus": () => Promise<void>;
    }
    interface SlTabPanel {
        /**
          * When true, the tab panel will be shown.
         */
        "active": boolean;
        /**
          * The tab panel's name.
         */
        "name": string;
    }
    interface SlTabs {
        /**
          * The position of the tabs.
         */
        "position": "top" | "bottom" | "left" | "right";
        /**
          * Shows the specified tab panel.
         */
        "show": (panel: string) => Promise<void>;
    }
    interface SlTextarea {
        /**
          * The textarea's autocaptialize attribute.
         */
        "autocapitalize": string;
        /**
          * The textarea's autocomplete attribute.
         */
        "autocomplete": string;
        /**
          * The textarea's autocorrect attribute.
         */
        "autocorrect": string;
        /**
          * The textarea's autofocus attribute.
         */
        "autofocus": boolean;
        /**
          * Set to true to disable the textarea.
         */
        "disabled": boolean;
        /**
          * The textarea's inputmode attribute.
         */
        "inputmode": "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        /**
          * The textarea's maxlength attribute.
         */
        "maxlength": number;
        /**
          * The textarea's name attribute.
         */
        "name": string;
        /**
          * The textarea's placeholder text.
         */
        "placeholder": string;
        /**
          * Set to true for a readonly textarea.
         */
        "readonly": boolean;
        /**
          * Removes focus fromt the textarea.
         */
        "removeFocus": () => Promise<void>;
        /**
          * The textarea's required attribute.
         */
        "required": boolean;
        /**
          * Controls how the textarea can be resized.
         */
        "resize": "none" | "vertical" | "auto";
        /**
          * The number of rows to display by default.
         */
        "rows": number;
        /**
          * Sets focus on the textarea.
         */
        "setFocus": () => Promise<void>;
        /**
          * The textarea's size.
         */
        "size": "small" | "medium" | "large";
        /**
          * The textarea's value attribute.
         */
        "value": string;
    }
    interface SlTooltip {
        /**
          * Set to true to draw the the tooltip with an arrow.
         */
        "arrow": boolean;
        /**
          * Set to true to disable the tooltip so it won't show when triggered.
         */
        "disabled": boolean;
        /**
          * The distance in pixels from which to draw the tooltip from its target element.
         */
        "distance": number;
        /**
          * Shows the tooltip.
         */
        "hide": () => Promise<void>;
        /**
          * The delay in ms before the tooltip hides.
         */
        "hideDelay": number;
        /**
          * The duration in ms of the tooltip's hide transition.
         */
        "hideDuration": number;
        /**
          * The maximum width in pixels the tooltip can be before its content wraps.
         */
        "maxWidth": number;
        /**
          * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip inside of the viewport.
         */
        "placement": "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
        /**
          * Shows the tooltip.
         */
        "show": () => Promise<void>;
        /**
          * The delay in ms before showing the tooltip.
         */
        "showDelay": number;
        /**
          * The duration in ms of the tooltip's show transition.
         */
        "showDuration": number;
        /**
          * A selector or element to use as the tooltip's target. This is the element that will trigger the tooltip to show upon interaction. If no target is specified, the previous sibling element of the tooltip will be used. A common way to link a tooltip to a target is to give the target an `id` and pass `#id` to the `target` prop.
         */
        "target": string | HTMLElement;
        /**
          * The events that cause a tooltip to show, separated by a space. Possible values include any combination of `mouseenter`, `focus`, `click`, and `manual`. Use `manual` if you only want to show and hide the tooltip programmatically.
         */
        "trigger": string;
        /**
          * Sets the tooltip's z-index.
         */
        "zIndex": number;
    }
}
declare global {
    interface HTMLSlAlertElement extends Components.SlAlert, HTMLStencilElement {
    }
    var HTMLSlAlertElement: {
        prototype: HTMLSlAlertElement;
        new (): HTMLSlAlertElement;
    };
    interface HTMLSlButtonElement extends Components.SlButton, HTMLStencilElement {
    }
    var HTMLSlButtonElement: {
        prototype: HTMLSlButtonElement;
        new (): HTMLSlButtonElement;
    };
    interface HTMLSlCheckboxElement extends Components.SlCheckbox, HTMLStencilElement {
    }
    var HTMLSlCheckboxElement: {
        prototype: HTMLSlCheckboxElement;
        new (): HTMLSlCheckboxElement;
    };
    interface HTMLSlDropdownElement extends Components.SlDropdown, HTMLStencilElement {
    }
    var HTMLSlDropdownElement: {
        prototype: HTMLSlDropdownElement;
        new (): HTMLSlDropdownElement;
    };
    interface HTMLSlDropdownDividerElement extends Components.SlDropdownDivider, HTMLStencilElement {
    }
    var HTMLSlDropdownDividerElement: {
        prototype: HTMLSlDropdownDividerElement;
        new (): HTMLSlDropdownDividerElement;
    };
    interface HTMLSlDropdownItemElement extends Components.SlDropdownItem, HTMLStencilElement {
    }
    var HTMLSlDropdownItemElement: {
        prototype: HTMLSlDropdownItemElement;
        new (): HTMLSlDropdownItemElement;
    };
    interface HTMLSlIconElement extends Components.SlIcon, HTMLStencilElement {
    }
    var HTMLSlIconElement: {
        prototype: HTMLSlIconElement;
        new (): HTMLSlIconElement;
    };
    interface HTMLSlInputElement extends Components.SlInput, HTMLStencilElement {
    }
    var HTMLSlInputElement: {
        prototype: HTMLSlInputElement;
        new (): HTMLSlInputElement;
    };
    interface HTMLSlProgressBarElement extends Components.SlProgressBar, HTMLStencilElement {
    }
    var HTMLSlProgressBarElement: {
        prototype: HTMLSlProgressBarElement;
        new (): HTMLSlProgressBarElement;
    };
    interface HTMLSlProgressRingElement extends Components.SlProgressRing, HTMLStencilElement {
    }
    var HTMLSlProgressRingElement: {
        prototype: HTMLSlProgressRingElement;
        new (): HTMLSlProgressRingElement;
    };
    interface HTMLSlRadioElement extends Components.SlRadio, HTMLStencilElement {
    }
    var HTMLSlRadioElement: {
        prototype: HTMLSlRadioElement;
        new (): HTMLSlRadioElement;
    };
    interface HTMLSlRangeElement extends Components.SlRange, HTMLStencilElement {
    }
    var HTMLSlRangeElement: {
        prototype: HTMLSlRangeElement;
        new (): HTMLSlRangeElement;
    };
    interface HTMLSlSpinnerElement extends Components.SlSpinner, HTMLStencilElement {
    }
    var HTMLSlSpinnerElement: {
        prototype: HTMLSlSpinnerElement;
        new (): HTMLSlSpinnerElement;
    };
    interface HTMLSlSwitchElement extends Components.SlSwitch, HTMLStencilElement {
    }
    var HTMLSlSwitchElement: {
        prototype: HTMLSlSwitchElement;
        new (): HTMLSlSwitchElement;
    };
    interface HTMLSlTabElement extends Components.SlTab, HTMLStencilElement {
    }
    var HTMLSlTabElement: {
        prototype: HTMLSlTabElement;
        new (): HTMLSlTabElement;
    };
    interface HTMLSlTabPanelElement extends Components.SlTabPanel, HTMLStencilElement {
    }
    var HTMLSlTabPanelElement: {
        prototype: HTMLSlTabPanelElement;
        new (): HTMLSlTabPanelElement;
    };
    interface HTMLSlTabsElement extends Components.SlTabs, HTMLStencilElement {
    }
    var HTMLSlTabsElement: {
        prototype: HTMLSlTabsElement;
        new (): HTMLSlTabsElement;
    };
    interface HTMLSlTextareaElement extends Components.SlTextarea, HTMLStencilElement {
    }
    var HTMLSlTextareaElement: {
        prototype: HTMLSlTextareaElement;
        new (): HTMLSlTextareaElement;
    };
    interface HTMLSlTooltipElement extends Components.SlTooltip, HTMLStencilElement {
    }
    var HTMLSlTooltipElement: {
        prototype: HTMLSlTooltipElement;
        new (): HTMLSlTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "sl-alert": HTMLSlAlertElement;
        "sl-button": HTMLSlButtonElement;
        "sl-checkbox": HTMLSlCheckboxElement;
        "sl-dropdown": HTMLSlDropdownElement;
        "sl-dropdown-divider": HTMLSlDropdownDividerElement;
        "sl-dropdown-item": HTMLSlDropdownItemElement;
        "sl-icon": HTMLSlIconElement;
        "sl-input": HTMLSlInputElement;
        "sl-progress-bar": HTMLSlProgressBarElement;
        "sl-progress-ring": HTMLSlProgressRingElement;
        "sl-radio": HTMLSlRadioElement;
        "sl-range": HTMLSlRangeElement;
        "sl-spinner": HTMLSlSpinnerElement;
        "sl-switch": HTMLSlSwitchElement;
        "sl-tab": HTMLSlTabElement;
        "sl-tab-panel": HTMLSlTabPanelElement;
        "sl-tabs": HTMLSlTabsElement;
        "sl-textarea": HTMLSlTextareaElement;
        "sl-tooltip": HTMLSlTooltipElement;
    }
}
declare namespace LocalJSX {
    interface SlAlert {
        /**
          * Set to true to make the alert closable.
         */
        "closable"?: boolean;
        /**
          * Set to true to close the alert.
         */
        "closed"?: boolean;
        /**
          * Emitted when the alert is closed.
         */
        "onSlClose"?: (event: CustomEvent<any>) => void;
        /**
          * The type of alert to draw.
         */
        "type"?: string;
    }
    interface SlButton {
        /**
          * Set to true to draw the button with a caret for use with dropdowns, popovers, etc.
         */
        "caret"?: boolean;
        /**
          * Set to true to draw a circle button.
         */
        "circle"?: boolean;
        /**
          * Set to true to disable the button.
         */
        "disabled"?: boolean;
        /**
          * Set to true to draw the button in a loading state.
         */
        "loading"?: boolean;
        /**
          * Set to true to draw a pill-style button with rounded edges.
         */
        "pill"?: boolean;
        /**
          * The button's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
          * The button's type.
         */
        "type"?: "default" | "primary" | "success" | "info" | "warning" | "danger" | "text";
    }
    interface SlCheckbox {
        /**
          * Set to true to draw the checkbox in a checked state.
         */
        "checked"?: boolean;
        /**
          * Set to true to disable the checkbox.
         */
        "disabled"?: boolean;
        /**
          * Set to true to draw the checkbox in an indeterminate state.
         */
        "indeterminate"?: boolean;
        /**
          * A native input's name attribute.
         */
        "name"?: string;
        /**
          * The native input's value attribute.
         */
        "value"?: string;
    }
    interface SlDropdown {
        /**
          * The preferred placement of the dropdown menu. Note that the actual placement may vary as needed to keep the menu inside of the viewport.
         */
        "placement"?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end";
        /**
          * The positioning strategy used for displaying the menu. If the menu is clipped by a containing element's overflow, setting this to `fixed` usually resolves it. Note that `fixed` is less performant than `absolute`, so avoid using the former when possible.
         */
        "position"?: "fixed" | "absolute";
    }
    interface SlDropdownDivider {
    }
    interface SlDropdownItem {
        /**
          * Set to true to draw the dropdown item in an active state.
         */
        "active"?: boolean;
        /**
          * Set to true to draw the item in a checked state.
         */
        "checked"?: boolean;
        /**
          * Set to true to draw the dropdown item in a disabled state.
         */
        "disabled"?: boolean;
        "onSlSelect"?: (event: CustomEvent<any>) => void;
    }
    interface SlIcon {
        /**
          * An alternative description to use for accessibility. If omitted, the name or src will be used to generate it.
         */
        "label"?: string;
        /**
          * The name of the icon to draw.
         */
        "name"?: string;
        /**
          * An external URL of an SVG file.
         */
        "src"?: string;
        /**
          * Sets the stroke width in supported icons.
         */
        "strokeWidth"?: string;
    }
    interface SlInput {
        /**
          * The input's autocaptialize attribute.
         */
        "autocapitalize"?: string;
        /**
          * The input's autocomplete attribute.
         */
        "autocomplete"?: string;
        /**
          * The input's autocorrect attribute.
         */
        "autocorrect"?: string;
        /**
          * The input's autofocus attribute.
         */
        "autofocus"?: boolean;
        /**
          * Set to true to add a clear button when the input is populated.
         */
        "clearable"?: boolean;
        /**
          * Set to true to disable the input.
         */
        "disabled"?: boolean;
        /**
          * The input's inputmode attribute.
         */
        "inputmode"?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        /**
          * The input's max attribute.
         */
        "max"?: number;
        /**
          * The input's maxlength attribute.
         */
        "maxlength"?: number;
        /**
          * The input's min attribute.
         */
        "min"?: number;
        /**
          * The input's minlength attribute.
         */
        "minlength"?: number;
        /**
          * The input's name attribute.
         */
        "name"?: string;
        /**
          * The input's pattern attribute.
         */
        "pattern"?: string;
        /**
          * The input's placeholder text.
         */
        "placeholder"?: string;
        /**
          * Set to true for a readonly input.
         */
        "readonly"?: boolean;
        /**
          * The input's required attribute.
         */
        "required"?: boolean;
        /**
          * The input's size, one of `small`, `medium`, or `large`.
         */
        "size"?: string;
        /**
          * The input's step attribute.
         */
        "step"?: number;
        /**
          * Set to true to add a password toggle button for password inputs.
         */
        "togglePassword"?: boolean;
        /**
          * The input's type, one of `text`, `number`, `email`, etc.
         */
        "type"?: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
        /**
          * The input's value attribute.
         */
        "value"?: string;
    }
    interface SlProgressBar {
        /**
          * The height of the progress bar in pixels.
         */
        "height"?: number;
        /**
          * The progress bar's percentage, 0 to 100.
         */
        "percentage"?: number;
    }
    interface SlProgressRing {
        /**
          * The diameter of the progress ring in pixels.
         */
        "diameter"?: number;
        /**
          * The current progress percentage, 0 - 100.
         */
        "percentage"?: number;
        /**
          * The stroke width of the progress ring in pixels.
         */
        "stroke"?: number;
    }
    interface SlRadio {
        /**
          * Set to true to draw the radio in a checked state.
         */
        "checked"?: boolean;
        /**
          * Set to true to disable the radio.
         */
        "disabled"?: boolean;
        /**
          * A native input's name attribute.
         */
        "name"?: string;
        /**
          * The native input's value attribute.
         */
        "value"?: string;
    }
    interface SlRange {
        /**
          * Set to true to disable the input.
         */
        "disabled"?: boolean;
        /**
          * The input's max attribute.
         */
        "max"?: number;
        /**
          * The input's min attribute.
         */
        "min"?: number;
        /**
          * The input's name attribute.
         */
        "name"?: string;
        /**
          * The input's step attribute.
         */
        "step"?: number;
        /**
          * The tooltip's position.
         */
        "tooltip"?: "top" | "bottom" | "off";
        /**
          * A function used to format the tooltip's value.
         */
        "tooltipFormatter"?: (value: number) => string;
        /**
          * The input's value attribute.
         */
        "value"?: number;
    }
    interface SlSpinner {
        /**
          * The spinner's size.
         */
        "diameter"?: number;
        "stroke"?: number;
    }
    interface SlSwitch {
        /**
          * Set to true to draw the switch in a checked state.
         */
        "checked"?: boolean;
        /**
          * Set to true to disable the switch.
         */
        "disabled"?: boolean;
        /**
          * A native input's name attribute.
         */
        "name"?: string;
        /**
          * The native input's value attribute.
         */
        "value"?: string;
    }
    interface SlTab {
        /**
          * Set to true to draw the tab in an active state.
         */
        "active"?: boolean;
        /**
          * Set to true to draw the tab in a disabled state.
         */
        "disabled"?: boolean;
        /**
          * The name of the tab panel the tab will be synced to. The panel must exist in the same `<sl-tabs>` element.
         */
        "panel"?: string;
    }
    interface SlTabPanel {
        /**
          * When true, the tab panel will be shown.
         */
        "active"?: boolean;
        /**
          * The tab panel's name.
         */
        "name"?: string;
    }
    interface SlTabs {
        /**
          * Emitted when a tab is hidden.
         */
        "onSlTabHide"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when a tab is shown.
         */
        "onSlTabShow"?: (event: CustomEvent<any>) => void;
        /**
          * The position of the tabs.
         */
        "position"?: "top" | "bottom" | "left" | "right";
    }
    interface SlTextarea {
        /**
          * The textarea's autocaptialize attribute.
         */
        "autocapitalize"?: string;
        /**
          * The textarea's autocomplete attribute.
         */
        "autocomplete"?: string;
        /**
          * The textarea's autocorrect attribute.
         */
        "autocorrect"?: string;
        /**
          * The textarea's autofocus attribute.
         */
        "autofocus"?: boolean;
        /**
          * Set to true to disable the textarea.
         */
        "disabled"?: boolean;
        /**
          * The textarea's inputmode attribute.
         */
        "inputmode"?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        /**
          * The textarea's maxlength attribute.
         */
        "maxlength"?: number;
        /**
          * The textarea's name attribute.
         */
        "name"?: string;
        /**
          * The textarea's placeholder text.
         */
        "placeholder"?: string;
        /**
          * Set to true for a readonly textarea.
         */
        "readonly"?: boolean;
        /**
          * The textarea's required attribute.
         */
        "required"?: boolean;
        /**
          * Controls how the textarea can be resized.
         */
        "resize"?: "none" | "vertical" | "auto";
        /**
          * The number of rows to display by default.
         */
        "rows"?: number;
        /**
          * The textarea's size.
         */
        "size"?: "small" | "medium" | "large";
        /**
          * The textarea's value attribute.
         */
        "value"?: string;
    }
    interface SlTooltip {
        /**
          * Set to true to draw the the tooltip with an arrow.
         */
        "arrow"?: boolean;
        /**
          * Set to true to disable the tooltip so it won't show when triggered.
         */
        "disabled"?: boolean;
        /**
          * The distance in pixels from which to draw the tooltip from its target element.
         */
        "distance"?: number;
        /**
          * The delay in ms before the tooltip hides.
         */
        "hideDelay"?: number;
        /**
          * The duration in ms of the tooltip's hide transition.
         */
        "hideDuration"?: number;
        /**
          * The maximum width in pixels the tooltip can be before its content wraps.
         */
        "maxWidth"?: number;
        /**
          * Emitted when the tooltip has fully transitioned out and gets unmounted from the DOM.
         */
        "onShHidden"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the tooltip begins to hide.
         */
        "onSlHide"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the tooltip begins to show, but before it gets mounted to the DOM.
         */
        "onSlShow"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the tooltip has fully transitioned in.
         */
        "onSlShown"?: (event: CustomEvent<any>) => void;
        /**
          * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip inside of the viewport.
         */
        "placement"?: "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
        /**
          * The delay in ms before showing the tooltip.
         */
        "showDelay"?: number;
        /**
          * The duration in ms of the tooltip's show transition.
         */
        "showDuration"?: number;
        /**
          * A selector or element to use as the tooltip's target. This is the element that will trigger the tooltip to show upon interaction. If no target is specified, the previous sibling element of the tooltip will be used. A common way to link a tooltip to a target is to give the target an `id` and pass `#id` to the `target` prop.
         */
        "target"?: string | HTMLElement;
        /**
          * The events that cause a tooltip to show, separated by a space. Possible values include any combination of `mouseenter`, `focus`, `click`, and `manual`. Use `manual` if you only want to show and hide the tooltip programmatically.
         */
        "trigger"?: string;
        /**
          * Sets the tooltip's z-index.
         */
        "zIndex"?: number;
    }
    interface IntrinsicElements {
        "sl-alert": SlAlert;
        "sl-button": SlButton;
        "sl-checkbox": SlCheckbox;
        "sl-dropdown": SlDropdown;
        "sl-dropdown-divider": SlDropdownDivider;
        "sl-dropdown-item": SlDropdownItem;
        "sl-icon": SlIcon;
        "sl-input": SlInput;
        "sl-progress-bar": SlProgressBar;
        "sl-progress-ring": SlProgressRing;
        "sl-radio": SlRadio;
        "sl-range": SlRange;
        "sl-spinner": SlSpinner;
        "sl-switch": SlSwitch;
        "sl-tab": SlTab;
        "sl-tab-panel": SlTabPanel;
        "sl-tabs": SlTabs;
        "sl-textarea": SlTextarea;
        "sl-tooltip": SlTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sl-alert": LocalJSX.SlAlert & JSXBase.HTMLAttributes<HTMLSlAlertElement>;
            "sl-button": LocalJSX.SlButton & JSXBase.HTMLAttributes<HTMLSlButtonElement>;
            "sl-checkbox": LocalJSX.SlCheckbox & JSXBase.HTMLAttributes<HTMLSlCheckboxElement>;
            "sl-dropdown": LocalJSX.SlDropdown & JSXBase.HTMLAttributes<HTMLSlDropdownElement>;
            "sl-dropdown-divider": LocalJSX.SlDropdownDivider & JSXBase.HTMLAttributes<HTMLSlDropdownDividerElement>;
            "sl-dropdown-item": LocalJSX.SlDropdownItem & JSXBase.HTMLAttributes<HTMLSlDropdownItemElement>;
            "sl-icon": LocalJSX.SlIcon & JSXBase.HTMLAttributes<HTMLSlIconElement>;
            "sl-input": LocalJSX.SlInput & JSXBase.HTMLAttributes<HTMLSlInputElement>;
            "sl-progress-bar": LocalJSX.SlProgressBar & JSXBase.HTMLAttributes<HTMLSlProgressBarElement>;
            "sl-progress-ring": LocalJSX.SlProgressRing & JSXBase.HTMLAttributes<HTMLSlProgressRingElement>;
            "sl-radio": LocalJSX.SlRadio & JSXBase.HTMLAttributes<HTMLSlRadioElement>;
            "sl-range": LocalJSX.SlRange & JSXBase.HTMLAttributes<HTMLSlRangeElement>;
            "sl-spinner": LocalJSX.SlSpinner & JSXBase.HTMLAttributes<HTMLSlSpinnerElement>;
            "sl-switch": LocalJSX.SlSwitch & JSXBase.HTMLAttributes<HTMLSlSwitchElement>;
            "sl-tab": LocalJSX.SlTab & JSXBase.HTMLAttributes<HTMLSlTabElement>;
            "sl-tab-panel": LocalJSX.SlTabPanel & JSXBase.HTMLAttributes<HTMLSlTabPanelElement>;
            "sl-tabs": LocalJSX.SlTabs & JSXBase.HTMLAttributes<HTMLSlTabsElement>;
            "sl-textarea": LocalJSX.SlTextarea & JSXBase.HTMLAttributes<HTMLSlTextareaElement>;
            "sl-tooltip": LocalJSX.SlTooltip & JSXBase.HTMLAttributes<HTMLSlTooltipElement>;
        }
    }
}
