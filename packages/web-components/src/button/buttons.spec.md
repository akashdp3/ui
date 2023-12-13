# Button

A button represents a action that should invoke an action

## Goals

Create simple button elements

## Features

- ELement can behave as button
- Button element will have different variants
  - "primary", "secondary", "success", "danger", "ghost"

## Technical Specification

### Design

The component will have one custom element defination

- `wc-button` will create a button

### API

| Props     | Options                                              | Default Prop |
| --------- | ---------------------------------------------------- | ------------ |
| variant   | "primary", "secondary", "success", "danger", "ghost" | "secondary"  |
| type      | "submit", "button", "reset"                          | "button"     |
| autoFocus | Boolean                                              | false        |
| disabled  | Boolean                                              | false        |
| children  | HTML element                                         | -            |

### Examples

Sample Button
```html
<host>
  <wc-button variant="primary">Click me</wc-button>
</host>
```

Sample Button with Icons
```html
<host>
  <wc-button>
    <PlusIcon> <!-- TODO: Replace with + icon svg -->
    Add New User
  </wc-button>
</host>
```
