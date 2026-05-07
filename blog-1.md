# Why `any` is Dangerous and Why `unknown` is Safer in TypeScript

## Introduction

When developers first start using TypeScript, the `any` type often feels very convenient. It allows us to bypass TypeScript’s strict checking system and write code quickly. But this convenience comes with a hidden cost. Many developers call `any` a **“type safety hole”** because it disables TypeScript’s main purpose: protecting your code from unexpected errors.

In modern TypeScript development, `unknown` is considered a much safer alternative when dealing with unpredictable data. In this blog, we’ll explore why `any` can be risky, why `unknown` is safer, and how **type narrowing** helps us work with uncertain data safely.

---

# Understanding the `any` Type

The `any` type tells TypeScript:

> “Trust me, I know what I’m doing.”

When a variable is marked as `any`, TypeScript stops checking its type completely.

## Example of `any`

```ts
let data: any = "Hello World";

data.toUpperCase(); // Works
data = 100;
data.toUpperCase(); // Runtime Error!
```
