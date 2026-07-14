# let vs var vs const — Declaration Keywords in JavaScript

**Example file:** `01_Basics/02_let_Concept.js`

---

## Comparison Table

| Aspect | **`var`** | **`let`** | **`const`** |
|--------|-----------|-----------|-------------|
| **Scope** | Function-scoped | Block-scoped `{ }` | Block-scoped `{ }` |
| **Hoisting** | Hoisted & initialized → `undefined` | Hoisted but **not initialized** → TDZ error if accessed early | Hoisted but **not initialized** → TDZ error if accessed early |
| **Reassignment** | ✅ Allowed | ✅ Allowed | ❌ **Not allowed** (must initialize at declaration) |
| **Redeclaration** (same scope) | ✅ Allowed (silently overwrites) | ❌ `SyntaxError` | ❌ `SyntaxError` |
| **Global Object Property** | ✅ `window.varName` (in browsers) | ❌ Not attached to `window` | ❌ Not attached to `window` |
| **Temporal Dead Zone (TDZ)** | ❌ No TDZ | ✅ Exists (access before declaration throws `ReferenceError`) | ✅ Exists |
| **Must Initialize?** | ❌ No (defaults to `undefined`) | ❌ No (defaults to `undefined`) | ✅ **Yes** — `const x;` is an error |
| **Typical Use Case** | Legacy / older JS code | Mutable variable limited to a block | Constant / immutable reference |

---

## Code Walkthrough — `let` in Action

```js
// 01_Basics/02_let_Concept.js
let x = 6;
console.log(x);  // Output: 6
```

| Line | Layer | What Happens |
|------|-------|-------------|
| **`let x`** | **Source Code** | You declare `x` with block-scoped semantics. The engine **hoists** the identifier but does **not** initialize it — it enters the **Temporal Dead Zone (TDZ)**. |
| **`x = 6`** | **Source Code** | Assignment writes the value `6` into the memory slot reserved for `x`. |
| **Parser + Ignition** | **Byte Code** | V8's parser recognizes `let` and emits byte code that enforces the TDZ and block-scoping rules (e.g., `LdaUndefined`, `Star`, `LdaSmi`). The scope is recorded separately — **not** promoted to the global object. |
| **TurboFan (JIT)** | **Machine Code** | The JIT compiler produces optimized native instructions (`mov`, `cmp`, `call`) for the specific CPU architecture, handling the TDZ guard and scope chain lookups efficiently. |
| **`console.log(x)`** | **Execution** | The engine reads the value `6` from `x`'s memory location and passes it to the `console.log` built-in, which prints `6` to stdout. |

### Compare with `var`

```js
console.log(y); // undefined (no error — hoisted & initialized)
var y = 5;

console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
let z = 5;
```

### Compare with `const`

```js
const API_KEY = "abc123";
API_KEY = "xyz"; // ❌ TypeError: Assignment to constant variable

const user;      // ❌ SyntaxError: Missing initializer in const declaration
```

---

## Visual Flow

```
Source Code (02_let_Concept.js)
        │
        │   let x = 6;
        │   console.log(x);
        ▼
  ┌──────────────────────────────────────────┐
  │  Parser + Ignition (Byte Code Gen)       │
  │                                          │
  │  • Recognizes `let` → block-scoped       │
  │  • Enforces TDZ — no access before init  │
  │  • Emits scope-aware byte code           │
  │  • x lives in a Script/Block scope slot  │
  └──────────────────────────────────────────┘
        │
        ▼
  ┌──────────────────────────────────────────┐
  │  TurboFan (JIT → Machine Code)           │
  │                                          │
  │  • Optimizes TDZ guards                 │
  │  • Inlines scope lookups                │
  │  • Produces native x86/ARM instructions  │
  └──────────────────────────────────────────┘
        │
        ▼
  ┌──────────────────────────────────────────┐
  │  Execution                               │
  │                                          │
  │  • x is allocated, assigned 6            │
  │  • console.log reads x → prints "6"      │
  └──────────────────────────────────────────┘
        │
        ▼
   Output: 6
```

---

## TL;DR

- **`var`** — function-scoped, hoisted as `undefined`, no TDZ, can redeclare. Avoid in modern code.
- **`let`** — block-scoped, TDZ exists, can reassign but **not** redeclare in the same scope. Use for mutable variables.
- **`const`** — block-scoped, TDZ exists, **must** initialize, **cannot** reassign the binding itself (though objects/arrays it points to can still mutate). Use by default — only fall back to `let` when you need reassignment.
