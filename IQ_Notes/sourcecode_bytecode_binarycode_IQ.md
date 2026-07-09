# Source Code vs Byte Code vs Binary Code

**Example file:** `01_Basics/01_Hello.js`

---

## Comparison Table

| Aspect | **Source Code** | **Byte Code** | **Binary Code** |
|--------|----------------|---------------|-----------------|
| **What is it?** | Human-readable instructions written in a high-level programming language | Intermediate representation — a compiled-down version of source code that is still platform-independent | Machine-readable instructions — raw 0s and 1s that the CPU executes directly |
| **Who reads it?** | Humans (developers) | Virtual Machines (e.g., JVM, V8 JS engine) | CPU hardware |
| **Readability** | Highly readable, uses English-like syntax | Somewhat readable with tools, but mostly low-level opcodes | Not human-readable at all |
| **Execution** | Cannot be executed directly | Needs a runtime/interpreter (e.g., Node.js, JVM) to be executed or JIT-compiled further | Executed directly by the CPU |
| **Portability** | Portable across platforms (same code runs anywhere with the right runtime) | Portable across platforms (same byte code runs on any machine with the appropriate VM) | **Not portable** — tied to a specific CPU architecture (x86, ARM, etc.) |
| **Our Example** | `console.log("Hello Sandeep, Welcome to the world of JavaScript.");` | V8 engine compiles this to low-level opcodes like `LdaConstant`, `CallRuntime`, `Return` inside Node.js | The CPU ultimately executes raw machine instructions such as `mov`, `add`, `call` on x86 or ARM |
| **File Extension** | `.js`, `.py`, `.java`, `.c`, etc. | `.class` (Java), `.pyc` (Python), internal engine memory (V8) | `.exe`, `.bin`, `.o`, `.out` |
| **Optimization** | Written for clarity and maintainability | Partially optimized by the compiler (e.g., V8's Ignition interpreter) | Heavily optimized for the target CPU |
| **Examples of tools** | VS Code, Notepad, any text editor | V8 (Ignition + TurboFan), JVM, Python VM | CPU itself, OS loader |

---

## Visual Flow for Our Example

```
Source Code (01_Hello.js)
        │
        ▼
  ┌─────────────────────────────┐
  │ console.log("Hello ... ");  │  ← Human writes this
  └─────────────────────────────┘
        │
        ▼  (Parsing & Compilation via V8's Parser + Ignition)
        │
  ┌─────────────────────────────┐
  │ Byte Code                   │  ← V8 stores this in memory
  │ (Platform-independent       │     as low-level opcodes
  │  intermediate form)         │
  └─────────────────────────────┘
        │
        ▼  (JIT Compilation via V8's TurboFan)
        │
  ┌─────────────────────────────┐
  │ Binary Code                 │  ← CPU executes this
  │ (Machine code — 0s & 1s    │
  │  specific to your CPU)      │
  └─────────────────────────────┘
        │
        ▼
   Output: "Hello Sandeep, Welcome to the world of JavaScript."
```

## Key Takeaway

- **Source code** is what **you** write.
- **Byte code** is what the **engine (V8/Node.js)** produces to interpret your code efficiently.
- **Binary code** is what the **CPU** finally runs.
