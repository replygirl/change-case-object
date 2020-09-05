# change-case-object

Recursively change the case of an object's keys

## Installation

```bash
yarn add @replygirl/change-case-object
```

## Usage

- [Functions](#functions)
- [`CasedObject` class](#casedobject-class)

### Functions

```js
import { /* function */ } from 'change-case-object'
```

- [`camelCase`](#camelcase)
- [`capitalCase`](#capitalcase)
- [`constantCase`](#constantcase)
- [`dotCase`](#dotcase)
- [`headerCase`](#headercase)
- [`noCase`](#nocase)
- [`paramCase`](#paramcase)
- [`pascalCase`](#pascalcase)
- [`pathCase`](#pathcase)
- [`sentenceCase`](#sentencecase)
- [`snakeCase`](#snakecase)

#### `camelCase`

```ts
camelCase({ some_key: { some_other_key: true })
// { someKey: { someOtherKey: true }}
```

#### `capitalCase`

```ts
capitalCase({ some_key: { some_other_key: true })
// { 'Some Key': { 'Some Other Key': true }}
```

#### `constantCase`

```ts
constantCase({ some_key: { some_other_key: true })
// { SOME_KEY: { SOME_OTHER_KEY: true }}
```

#### `dotCase`

Why would you do this??

```ts
dotCase({ some_key: { some_other_key: true })
// { 'some.key': { 'some.other.key': true }}
```

#### `headerCase`

```ts
headerCase({ some_key: { some_other_key: true })
// { 'Some-Key': { 'Some-Other-Key': true }}
```

#### `noCase`

```ts
noCase({ some_key: { some_other_key: true })
// { 'some key': { 'some other key': true }}
```

#### `paramCase`

```ts
paramCase({ some_key: { some_other_key: true })
// { 'some-key': { 'some-other-key': true }}
```

#### `pascalCase`

```ts
pascalCase({ some_key: { some_other_key: true })
// { SomeKey: { SomeOtherKey: true }}
```

#### `pathCase`

```ts
pathCase({ some_key: { some_other_key: true })
// { 'some/key': { 'some/other/key': true }}
```

#### `sentenceCase`

```ts
sentenceCase({ some_key: { some_other_key: true })
// { 'Some key': { 'Some other key': true }}
```

#### `snakeCase`

```ts
snakeCase({ 'some key': { 'some other key': true })
// { some_key: { some_other_key: true }}
```

### `CasedObject` class

```ts
import { CasedObject /*, Case */ } from 'change-case-object'
```

#### Static functions

[All of the individual functions](#functions) are available as static members.

```ts
CasedObject.camelCase({ some_key: { some_other_key: true }})
// { someKey: { someOtherKey: true }}
```

#### Instances

```ts
const someObj = { some_key: { 'some other key': true }}

// initialize without changing case
const foo = new CasedObject(someObj)
console.info(foo.value) // { some_key: { 'some other key': true }}

// initialize and change case
const bar = new CasedObject(someObj, { case: 'camel' })
console.info(bar.value) // { someKey: { someOtherKey: true }}

// initialize and change case using enum
const baz = new CasedObject(someObj, { case: Case.camel })
console.info(baz.value) // { someKey: { someOtherKey: true }}

// output the value with keys in a different case
console.info(baz.snakeCase) // { some_key: { some_other_key: true }}
console.info(baz.value) // { someKey: { someOtherKey: true }}

// change the case of the value's keys
baz.value = baz.snakeCase
console.info(baz.value) // { some_key: { some_other_key: true }}
```

## License

[ISC (c) 2020 replygirl](https://github.com/replygirl/change-case-object/blob/main/LICENSE.md)
